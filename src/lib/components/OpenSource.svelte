<script lang="ts">
	import { base } from '$app/paths';
	import { ossProjects, ossSkills } from '$lib/data/oss';
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
	id="opensource"
	class="container-page flex min-h-screen scroll-mt-24 flex-col justify-center py-28"
>
	<Reveal>
		<div class="mb-8 flex items-center gap-3 border-b border-ink-700 pb-4">
			<svg viewBox="0 0 16 16" class="h-6 w-6 fill-fg-muted" aria-hidden="true"
				><path
					d="M8.075.075 8 0l-.075.075a8 8 0 0 0-2.6 15.566c.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.726-.497.056-.487.056-.487.803.057 1.225.825 1.225.825.714 1.223 1.873.87 2.33.665.072-.517.279-.87.508-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.312-1.587.823-2.147-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.2.82a7.67 7.67 0 0 1 2.003-.27c.68.003 1.366.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.161 1.915.079 2.117.513.56.822 1.274.822 2.147 0 3.073-1.87 3.75-3.653 3.947.287.247.543.735.543 1.481 0 1.07-.01 1.933-.01 2.196 0 .215.144.464.55.385A8 8 0 0 0 8.075.075Z"
				/></svg
			>
			<div>
				<h2 class="font-display text-2xl font-bold text-fg">Open Source</h2>
				<p class="text-sm text-fg-muted">AI &amp; security tools, shipped in public on GitHub</p>
			</div>
		</div>
	</Reveal>

	<div class="grid gap-4 sm:grid-cols-2">
		{#each ossProjects as project, i}
			<Reveal delay={(i % 2) * 100}>
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					onmousemove={(e: MouseEvent) => move(e, i)}
					onmouseleave={() => leave(i)}
					class="group relative flex h-full flex-col overflow-hidden rounded-md border border-ink-700 bg-ink-800 p-5 transition-colors duration-200 hover:border-fg-muted focus-visible:border-accent focus-visible:outline-none"
				>
					<!-- cursor glow -->
					<div
						class="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300"
						style="left:{glow[i]?.x ?? 0}px;top:{glow[i]?.y ?? 0}px;opacity:{glow[i]?.on
							? 1
							: 0}"
					></div>

					<div class="relative flex flex-1 flex-col">
						<div class="mb-1.5 flex items-center justify-between gap-2">
							<h3
								class="flex min-w-0 items-center gap-1.5 font-semibold text-accent group-hover:underline"
							>
								<svg
									viewBox="0 0 16 16"
									class="h-4 w-4 shrink-0 fill-fg-muted"
									aria-hidden="true"
									><path
										d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"
									/></svg
								>
								<span class="truncate">{project.title}</span>
							</h3>
							<span
								class="shrink-0 rounded-full border border-ink-700 px-2 py-0.5 text-[11px] font-medium text-fg-muted"
								>{project.category}</span
							>
						</div>

						<p class="mb-2 text-sm font-medium text-fg">{project.tagline}</p>
						<p class="mb-3 text-sm leading-relaxed text-fg-muted">{project.description}</p>

						<div
							class="mb-4 flex items-start gap-2 rounded-md border border-accent/20 bg-accent/5 p-2.5"
						>
							<svg
								viewBox="0 0 16 16"
								class="mt-0.5 h-3.5 w-3.5 shrink-0 fill-accent"
								aria-hidden="true"
								><path
									d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863.5 8 .5s5.5 1.81 5.5 4.75c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
								/></svg
							>
							<p class="text-xs leading-relaxed text-fg-muted">{project.highlight}</p>
						</div>

						<ul class="mb-4 flex flex-wrap gap-1.5">
							{#each project.stack as tech}
								<li
									class="rounded-full border border-ink-700 bg-ink-900 px-2.5 py-0.5 text-[11px] font-medium text-fg-muted"
								>
									{tech}
								</li>
							{/each}
						</ul>

						<div
							class="mt-auto flex items-center gap-1.5 text-xs font-medium text-fg-subtle group-hover:text-fg"
						>
							<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 fill-current" aria-hidden="true"
								><path
									d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
								/></svg
							>
							View on GitHub
							<svg viewBox="0 0 16 16" class="h-3 w-3 fill-current" aria-hidden="true"
								><path
									d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
								/></svg
							>
						</div>
					</div>
				</a>
			</Reveal>
		{/each}
	</div>

	<Reveal delay={150}>
		<div class="mt-6 rounded-md border border-ink-700 bg-ink-800 p-5">
			<h3 class="mb-3 text-sm font-semibold text-fg">What these prove</h3>
			<ul class="flex flex-wrap gap-2">
				{#each ossSkills as skill}
					<li
						class="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-fg-muted"
					>
						{skill}
					</li>
				{/each}
			</ul>
		</div>
	</Reveal>

	<Reveal delay={200}>
		<div class="mt-6 flex justify-center">
			<a
				href="{base}/projects"
				class="group inline-flex items-center gap-2 rounded-md border border-ink-700 bg-ink-800 px-5 py-2.5 text-sm font-semibold text-fg transition-colors duration-200 hover:border-fg-muted focus-visible:border-accent focus-visible:outline-none"
			>
				See more projects on GitHub
				<svg
					viewBox="0 0 16 16"
					class="h-3.5 w-3.5 fill-current transition-transform duration-200 group-hover:translate-x-0.5"
					aria-hidden="true"
					><path
						d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
					/></svg
				>
			</a>
		</div>
	</Reveal>
</section>
