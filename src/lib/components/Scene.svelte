<script lang="ts">
	import { T, useTask, useThrelte } from '@threlte/core';
	import { GLTF, Text, interactivity, type IntersectionEvent } from '@threlte/extras';
	import { base } from '$app/paths';
	import { BackSide, DoubleSide, Mesh, MeshBasicMaterial, type Group } from 'three';

	let { reduceMotion = false }: { reduceMotion?: boolean } = $props();

	const { invalidate, camera } = useThrelte();

	// viewport-reactive layout — fixed cam/fov means a portrait phone's narrow
	// horizontal FOV pushes a large +x offset off-screen, so the laptop must move
	// inward + shrink on small devices. tracked live via resize.
	let vw = $state(1280);
	$effect(() => {
		const onResize = () => (vw = window.innerWidth);
		onResize();
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	});

	// per-breakpoint world position + base scale of the laptop
	type Vec3 = [number, number, number];
	let layout = $derived.by((): { pos: Vec3; base: number } => {
		if (vw < 480) return { pos: [0, -4.1, 0], base: 0.5 }; // small phone: center, bigger
		if (vw < 640) return { pos: [0, -3.9, 0], base: 0.58 }; // phone
		if (vw < 1024) return { pos: [3.4, -3.9, 0], base: 0.52 }; // tablet
		return { pos: [6, -3.6, 0], base: 0.65 }; // desktop
	});

	const WHATSAPP = 'https://wa.me/6281225344932';

	// blue back-face shell → renders behind the laptop, slightly inflated = outline
	const outlineMat = new MeshBasicMaterial({ color: '#58a6ff', side: BackSide });

	// loaded glb scene (bound from <GLTF>), and a cloned shell used as the outline
	let scene = $state<Group | undefined>(undefined);
	let outline = $derived.by(() => {
		if (!scene) return undefined;
		const clone = scene.clone(true);
		clone.traverse((o) => {
			if (o instanceof Mesh) o.material = outlineMat;
		});
		return clone;
	});

	const openWhatsApp = () => window.open(WHATSAPP, '_blank', 'noopener,noreferrer');

	// raycast pointer events on the whole page (canvas itself is pointer-events:none,
	// so page content stays clickable) → hover fires only when the ray hits the laptop.
	// custom compute: the canvas is fixed/fullscreen, so map against the VIEWPORT
	// (clientX/innerWidth). the default maps event.offsetY against documentElement's
	// full scroll height → ray misaligned on a tall page and the laptop never gets hit.
	interactivity({
		target: document.documentElement,
		compute: (event, state) => {
			state.pointer.update((p) => {
				p.set(
					(event.clientX / window.innerWidth) * 2 - 1,
					-(event.clientY / window.innerHeight) * 2 + 1
				);
				return p;
			});
			state.raycaster.setFromCamera(state.pointer.current, camera.current);
		}
	});

	// cursor in normalized device coords (-1..1), live-read in the task each frame
	let px = 0;
	let py = 0;
	let hovered = $state(false);

	// laptop transform — reactive (bound to <T.Group>)
	let spin = $state(0); // slow continuous Y rotation
	let lapRotX = $state(0); // cursor tilt (X)
	let tiltY = $state(0); // cursor tilt (Y), added on top of spin
	let lapScale = $state(0.65);

	const HOVER_MULT = 1.18; // grow factor on hover
	const SPIN_SPEED = 0.35; // rad/s — slow

	// keep scale synced to the responsive base when motion is off (task is skipped),
	// and force a repaint on any layout change since render is on-demand
	$effect(() => {
		if (reduceMotion) lapScale = layout.base;
		void layout;
		invalidate();
	});

	const accent = '#58a6ff';
	const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

	useTask(
		(delta) => {
			if (reduceMotion) return;

			spin += delta * SPIN_SPEED;

			// tilt toward cursor + grow only while the ray is over the model
			const targetY = hovered ? px * 0.6 : 0;
			const targetX = hovered ? -py * 0.4 : 0;
			const targetS = layout.base * (hovered ? HOVER_MULT : 1);
			const t = Math.min(delta * 5, 1);

			tiltY = lerp(tiltY, targetY, t);
			lapRotX = lerp(lapRotX, targetX, t);
			lapScale = lerp(lapScale, targetS, t);

			invalidate(); // always animating (spinning) → render next frame
		},
		{ autoInvalidate: false }
	);
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 11]} fov={50} />

<!-- neutral white lights → model keeps its original colors; cyan kept only as low accent -->
<T.AmbientLight intensity={0.9} />
<T.DirectionalLight position={[5, 8, 6]} intensity={2.4} color="#ffffff" />
<T.DirectionalLight position={[-4, 2, 4]} intensity={1} color="#ffffff" />
<T.PointLight position={[-6, -2, 5]} intensity={18} color={accent} />

<!-- ░░ LAPTOP (real glb — fixed position, reacts when the cursor is over it) ░░ -->
<T.Group
	position={layout.pos}
	rotation={[lapRotX, spin + tiltY, 0]}
	scale={lapScale}
	onpointerenter={() => {
		hovered = true;
		document.body.style.cursor = 'pointer';
		invalidate();
	}}
	onpointerleave={() => {
		hovered = false;
		document.body.style.cursor = '';
		invalidate();
	}}
	onpointermove={(e: IntersectionEvent<PointerEvent>) => {
		px = e.pointer.x;
		py = e.pointer.y;
		invalidate();
	}}
	onclick={openWhatsApp}
>
	<GLTF url="{base}/models/macbook.glb" bind:scene />
	<!-- blue outline shell — only visible on hover, sits just behind the model -->
	{#if outline}
		<T is={outline} scale={1.04} visible={hovered} />
	{/if}

	<!-- 3D "click me" tooltip — child of the laptop group, so the whole little
	     badge spins/tilts as one object with the laptop -->
	<T.Group position={[0, 2.4, 0]}>
		<!-- badge plate -->
		<T.Mesh>
			<T.PlaneGeometry args={[1.5, 0.6]} />
			<T.MeshBasicMaterial color={hovered ? '#2f81f7' : '#1f6feb'} toneMapped={false} side={DoubleSide} />
		</T.Mesh>
		<!-- pointer tip (small diamond) under the plate, aimed at the laptop -->
		<T.Mesh position={[0, -0.34, 0]} rotation={[0, 0, Math.PI / 4]}>
			<T.PlaneGeometry args={[0.22, 0.22]} />
			<T.MeshBasicMaterial color={hovered ? '#2f81f7' : '#1f6feb'} toneMapped={false} side={DoubleSide} />
		</T.Mesh>
		<!-- label text, nudged forward so it sits on top of the plate -->
		<Text
			text="click me"
			position={[0, 0, 0.01]}
			fontSize={0.26}
			anchorX="center"
			anchorY="middle"
			color="#ffffff"
		/>
		<!-- same label on the back, flipped 180° so it reads correctly from behind -->
		<Text
			text="click me"
			position={[0, 0, -0.01]}
			rotation={[0, Math.PI, 0]}
			fontSize={0.26}
			anchorX="center"
			anchorY="middle"
			color="#ffffff"
		/>
	</T.Group>
</T.Group>
