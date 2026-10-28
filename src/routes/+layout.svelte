<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';

	// Shelved for redesign — uncomment to restore the margin-doodling canvas widget:
	// import Navbar from '$lib/components/Navbar.svelte';
	// import Canvas from '$lib/components/Canvas.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />

<!-- <Canvas /> -->

<main>
	{@render children?.()}
</main>
