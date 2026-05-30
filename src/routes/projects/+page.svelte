<script lang="ts">
	import { base } from '$app/paths';
	import { ossProjects } from '$lib/data/oss';
	import { site } from '$lib/data/site';
	import Header from '$lib/components/Header.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { fetchRepos, type Repo } from '$lib/data/github';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Refresh from GitHub in the browser so newly created public repos appear
	// without a redeploy. Falls back to the build-time list (data.repos) for the
	// instant first paint + SEO until the live fetch resolves.
	let live = $state<Repo[]>([]);

	$effect(() => {
		fetchRepos().then((r) => {
			if (r.length) live = r;
		});
	});

	const repos = $derived(live.length ? live : data.repos);
	const featuredNames = new Set(ossProjects.map((p) => p.title));
	const rest = $derived(repos.filter((r) => !featuredNames.has(r.name)));

	const langColor: Record<string, string> = {
		TypeScript: '#3178c6',
		JavaScript: '#f1e05a',
		Python: '#3572A5',
		Svelte: '#ff3e00',
		HTML: '#e34c26',
		CSS: '#563d7c',
		Shell: '#89e051',
		Vue: '#41b883',
		Go: '#00ADD8',
		Rust: '#dea584',
		Dart: '#00B4AB',
		Java: '#b07219'
	};
</script>

<svelte:head>
	<title>Projects — {site.name}</title>
	<meta
		name="description"
		content="Open-source projects by {site.name} — AI/LLM integration, full-stack apps, Python automation and web security tooling, all public on GitHub."
	/>
	<link rel="canonical" href="{site.url}/projects" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<Header active={1} onHome={false} />

<main class="container-page min-h-screen pb-16 pt-28 sm:pb-24 sm:pt-32">
	<!-- back -->
	<Reveal>
		<a
			href="{base}/"
			class="mb-8 inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
		>
			<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 fill-current" aria-hidden="true"
				><path
					d="M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 1.06L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z"
				/></svg
			>
			Back to home
		</a>
	</Reveal>

	<!-- header -->
	<Reveal>
		<header class="mb-10 border-b border-ink-700 pb-6">
			<h1 class="font-display text-3xl font-bold text-fg sm:text-4xl">Projects</h1>
			<p class="mt-2 max-w-2xl text-fg-muted">
				Open-source work spanning AI/LLM integration, full-stack apps, Python automation and
				web-security tooling. Everything here is public on GitHub.
			</p>
			<a
				href={data.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="mt-4 inline-flex items-center gap-1.5 rounded-md border border-ink-700 bg-ink-800 px-3 py-1.5 text-sm font-medium text-fg-muted transition-colors hover:border-fg-muted hover:text-fg"
			>
				<svg viewBox="0 0 16 16" class="h-4 w-4 fill-current" aria-hidden="true"
					><path
						d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
					/></svg
				>
				@{site.name.split(' ')[0].toLowerCase()} on GitHub
			</a>
		</header>
	</Reveal>

	<!-- featured -->
	<section class="mb-12">
		<h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-fg-subtle">Featured</h2>
		<div class="grid gap-4 sm:grid-cols-2">
			{#each ossProjects as project, i}
				<Reveal delay={(i % 2) * 80}>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex h-full flex-col rounded-md border border-ink-700 bg-ink-800 p-5 transition-colors duration-200 hover:border-fg-muted focus-visible:border-accent focus-visible:outline-none"
					>
						<div class="mb-1.5 flex items-center justify-between gap-2">
							<h3 class="flex min-w-0 items-center gap-1.5 font-semibold text-accent group-hover:underline">
								<svg viewBox="0 0 16 16" class="h-4 w-4 shrink-0 fill-fg-muted" aria-hidden="true"
									><path
										d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"
									/></svg
								>
								<span class="truncate">{project.title}</span>
							</h3>
							<span class="shrink-0 rounded-full border border-ink-700 px-2 py-0.5 text-[11px] font-medium text-fg-muted">{project.category}</span>
						</div>
						<p class="mb-2 text-sm font-medium text-fg">{project.tagline}</p>
						<p class="mb-3 text-sm leading-relaxed text-fg-muted">{project.description}</p>
						<ul class="mt-auto flex flex-wrap gap-1.5">
							{#each project.stack as tech}
								<li class="rounded-full border border-ink-700 bg-ink-900 px-2.5 py-0.5 text-[11px] font-medium text-fg-muted">{tech}</li>
							{/each}
						</ul>
					</a>
				</Reveal>
			{/each}
		</div>
	</section>

	<!-- all repos -->
	<section>
		<h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-fg-subtle">
			All repositories{#if rest.length}<span class="ml-1.5 font-normal normal-case text-fg-muted">({rest.length})</span>{/if}
		</h2>

		{#if rest.length}
			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{#each rest as repo, i}
					<Reveal delay={(i % 3) * 60}>
						<a
							href={repo.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex h-full flex-col rounded-md border border-ink-700 bg-ink-800 p-4 transition-colors duration-200 hover:border-fg-muted focus-visible:border-accent focus-visible:outline-none"
						>
							<h3 class="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:underline">
								<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 shrink-0 fill-fg-muted" aria-hidden="true"
									><path
										d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"
									/></svg
								>
								<span class="truncate">{repo.name}</span>
							</h3>
							<p class="mb-3 line-clamp-2 flex-1 text-xs leading-relaxed text-fg-muted">
								{repo.description ?? 'No description provided.'}
							</p>
							<div class="flex items-center gap-3 text-[11px] text-fg-subtle">
								{#if repo.language}
									<span class="inline-flex items-center gap-1">
										<span
											class="h-2.5 w-2.5 rounded-full"
											style="background:{langColor[repo.language] ?? '#8b949e'}"
											aria-hidden="true"
										></span>
										{repo.language}
									</span>
								{/if}
								{#if repo.stars}
									<span class="inline-flex items-center gap-1">
										<svg viewBox="0 0 16 16" class="h-3 w-3 fill-current" aria-hidden="true"
											><path
												d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
											/></svg
										>
										{repo.stars}
									</span>
								{/if}
							</div>
						</a>
					</Reveal>
				{/each}
			</div>
		{:else}
			<p class="text-sm text-fg-muted">
				Repository list is loading from GitHub. Visit
				<a href={data.githubUrl} target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">my GitHub profile</a>
				to see everything.
			</p>
		{/if}
	</section>
</main>
