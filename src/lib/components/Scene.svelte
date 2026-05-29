<script lang="ts">
	import { T, useTask, useThrelte } from '@threlte/core';
	import { GLTF, interactivity, type IntersectionEvent } from '@threlte/extras';
	import { base } from '$app/paths';
	import { BackSide, Mesh, MeshBasicMaterial, type Group } from 'three';

	let { reduceMotion = false }: { reduceMotion?: boolean } = $props();

	const { invalidate, camera } = useThrelte();

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
	let lapScale = $state(1);

	const REST = 1;
	const HOVER = 1.18;
	const SPIN_SPEED = 0.35; // rad/s — slow

	const accent = '#58a6ff';
	const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

	useTask(
		(delta) => {
			if (reduceMotion) return;

			spin += delta * SPIN_SPEED;

			// tilt toward cursor + grow only while the ray is over the model
			const targetY = hovered ? px * 0.6 : 0;
			const targetX = hovered ? -py * 0.4 : 0;
			const targetS = hovered ? HOVER : REST;
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
	position={[6, -3.6, 0]}
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
</T.Group>
