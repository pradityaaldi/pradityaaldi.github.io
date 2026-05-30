<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Hero3D from '$lib/components/Hero3D.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import OpenSource from '$lib/components/OpenSource.svelte';
	import Services from '$lib/components/Services.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Header from '$lib/components/Header.svelte';
	import { site, socials } from '$lib/data/site';
	import { projects } from '$lib/data/projects';

	const ids = ['home', 'projects', 'opensource', 'services', 'contact'];

	const avatarUrl = `${site.url}/${site.image}`;
	const ogImage = `${site.url}/${site.ogImage}`;

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.name,
		alternateName: site.alternateName,
		url: site.url,
		image: avatarUrl,
		jobTitle: site.jobTitle,
		description: site.headline,
		email: `mailto:${site.email}`,
		address: {
			'@type': 'PostalAddress',
			addressLocality: site.locality,
			addressCountry: site.country
		},
		knowsAbout: site.skills,
		sameAs: socials.filter((s) => s.href.startsWith('http')).map((s) => s.href),
		alumniOf: [
			{ '@type': 'CollegeOrUniversity', name: 'Universitas AMIKOM Yogyakarta' },
			{ '@type': 'EducationalOrganization', name: 'SMK Negeri 2 Yogyakarta' }
		],
		worksFor: { '@type': 'Organization', name: 'Freelance' }
	};

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: `${site.name} — Portfolio`,
		url: site.url,
		author: { '@type': 'Person', name: site.name },
		about: site.headline,
		hasPart: projects.map((p) => ({
			'@type': 'CreativeWork',
			name: p.title,
			description: p.description,
			...(p.link ? { url: p.link } : {})
		}))
	};
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
		content="{site.name} — full-stack & AI integration developer based in Indonesia. Building AI-powered web & mobile apps and chatbots with OpenAI/Claude APIs, React, Next.js, Node.js & SvelteKit."
	/>
	<meta
		name="keywords"
		content="Praditya Aldi Syahputra, Full-Stack Developer, AI Integration Developer, OpenAI API, Claude API, Chatbot Developer, React, Next.js, Node.js, SvelteKit, React Native, Web Developer Indonesia"
	/>
	<meta name="author" content={site.name} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={site.url} />

	<!-- Open Graph -->
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="{site.name} — Full-Stack & AI Integration Developer" />
	<meta
		property="og:description"
		content="Building AI-powered web & mobile apps and chatbots with OpenAI/Claude APIs and full-stack tooling."
	/>
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="{site.name} — {site.jobTitle}" />
	<meta property="og:site_name" content="{site.name} — Portfolio" />
	<meta property="profile:first_name" content="Praditya Aldi" />
	<meta property="profile:last_name" content="Syahputra" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{site.name} — Full-Stack & AI Integration Developer" />
	<meta
		name="twitter:description"
		content="Building AI-powered web & mobile apps and chatbots with OpenAI/Claude APIs and full-stack tooling."
	/>
	<meta name="twitter:image" content={ogImage} />

	<!-- Structured data for Google rich results + AI assistants -->
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}
</svelte:head>

<Hero3D />

<main class="relative z-10">
	<Hero />
	<Projects />
	<OpenSource />
	<Services />
	<Contact />
</main>

<Header {active} />
