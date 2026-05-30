<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Hero3D from '$lib/components/Hero3D.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Services from '$lib/components/Services.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Header from '$lib/components/Header.svelte';
	import { site } from '$lib/data/site';

	const ids = ['home', 'projects', 'services', 'contact'];
	let active = $state(0);

	$effect(() => {
		const onGoto = (e: Event) => {
			const i = (e as CustomEvent<number>).detail;
			document.getElementById(ids[i])?.scrollIntoView({ behavior: 'smooth' });
		};
		window.addEventListener('goto-slide', onGoto);

		const sections = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => !!el);
		const io = new IntersectionObserver(
			(entries) => {
				for (const en of entries) {
					if (en.isIntersecting) active = ids.indexOf(en.target.id);
				}
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		sections.forEach((s) => io.observe(s));

		return () => {
			window.removeEventListener('goto-slide', onGoto);
			io.disconnect();
		};
	});
</script>

<svelte:head>
	<title>{site.name} — Full-Stack & AI Integration Developer</title>
	<meta
		name="description"
		content="{site.name} — full-stack & AI integration developer based in Yogyakarta. Building AI-powered web & mobile apps and chatbots with OpenAI/Claude APIs, React, Next.js, Node.js & SvelteKit."
	/>
	<meta property="og:title" content="{site.name} — Full-Stack & AI Integration Developer" />
	<meta
		property="og:description"
		content="Building AI-powered web & mobile apps and chatbots with OpenAI/Claude APIs and full-stack tooling."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<Hero3D />

<main class="relative z-10">
	<Hero />
	<Projects />
	<Services />
	<Contact />
</main>

<Header {active} />
