<script lang="ts">
	import { site, socials } from '$lib/data/site';
	import Reveal from './Reveal.svelte';
</script>

<section
	id="contact"
	class="container-page flex min-h-screen scroll-mt-24 flex-col justify-center py-28"
>
	<Reveal>
		<div
			class="relative overflow-hidden rounded-md border border-ink-700 bg-ink-800 p-10 text-center md:p-16"
		>
			<h2 class="relative font-display text-3xl font-bold text-fg md:text-4xl">
				Let's build something together
			</h2>
			<p class="relative mx-auto mt-3 max-w-xl text-fg-muted">
				Open to freelance work, collaboration, or just a chat about web development & design.
			</p>

			<div class="relative mt-8 flex flex-wrap items-center justify-center gap-3">
				<a
					href="mailto:{site.email}"
					class="inline-flex items-center gap-2 rounded-md border border-white/10 bg-success px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-success-hover"
				>
					<svg viewBox="0 0 16 16" class="h-4 w-4 fill-current"
						><path
							d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"
						/></svg
					>
					Say hello
				</a>
			</div>

			<div class="relative mt-8 flex items-center justify-center gap-3">
				{#each socials as s}
					<a
						href={s.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={s.label}
						class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-700 bg-ink-600 text-fg-muted transition-colors duration-200 hover:bg-ink-700 hover:text-fg"
					>
						<svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d={s.icon} /></svg>
					</a>
				{/each}
			</div>
		</div>
	</Reveal>

	<p class="mt-10 text-center text-xs text-fg-subtle">
		© {site.name}. Built with SvelteKit, Threlte & Tailwind.
	</p>
	<p class="mt-1 text-center text-[11px] text-fg-subtle">
		3D model: "Laptop / MacBook Pro" via
		<a
			href="https://poly.pizza/"
			target="_blank"
			rel="noopener noreferrer"
			class="text-accent hover:underline">Poly Pizza</a
		>.
	</p>
</section>
