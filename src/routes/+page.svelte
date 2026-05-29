<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Services from '$lib/components/Services.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Dock from '$lib/components/Dock.svelte';
	import { site } from '$lib/data/site';

	const total = 4;
	let index = $state(0);
	let animating = $state(false);
	let slides = $state<HTMLElement[]>([]);
	let container: HTMLElement;

	const LOCK = 850; // ms — must match transition duration

	function go(dir: number) {
		if (animating) return;
		const next = Math.min(total - 1, Math.max(0, index + dir));
		if (next === index) return;
		index = next;
		animating = true;
		setTimeout(() => (animating = false), LOCK);
	}

	function goto(i: number) {
		if (animating || i === index) return;
		index = i;
		animating = true;
		setTimeout(() => (animating = false), LOCK);
	}

	// allow inner scroll when a slide is taller than the viewport;
	// only advance the deck once the slide is scrolled to its edge
	function atEdge(dir: number) {
		const el = slides[index];
		if (!el) return true;
		if (dir > 0) return Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight - 1;
		return el.scrollTop <= 1;
	}

	function onWheel(e: WheelEvent) {
		const dir = e.deltaY > 0 ? 1 : -1;
		if (!atEdge(dir)) return; // let the inner content scroll natively
		e.preventDefault();
		if (Math.abs(e.deltaY) < 6) return;
		go(dir);
	}

	let touchY = 0;
	function onTouchStart(e: TouchEvent) {
		touchY = e.touches[0].clientY;
	}
	function onTouchEnd(e: TouchEvent) {
		const dy = touchY - e.changedTouches[0].clientY;
		if (Math.abs(dy) < 40) return;
		const dir = dy > 0 ? 1 : -1;
		if (!atEdge(dir)) return;
		go(dir);
	}

	function onKey(e: KeyboardEvent) {
		if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
			if (atEdge(1)) {
				e.preventDefault();
				go(1);
			}
		} else if (['ArrowUp', 'PageUp'].includes(e.key)) {
			if (atEdge(-1)) {
				e.preventDefault();
				go(-1);
			}
		}
	}

	$effect(() => {
		container.addEventListener('wheel', onWheel, { passive: false });
		const onGoto = (e: Event) => goto((e as CustomEvent<number>).detail);
		window.addEventListener('goto-slide', onGoto);
		window.addEventListener('keydown', onKey);
		return () => {
			container.removeEventListener('wheel', onWheel);
			window.removeEventListener('goto-slide', onGoto);
			window.removeEventListener('keydown', onKey);
		};
	});
</script>

<svelte:head>
	<title>{site.name} — Web Developer</title>
	<meta
		name="description"
		content="{site.name} — frontend & web developer based in Yogyakarta. Building clean, responsive, user-friendly web interfaces."
	/>
	<meta property="og:title" content="{site.name} — Web Developer" />
	<meta
		property="og:description"
		content="Frontend & web developer building clean, responsive web interfaces."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div
	bind:this={container}
	class="fixed inset-0 overflow-hidden"
	ontouchstart={onTouchStart}
	ontouchend={onTouchEnd}
>
	<!-- vertical slide deck -->
	<div
		class="will-change-transform transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
		style="transform: translateY(calc(-{index} * 100svh))"
	>
		<div bind:this={slides[0]} class="h-svh overflow-y-auto overflow-x-hidden"><Hero /></div>
		<div bind:this={slides[1]} class="h-svh overflow-y-auto overflow-x-hidden"><Projects /></div>
		<div bind:this={slides[2]} class="h-svh overflow-y-auto overflow-x-hidden"><Services /></div>
		<div bind:this={slides[3]} class="h-svh overflow-y-auto overflow-x-hidden"><Contact /></div>
	</div>
</div>

<!-- progress dots -->
<div class="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
	{#each Array(total) as _, i}
		<button
			aria-label="Go to slide {i + 1}"
			onclick={() => goto(i)}
			class="h-2.5 w-2.5 rounded-full border border-accent/50 transition-all duration-300 {index === i
				? 'scale-125 bg-accent shadow-glow'
				: 'bg-transparent hover:bg-accent/40'}"
		></button>
	{/each}
</div>

<Dock />
