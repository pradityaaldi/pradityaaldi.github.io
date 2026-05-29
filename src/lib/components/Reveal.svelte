<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, delay = 0, class: cls = '' }: { children: Snippet; delay?: number; class?: string } =
		$props();

	let visible = $state(false);
	let el: HTMLElement;

	$effect(() => {
		const obs = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					obs.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		obs.observe(el);
		return () => obs.disconnect();
	});
</script>

<div
	bind:this={el}
	class="{cls} transition-all duration-700 ease-out {visible
		? 'translate-y-0 opacity-100'
		: 'translate-y-6 opacity-0'}"
	style="transition-delay: {delay}ms"
>
	{@render children()}
</div>
