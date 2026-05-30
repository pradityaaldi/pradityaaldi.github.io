<script lang="ts">
	import { env } from '$env/dynamic/public';

	// Set PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) to enable Google Analytics 4.
	// No-ops when unset, so local/dev builds stay clean.
	const gaId = env.PUBLIC_GA_ID;
</script>

<svelte:head>
	{#if gaId}
		<script async src="https://www.googletagmanager.com/gtag/js?id={gaId}"></script>
		{@html `<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '${gaId}');
		</script>`}
	{/if}
</svelte:head>
