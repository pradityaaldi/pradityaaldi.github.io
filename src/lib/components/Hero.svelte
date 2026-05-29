<script lang="ts">
	import { site } from '$lib/data/site';
	import Reveal from './Reveal.svelte';

	function goto(i: number) {
		window.dispatchEvent(new CustomEvent('goto-slide', { detail: i }));
	}

	// icon per role badge (matched by index to site.roles)
	const roleIcons = [
		// </> code
		'M8.7 4.3 4 9l4.7 4.7-1.4 1.4L1.2 9l6.1-6.1 1.4 1.4Zm6.6 0L20 9l-4.7 4.7 1.4 1.4L21.8 9l-6.1-6.1-1.4 1.4Z',
		// globe (remote)
		'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8ZM12 4c.83 1.2 1.48 2.53 1.9 4h-3.8c.42-1.47 1.07-2.8 1.9-4ZM4.26 14a7.96 7.96 0 0 1 0-4h3.38a16.6 16.6 0 0 0 0 4H4.26Zm.81 2h2.95c.34 1.27.8 2.47 1.38 3.56A8.03 8.03 0 0 1 5.07 16Zm2.95-8H5.07a8.03 8.03 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.02 8ZM12 20c-.83-1.2-1.48-2.53-1.9-4h3.8c-.42 1.47-1.07 2.8-1.9 4Zm2.34-6H9.66a14.7 14.7 0 0 1 0-4h4.68a14.7 14.7 0 0 1 0 4Zm.28 5.56c.58-1.09 1.04-2.29 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM16.36 14a16.6 16.6 0 0 0 0-4h3.38a7.96 7.96 0 0 1 0 4h-3.38Z'
	];
</script>

<section
	id="home"
	class="relative flex min-h-screen scroll-mt-24 flex-col justify-center overflow-hidden py-28"
>
	<div class="grid-backdrop pointer-events-none absolute inset-0 -z-20"></div>

	<div class="container-page">
		<div class="mb-8 flex flex-col items-center gap-5 md:flex-row md:items-center">
			<Reveal>
				<div class="group relative">
					<div
						class="absolute -inset-1 rounded-full bg-accent/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
					></div>
					<img
						src="/avatar.jpeg"
						alt="{site.name} profile picture"
						width="104"
						height="104"
						class="relative h-26 w-26 rounded-full border border-ink-700 p-1 transition-transform duration-500 group-hover:scale-95"
						style="height:104px;width:104px"
					/>
				</div>
			</Reveal>

			<div>
				<Reveal delay={100}>
					<h1
						class="mb-3 text-center font-display text-3xl font-extrabold -tracking-tight text-fg md:text-left md:text-5xl"
					>
						{site.name}
					</h1>
				</Reveal>
				<Reveal delay={200}>
					<ul class="flex flex-wrap justify-center gap-2 text-sm md:justify-start">
						{#each site.roles as role, i}
							<li
								class="inline-flex items-center gap-1.5 rounded-full border border-ink-700 bg-ink-800 px-3 py-1 font-medium text-fg-muted"
							>
								<svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-accent"
									><path d={roleIcons[i % roleIcons.length]} /></svg
								>{role}
							</li>
						{/each}
						<li
							class="inline-flex items-center gap-1.5 rounded-full border border-ink-700 bg-ink-800 px-3 py-1 font-medium text-fg-muted"
						>
							<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 fill-accent">
								<path
									d="M8 0a5.5 5.5 0 0 0-5.5 5.5c0 3.2 4.5 9.3 5 9.97a.63.63 0 0 0 1 0c.5-.67 5-6.77 5-9.97A5.5 5.5 0 0 0 8 0Zm0 7.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
								/>
							</svg>
							{site.location}
							<img
								src="/flag-indonesia.png"
								alt="Indonesia flag"
								height="14"
								style="height:14px"
								class="rounded-[2px]"
							/>
						</li>
					</ul>
				</Reveal>
			</div>
		</div>

		<div class="mx-auto max-w-3xl space-y-4 text-fg-muted">
			{#each site.bio as para, i}
				<Reveal delay={300 + i * 120}>
					<p class="leading-relaxed">{para}</p>
				</Reveal>
			{/each}
		</div>

		<Reveal delay={700}>
			<div class="mx-auto mt-10 flex max-w-3xl flex-wrap gap-3">
				<button
					onclick={() => goto(1)}
					class="group inline-flex items-center gap-2 rounded-md border border-white/10 bg-success px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-success-hover"
				>
					View Projects
					<span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
				</button>
				<button
					onclick={() => goto(3)}
					class="inline-flex items-center rounded-md border border-ink-700 bg-ink-600 px-5 py-2.5 text-sm font-medium text-fg transition-colors duration-200 hover:bg-ink-700"
				>
					Get in touch
				</button>
			</div>
		</Reveal>
	</div>
</section>
