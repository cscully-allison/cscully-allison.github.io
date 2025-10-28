<!-- <script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()} -->

<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Canvas from '$lib/components/Canvas.svelte';
</script>

<Navbar />
<Canvas />
<main>
	<slot />
</main>

<style>
	main {
		max-width: 800px;
		margin: 2rem auto;
		padding: 0 1rem;
		line-height: 1.6;
	}
</style>