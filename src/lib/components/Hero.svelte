<script lang="ts">
	import { site } from '$lib/data/site';
	import Reveal from './Reveal.svelte';

	function goto(i: number) {
		window.dispatchEvent(new CustomEvent('goto-slide', { detail: i }));
	}
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
					<ul
						class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-fg-muted md:justify-start md:text-base"
					>
						{#each site.roles as role}
							<li class="flex items-center gap-2">
								<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>{role}
							</li>
						{/each}
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>{site.location}
							<img src="/flag-indonesia.png" alt="Indonesia flag" height="18" style="height:18px" />
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
			<div class="mt-10 flex flex-wrap gap-3">
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
