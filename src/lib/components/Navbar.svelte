<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="navbar">
	<a href="/" class="logo">Connor Scully-Allison</a>
	<ul>
		<li class:selected={$page.url.pathname === '/'}><a href="/">Home</a></li>
		<li class:selected={$page.url.pathname.startsWith('/about')}><a href="/about">About</a></li>
		<li class:selected={$page.url.pathname.startsWith('/projects')}><a href="/projects">Projects</a></li>
		<li class:selected={$page.url.pathname.startsWith('/contact')}><a href="/contact">Contact</a></li>
	</ul>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: #1a1a1a;
		color: white;
	}
	.logo {
		font-weight: 600;
		font-size: 1.25rem;
	}
	ul {
		display: flex;
		list-style: none;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}
	a {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s;
	}
	a:hover {
		color: #58a6ff;
	}
	.selected a {
		color: #58a6ff;
		font-weight: bold;
	}
</style>