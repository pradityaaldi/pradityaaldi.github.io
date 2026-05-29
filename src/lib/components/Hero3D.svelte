<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import { onMount } from 'svelte';

	let mounted = $state(false);
	// only mount WebGL client-side after hydration to keep static build clean
	onMount(() => {
		mounted = true;
	});
</script>

<div class="pointer-events-none absolute inset-0 -z-10 opacity-80">
	{#if mounted}
		<Canvas>
			<Scene />
		</Canvas>
	{/if}
</div>
