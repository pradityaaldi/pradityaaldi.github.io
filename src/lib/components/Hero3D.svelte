<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import { onMount } from 'svelte';

	let mounted = $state(false);
	let dpr = $state(1.5);
	let reduceMotion = $state(false);

	// only mount WebGL client-side after hydration to keep static build clean
	onMount(() => {
		// cap pixel ratio → stops 2-3x render on retina/mobile (biggest perf win)
		dpr = Math.min(window.devicePixelRatio || 1, 1.75);
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		mounted = true;
	});
</script>

<div class="hero3d pointer-events-none fixed inset-0 z-40">
	{#if mounted}
		<!-- on-demand: GPU renders only when the laptop is actually moving -->
		<Canvas {dpr} renderMode="on-demand">
			<Scene {reduceMotion} />
		</Canvas>
	{/if}
</div>

<style>
	.hero3d {
		/* isolate compositing; skip layout/paint work leaking to the page */
		contain: layout paint;
	}
</style>
