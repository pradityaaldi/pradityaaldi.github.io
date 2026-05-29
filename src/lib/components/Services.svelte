<script lang="ts">
	import Reveal from './Reveal.svelte';

	const services = [
		{
			title: 'Website Development',
			desc: 'Clean, responsive, performant web apps with React, Svelte & modern tooling.',
			icon: 'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-5l1 2h3v2H6v-2h3l1-2H5a2 2 0 0 1-2-2V5Zm2 0v11h14V5H5Zm2.5 2.5L10 10l-2.5 2.5L6 11l1-1-1-1 1.5-1.5Zm5 6.5h4v-1.5h-4V14Z'
		},
		{
			title: 'UI / UX Design',
			desc: 'Thoughtful interfaces and design systems that feel effortless to use.',
			icon: 'M12 2 2 7l10 5 10-5-10-5Zm0 2.2L18.5 7 12 9.8 5.5 7 12 4.2ZM2 12l10 5 10-5-2-1-8 4-8-4-2 1Zm0 5 10 5 10-5-2-1-8 4-8-4-2 1Z'
		},
		{
			title: 'Frontend Mentoring',
			desc: 'Coaching developers in frontend craft, code quality and best practices.',
			icon: 'M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3Zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9ZM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72Z'
		}
	];
</script>

<section
	id="services"
	class="container-page flex min-h-full flex-col justify-center py-20"
>
	<Reveal>
		<div class="mb-10">
			<h2 class="font-display text-3xl font-bold text-white">Services</h2>
			<p class="mt-1 text-neutral-400">What I can help you build</p>
		</div>
	</Reveal>

	<div class="grid gap-5 md:grid-cols-3">
		{#each services as s, i}
			<Reveal delay={i * 120}>
				<div
					class="group relative h-full overflow-hidden border border-ink-700 bg-ink-900/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
				>
					<div
						class="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-all duration-500 group-hover:bg-accent/25"
					></div>
					<div
						class="mb-5 inline-flex h-12 w-12 items-center justify-center border border-accent/40 bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-ink-950"
					>
						<svg viewBox="0 0 24 24" class="h-6 w-6 fill-current"><path d={s.icon} /></svg>
					</div>
					<h3 class="mb-2 font-display text-lg font-semibold text-white">{s.title}</h3>
					<p class="text-sm leading-relaxed text-neutral-400">{s.desc}</p>
				</div>
			</Reveal>
		{/each}
	</div>
</section>
