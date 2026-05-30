<script lang="ts">
	import { site, socials } from '$lib/data/site';

	let { active = 0 }: { active?: number } = $props();

	const tabs = [
		{ label: 'Home', index: 0, icon: 'M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3Z' },
		{
			label: 'Projects',
			index: 1,
			icon: 'M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z'
		},
		{
			label: 'Open Source',
			index: 2,
			icon: 'M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z'
		},
		{
			label: 'Services',
			index: 3,
			icon: 'M22 12c0 .34-.02.67-.06 1l-2 .3a8 8 0 0 1-.7 1.7l1.2 1.6c-.4.55-.86 1-1.4 1.4l-1.6-1.2a8 8 0 0 1-1.7.7l-.3 2c-.66.08-1.34.08-2 0l-.3-2a8 8 0 0 1-1.7-.7l-1.6 1.2c-.55-.4-1-.86-1.4-1.4l1.2-1.6a8 8 0 0 1-.7-1.7l-2-.3a8.2 8.2 0 0 1 0-2l2-.3a8 8 0 0 1 .7-1.7L4.7 6.6c.4-.55.86-1 1.4-1.4l1.6 1.2a8 8 0 0 1 1.7-.7l.3-2c.66-.08 1.34-.08 2 0l.3 2a8 8 0 0 1 1.7.7l1.6-1.2c.55.4 1 .86 1.4 1.4l-1.2 1.6a8 8 0 0 1 .7 1.7l2 .3c.04.33.06.66.06 1Zm-10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
		},
		{
			label: 'Contact',
			index: 4,
			icon: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.4l8 5 8-5V6H4Zm16 2.8-7.47 4.67a1 1 0 0 1-1.06 0L4 8.8V18h16V8.8Z'
		}
	];

	function goto(i: number) {
		window.dispatchEvent(new CustomEvent('goto-slide', { detail: i }));
	}
</script>

<header class="fixed inset-x-0 top-0 z-50">
	<!-- global bar (canvas.inset) -->
	<div class="border-b border-ink-700 bg-ink-950/90 backdrop-blur-md">
		<div class="container-page flex h-14 items-center justify-between">
			<!-- brand -->
			<button
				onclick={() => goto(0)}
				class="flex min-w-0 items-center gap-2.5 text-left transition-opacity hover:opacity-80"
			>
				<img
					src="/avatar.jpeg"
					alt={site.name}
					width="28"
					height="28"
					class="h-7 w-7 shrink-0 rounded-full border border-ink-700"
					style="height:28px;width:28px"
				/>
				<span class="flex min-w-0 items-center gap-1.5 text-sm">
					<span class="truncate font-semibold text-fg">{site.name.split(' ')[0]}</span>
					<span class="hidden text-fg-muted xs:inline">/</span>
					<span class="hidden font-semibold text-fg xs:inline">portfolio</span>
				</span>
			</button>

			<!-- right actions -->
			<div class="flex shrink-0 items-center gap-2">
				{#each socials.slice(0, 2) as s}
					<a
						href={s.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={s.label}
						class="hidden h-8 w-8 items-center justify-center rounded-md border border-ink-700 bg-ink-600 text-fg-muted transition-colors duration-200 hover:bg-ink-700 hover:text-fg xs:inline-flex"
					>
						<svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"><path d={s.icon} /></svg>
					</a>
				{/each}
				<button
					onclick={() => goto(4)}
					aria-label="Contact"
					class="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-success px-2.5 py-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-success-hover sm:px-3"
				>
					<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 fill-current"
						><path
							d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1Z"
						/></svg
					>
					<span class="hidden xs:inline">Contact</span>
				</button>
			</div>
		</div>
	</div>

	<!-- repo-style tab nav -->
	<div class="border-b border-ink-700 bg-ink-900/90 backdrop-blur-md">
		<nav class="container-page">
			<ul class="-mb-px flex items-center gap-1 overflow-x-auto">
				{#each tabs as tab}
					{@const isActive = active === tab.index}
					<li>
						<button
							onclick={() => goto(tab.index)}
							aria-current={isActive ? 'page' : undefined}
							class="flex items-center gap-2 whitespace-nowrap border-b-2 px-3 py-2.5 text-sm transition-colors duration-200 {isActive
								? 'border-[#fd8c73] font-semibold text-fg'
								: 'border-transparent text-fg-muted hover:text-fg'}"
						>
							<svg
								viewBox="0 0 24 24"
								class="h-4 w-4 {isActive ? 'fill-fg-muted' : 'fill-fg-subtle'}"
								><path d={tab.icon} /></svg
							>
							<span class="hidden sm:inline">{tab.label}</span>
						</button>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
