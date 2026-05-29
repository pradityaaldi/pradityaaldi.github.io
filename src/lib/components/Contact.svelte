<script lang="ts">
	import { site, socials } from '$lib/data/site';
	import Reveal from './Reveal.svelte';
</script>

<section
	id="contact"
	class="container-page flex min-h-full flex-col justify-center py-24"
>
	<Reveal>
		<div
			class="relative overflow-hidden border border-ink-700 bg-ink-900/60 p-10 text-center md:p-16"
		>
			<div
				class="pointer-events-none absolute -top-20 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
			></div>

			<h2 class="relative font-display text-3xl font-bold text-white md:text-4xl">
				Let's build something together
			</h2>
			<p class="relative mx-auto mt-3 max-w-xl text-neutral-400">
				Open to freelance work, collaboration, or just a chat about web development & design.
			</p>

			<div class="relative mt-8 flex flex-wrap items-center justify-center gap-3">
				<a
					href="mailto:{site.email}"
					class="inline-flex items-center gap-2 border border-accent/50 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-ink-950 hover:shadow-glow"
				>
					Say hello
				</a>
			</div>

			<div class="relative mt-8 flex items-center justify-center gap-4">
				{#each socials as s}
					<a
						href={s.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={s.label}
						class="inline-flex h-11 w-11 items-center justify-center border border-ink-700 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
					>
						<svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d={s.icon} /></svg>
					</a>
				{/each}
			</div>
		</div>
	</Reveal>

	<p class="mt-10 text-center text-xs text-neutral-600">
		© {site.name}. Built with SvelteKit, Threlte & Tailwind.
	</p>
	<p class="mt-1 text-center text-[11px] text-neutral-700">
		3D model: "Laptop / MacBook Pro" via
		<a
			href="https://poly.pizza/"
			target="_blank"
			rel="noopener noreferrer"
			class="underline hover:text-accent">Poly Pizza</a
		>.
	</p>
</section>
