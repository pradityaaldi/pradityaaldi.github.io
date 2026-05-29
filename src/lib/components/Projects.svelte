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
	class="container-page flex min-h-screen scroll-mt-24 flex-col justify-center py-28"
>
	<Reveal>
		<div class="mb-8 flex items-center gap-3 border-b border-ink-700 pb-4">
			<svg viewBox="0 0 16 16" class="h-6 w-6 fill-fg-muted"
				><path
					d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
				/></svg
			>
			<div>
				<h2 class="font-display text-2xl font-bold text-fg">Projects</h2>
				<p class="text-sm text-fg-muted">Selected work and collaborations</p>
			</div>
		</div>
	</Reveal>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project, i}
			<Reveal delay={(i % 3) * 100}>
				<svelte:element
					this={project.link ? 'a' : 'div'}
					href={project.link ?? undefined}
					target={project.link ? '_blank' : undefined}
					rel={project.link ? 'noopener noreferrer' : undefined}
					role={project.link ? 'link' : undefined}
					onmousemove={(e: MouseEvent) => move(e, i)}
					onmouseleave={() => leave(i)}
					class="group relative block h-full overflow-hidden rounded-md border border-ink-700 bg-ink-800 transition-colors duration-200 hover:border-fg-muted"
				>
					<!-- cursor glow -->
					<div
						class="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300"
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
							class="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/20 to-transparent"
						></div>
					</div>

					<div class="relative p-4">
						<div class="mb-1.5 flex items-center justify-between gap-2">
							<h3
								class="flex items-center gap-1.5 font-semibold text-accent group-hover:underline"
							>
								<svg viewBox="0 0 16 16" class="h-4 w-4 shrink-0 fill-fg-muted"
									><path
										d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"
									/></svg
								>
								{project.title}
							</h3>
							{#if project.link}
								<span
									class="rounded-full border border-ink-700 px-2 py-0.5 text-[11px] font-medium text-fg-muted"
									>Public</span
								>
							{/if}
						</div>
						<p class="mb-3 text-sm leading-relaxed text-fg-muted">{project.description}</p>
						<div class="flex items-center gap-1.5 text-xs text-fg-subtle">
							<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 fill-current"
								><path
									d="M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 0 1 4.75 0ZM2.5 7.5v6.75c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V7.5Zm10.75-4H2.75a.25.25 0 0 0-.25.25V6h11V3.75a.25.25 0 0 0-.25-.25Z"
								/></svg
							>
							{project.date}
						</div>
					</div>
				</svelte:element>
			</Reveal>
		{/each}
	</div>
</section>
