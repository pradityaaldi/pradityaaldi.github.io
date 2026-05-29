<script lang="ts">
	import { projects } from '$lib/data/projects';
	import Reveal from './Reveal.svelte';

	let glow = $state<Record<number, { x: number; y: number; on: boolean }>>({});

	function move(e: MouseEvent, i: number) {
		const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
		glow[i] = { x: e.clientX - r.left, y: e.clientY - r.top, on: true };
	}
	function leave(i: number) {
		glow[i] = { ...(glow[i] ?? { x: 0, y: 0 }), on: false };
	}
</script>

<section
	id="projects"
	class="container-page flex min-h-full flex-col justify-center py-20"
>
	<Reveal>
		<div class="mb-10">
			<h2 class="font-display text-3xl font-bold text-white">Projects</h2>
			<p class="mt-1 text-neutral-400">Selected work and collaborations</p>
		</div>
	</Reveal>

	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project, i}
			<Reveal delay={(i % 3) * 100}>
				<svelte:element
					this={project.link ? 'a' : 'div'}
					href={project.link ?? undefined}
					target={project.link ? '_blank' : undefined}
					rel={project.link ? 'noopener noreferrer' : undefined}
					role={project.link ? 'link' : undefined}
					onmousemove={(e) => move(e, i)}
					onmouseleave={() => leave(i)}
					class="group relative block h-full overflow-hidden border border-ink-700 bg-ink-900/60 transition-colors duration-300 hover:border-accent/50"
				>
					<!-- cursor glow -->
					<div
						class="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-2xl transition-opacity duration-300"
						style="left:{glow[i]?.x ?? 0}px;top:{glow[i]?.y ?? 0}px;opacity:{glow[i]?.on
							? 1
							: 0}"
					></div>

					<div class="relative aspect-video overflow-hidden">
						<img
							src={project.image}
							alt={project.title}
							loading="lazy"
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent"
						></div>
					</div>

					<div class="relative p-5">
						<div class="mb-1 flex items-center justify-between gap-2">
							<h3 class="font-display font-semibold text-white">{project.title}</h3>
							{#if project.link}
								<span
									class="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1"
									>↗</span
								>
							{/if}
						</div>
						<p class="mb-3 text-sm leading-relaxed text-neutral-400">{project.description}</p>
						<p class="text-xs uppercase tracking-wider text-neutral-600">{project.date}</p>
					</div>
				</svelte:element>
			</Reveal>
		{/each}
	</div>
</section>
