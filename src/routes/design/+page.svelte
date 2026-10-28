<script lang="ts">
	import IllustrationPlaceholder from '$lib/components/IllustrationPlaceholder.svelte';
</script>

<svelte:head>
	<title>Design & Illustration — Connor Scully-Allison</title>
	<meta
		name="description"
		content="Illustration and graphic design work by Connor Scully-Allison — logos, character illustrations, conference sticker series, and commission information."
	/>
</svelte:head>

<!-- Secondary in-page nav -->
<nav class="border-b border-border bg-bg-subtle">
	<div class="mx-auto flex h-10 max-w-4xl items-center gap-6 overflow-x-auto px-6">
		<a
			href="#design-intro"
			class="whitespace-nowrap font-sans text-xs text-muted transition-colors hover:text-accent-3"
		>
			Intro
		</a>
		<a
			href="#design-work"
			class="whitespace-nowrap font-sans text-xs text-muted transition-colors hover:text-accent-3"
		>
			Design
		</a>
		<a
			href="#design-illustrations"
			class="whitespace-nowrap font-sans text-xs text-muted transition-colors hover:text-accent-3"
		>
			Illustrations
		</a>
		<a
			href="#design-stickers"
			class="whitespace-nowrap font-sans text-xs text-muted transition-colors hover:text-accent-3"
		>
			Sticker Series
		</a>
		<a
			href="#design-commissions"
			class="whitespace-nowrap font-sans text-xs text-muted transition-colors hover:text-accent-3"
		>
			Commissions
		</a>
	</div>
</nav>

<!-- Intro -->
<section id="design-intro" class="mx-auto max-w-4xl px-6 py-20">
	<h1 class="mb-6 font-serif text-5xl text-fg">Design & Illustration</h1>
	<p class="max-w-xl font-sans text-base leading-relaxed text-fg">
		I am an illustrator and graphic designer. On this page I have examples of my work, commission
		information, and an archive of my conference sticker series.
	</p>
</section>

<!-- Design / Logos -->
<section id="design-work" class="bg-bg-subtle py-20">
	<div class="mx-auto max-w-4xl px-6">
		<h2 class="mb-4 font-serif text-3xl text-fg">Design</h2>
		<p class="mb-10 font-sans text-base leading-relaxed text-fg">
			Here are logos I have designed professionally as commissions and for my own projects. For
			commission information see
			<a
				href="#design-commissions"
				class="underline underline-offset-2 text-accent-3 transition-colors hover:text-accent-3-hover"
			>
				design commissions
			</a>.
		</p>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			{#each { length: 4 } as _, i}
				<IllustrationPlaceholder label="Logo {i + 1}" aspectRatio="1/1" />
			{/each}
		</div>
	</div>
</section>

<!-- Illustrations -->
<section id="design-illustrations" class="py-20">
	<div class="mx-auto max-w-4xl px-6">
		<h2 class="mb-4 font-serif text-3xl text-fg">Illustrations</h2>
		<p class="mb-10 font-sans text-base leading-relaxed text-fg">
			Here are examples of character illustrations. For information about commissions see
			<a
				href="#design-commissions"
				class="underline underline-offset-2 text-accent-3 transition-colors hover:text-accent-3-hover"
			>
				below
			</a>.
		</p>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
			{#each { length: 3 } as _, i}
				<IllustrationPlaceholder label="Illustration {i + 1}" aspectRatio="3/4" />
			{/each}
		</div>
	</div>
</section>

<!-- Conference Sticker Series -->
<section id="design-stickers" class="bg-bg-subtle py-20">
	<div class="mx-auto max-w-4xl px-6">
		<h2 class="mb-4 font-serif text-3xl text-fg">Conference Sticker Series</h2>
		<p class="mb-10 font-sans text-base leading-relaxed text-fg">
			Here is an archive of my personal conference sticker series.
		</p>
		<div class="grid grid-cols-3 gap-4 md:grid-cols-6">
			{#each { length: 6 } as _, i}
				<IllustrationPlaceholder label="Sticker {i + 1}" aspectRatio="1/1" />
			{/each}
		</div>
	</div>
</section>

<!-- Commission Information -->
<section id="design-commissions" class="py-20">
	<div class="mx-auto max-w-4xl px-6">
		<h2 class="mb-10 font-serif text-3xl text-fg">Commission Information</h2>
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
			<div>
				<h3
					class="mb-4 font-serif text-2xl text-fg"
					style="border-left: 3px solid var(--color-accent-3); padding-left: 0.75rem;"
				>
					Graphic Design Commissions
				</h3>
				<p class="font-sans text-base leading-relaxed text-muted">
					[Commission details — to be filled in.]
				</p>
			</div>
			<div>
				<h3
					class="mb-4 font-serif text-2xl text-fg"
					style="border-left: 3px solid var(--color-accent-3); padding-left: 0.75rem;"
				>
					Illustration / Character Commissions
				</h3>
				<p class="font-sans text-base leading-relaxed text-muted">
					[Commission details — to be filled in.]
				</p>
			</div>
		</div>
	</div>
</section>
