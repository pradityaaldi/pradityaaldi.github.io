<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { GLTF } from '@threlte/extras';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	// normalized cursor (-1..1) drives laptop interaction
	let pointer = $state({ x: 0, y: 0 });
	let active = $state(false);

	// laptop live transform, lerped toward cursor target
	let lapRotX = $state(0);
	let lapRotY = $state(0);
	let lapScale = $state(1.5);

	onMount(() => {
		const onMove = (e: PointerEvent) => {
			pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
			pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
			active = true;
		};
		const onLeave = () => (active = false);
		window.addEventListener('pointermove', onMove);
		window.addEventListener('pointerleave', onLeave);
		return () => {
			window.removeEventListener('pointermove', onMove);
			window.removeEventListener('pointerleave', onLeave);
		};
	});

	const accent = '#58a6ff';

	const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

	useTask((delta) => {
		// laptop faces cursor; rests flat + smaller when cursor absent
		const targetY = active ? pointer.x * 0.7 : 0;
		const targetX = active ? pointer.y * 0.4 : 0;
		const targetS = active ? 1.65 : 1.5;
		const t = Math.min(delta * 4, 1);
		lapRotY = lerp(lapRotY, targetY, t);
		lapRotX = lerp(lapRotX, targetX, t);
		lapScale = lerp(lapScale, targetS, t);
	});
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 11]} fov={50} />

<!-- neutral white lights → model keeps its original colors; cyan kept only as low accent -->
<T.AmbientLight intensity={0.9} />
<T.DirectionalLight position={[5, 8, 6]} intensity={2.4} color="#ffffff" />
<T.DirectionalLight position={[-4, 2, 4]} intensity={1} color="#ffffff" />
<T.PointLight position={[-6, -2, 5]} intensity={18} color={accent} />

<!-- ░░ LAPTOP (real glb — fixed position, tilts + scales toward cursor) ░░ -->
<T.Group position={[-3.3, -0.8, 0]} rotation={[lapRotX, lapRotY, 0]} scale={lapScale}>
	<GLTF url="{base}/models/macbook.glb" />
</T.Group>
