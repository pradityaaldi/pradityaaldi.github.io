<script lang="ts">
	import { site } from '$lib/data/site';
	import Hero3D from './Hero3D.svelte';
	import Reveal from './Reveal.svelte';
</script>

<section
	id="home"
	class="relative flex min-h-full flex-col justify-center overflow-hidden py-20"
>
	<div class="grid-backdrop pointer-events-none absolute inset-0 -z-20"></div>
	<Hero3D />

	<div class="container-page">
		<div class="mb-8 flex flex-col items-center gap-5 md:flex-row md:items-center">
			<Reveal>
				<div class="group relative">
					<div
						class="absolute -inset-1 rounded-full bg-accent/30 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
					></div>
					<img
						src="/avatar.jpeg"
						alt="{site.name} profile picture"
						width="104"
						height="104"
						class="relative h-26 w-26 rounded-full border border-accent/40 p-1 transition-transform duration-500 group-hover:scale-95"
						style="height:104px;width:104px"
					/>
				</div>
			</Reveal>

			<div>
				<Reveal delay={100}>
					<h1
						class="mb-3 text-center font-display text-3xl font-extrabold -tracking-tight text-white md:text-left md:text-5xl"
					>
						{site.name}
					</h1>
				</Reveal>
				<Reveal delay={200}>
					<ul
						class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-neutral-400 md:justify-start md:text-base"
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

		<div class="mx-auto max-w-3xl space-y-4 text-neutral-400">
			{#each site.bio as para, i}
				<Reveal delay={300 + i * 120}>
					<p class="leading-relaxed">{para}</p>
				</Reveal>
			{/each}
		</div>

		<Reveal delay={700}>
			<div class="mt-10 flex flex-wrap gap-4">
				<a
					href="#projects"
					class="group relative inline-flex items-center gap-2 border border-accent/50 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-ink-950 hover:shadow-glow"
				>
					View Projects
					<span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
				</a>
				<a
					href="#contact"
					class="inline-flex items-center px-6 py-3 text-sm font-medium text-neutral-300 transition-colors duration-300 hover:text-accent"
				>
					Get in touch
				</a>
			</div>
		</Reveal>
	</div>
</section>
