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
	class="container-page flex min-h-screen scroll-mt-24 flex-col justify-center py-28"
>
	<Reveal>
		<div class="mb-8 flex items-center gap-3 border-b border-ink-700 pb-4">
			<svg viewBox="0 0 16 16" class="h-6 w-6 fill-fg-muted"
				><path
					d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
				/></svg
			>
			<div>
				<h2 class="font-display text-2xl font-bold text-fg">Services</h2>
				<p class="text-sm text-fg-muted">What I can help you build</p>
			</div>
		</div>
	</Reveal>

	<div class="grid gap-4 md:grid-cols-3">
		{#each services as s, i}
			<Reveal delay={i * 120}>
				<div
					class="group relative h-full overflow-hidden rounded-md border border-ink-700 bg-ink-800 p-6 transition-colors duration-200 hover:border-fg-muted"
				>
					<div
						class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent/60"
					>
						<svg viewBox="0 0 24 24" class="h-6 w-6 fill-current"><path d={s.icon} /></svg>
					</div>
					<h3 class="mb-2 font-display text-lg font-semibold text-fg">{s.title}</h3>
					<p class="text-sm leading-relaxed text-fg-muted">{s.desc}</p>
				</div>
			</Reveal>
		{/each}
	</div>
</section>
