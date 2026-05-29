<script lang="ts">
	const items = [
		{ label: 'Home', index: 0, icon: 'M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3Z' },
		{
			label: 'Projects',
			index: 1,
			icon: 'M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z'
		},
		{
			label: 'Services',
			index: 2,
			icon: 'M22 12c0 .34-.02.67-.06 1l-2 .3a8 8 0 0 1-.7 1.7l1.2 1.6c-.4.55-.86 1-1.4 1.4l-1.6-1.2a8 8 0 0 1-1.7.7l-.3 2c-.66.08-1.34.08-2 0l-.3-2a8 8 0 0 1-1.7-.7l-1.6 1.2c-.55-.4-1-.86-1.4-1.4l1.2-1.6a8 8 0 0 1-.7-1.7l-2-.3a8.2 8.2 0 0 1 0-2l2-.3a8 8 0 0 1 .7-1.7L4.7 6.6c.4-.55.86-1 1.4-1.4l1.6 1.2a8 8 0 0 1 1.7-.7l.3-2c.66-.08 1.34-.08 2 0l.3 2a8 8 0 0 1 1.7.7l1.6-1.2c.55.4 1 .86 1.4 1.4l-1.2 1.6a8 8 0 0 1 .7 1.7l2 .3c.04.33.06.66.06 1Zm-10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
		},
		{
			label: 'Contact',
			index: 3,
			icon: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.4l8 5 8-5V6H4Zm16 2.8-7.47 4.67a1 1 0 0 1-1.06 0L4 8.8V18h16V8.8Z'
		}
	];

	function goto(i: number) {
		window.dispatchEvent(new CustomEvent('goto-slide', { detail: i }));
	}
</script>

<nav
	class="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 border border-ink-700 bg-ink-900/80 px-2 py-2 shadow-glow backdrop-blur-md"
>
	<ul class="flex items-center gap-1">
		{#each items as item}
			<li class="group relative">
				<button
					onclick={() => goto(item.index)}
					aria-label={item.label}
					class="flex h-11 w-11 items-center justify-center text-neutral-400 transition-all duration-300 hover:scale-110 hover:bg-accent/10 hover:text-accent"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d={item.icon} /></svg>
				</button>
				<span
					class="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap border border-ink-700 bg-ink-800 px-2 py-1 text-xs text-neutral-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
				>
					{item.label}
				</span>
			</li>
		{/each}
	</ul>
</nav>
