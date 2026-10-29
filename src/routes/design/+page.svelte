<script lang="ts">
	import IllustrationPlaceholder from '$lib/components/IllustrationPlaceholder.svelte';
	import TapedFigure from '$lib/components/TapedFigure.svelte';
	import bubblegumHair from '$lib/assets/illustrations/Bubblegum_Hair.png';
	import obsidianElemental from '$lib/assets/illustrations/obsidian_elemental.png';
	import pinterestStudy from '$lib/assets/illustrations/pintrest_study.png';
	import tenichoutal from '$lib/assets/illustrations/Tenichoutal.png';
	import cactus from '$lib/assets/illustrations/cactus.png';
	import goblin from '$lib/assets/illustrations/goblin.png';
	import sc26 from '$lib/assets/stickers/sc/Sc26.png';
	import sc25 from '$lib/assets/stickers/sc/SC25.png';
	import sc25Gig from '$lib/assets/stickers/sc/SC25-gig.png';
	import sc24 from '$lib/assets/stickers/sc/SC24.png';
	import sc23 from '$lib/assets/stickers/sc/SC23.png';
	import vis26 from '$lib/assets/stickers/vis/Vis26.png';
	import vis25 from '$lib/assets/stickers/vis/VIS25.png';

	const illustrations = [
		{
			src: bubblegumHair,
			alt: 'Woman with pink bubblegum-bubble hair buns, a puffy blue jacket and a katana, in a misty forest'
		},
		{
			src: obsidianElemental,
			alt: 'Armored knight with a red cape and a long greatsword striding through shafts of light'
		},
		{
			src: pinterestStudy,
			alt: 'Portrait study of a woman with a voluminous white afro in a silver sequined dress'
		},
		{
			src: tenichoutal,
			alt: 'Orange axolotl-like cowboy in a brown hat crouching with a rifle between rocks'
		},
		{
			src: cactus,
			alt: 'Cactus person in a blue military coat holding a scroll, leaning on a lectern beside a stack of books'
		},
		{
			src: goblin,
			alt: 'Goblin thief in a huge striped hat reaching for a green gem labeled "do not touch"'
		}
	];

	// Each row runs most recent → least recent, left to right.
	const stickerSeries = [
		{
			label: 'SC',
			stickers: [
				{ src: sc26, caption: 'SC26', alt: 'SC26 conference sticker' },
				{ src: sc25, caption: 'SC25', alt: 'SC25 conference sticker' },
				{ src: sc25Gig, caption: 'SC25 · GIGs', alt: 'SC25 GIGs conference sticker' },
				{ src: sc24, caption: 'SC24', alt: 'SC24 conference sticker' },
				{ src: sc23, caption: 'SC23', alt: 'SC23 conference sticker' }
			]
		},
		{
			label: 'VIS',
			stickers: [
				{ src: vis26, caption: 'VIS26', alt: 'IEEE VIS 2026 conference sticker' },
				{ src: vis25, caption: 'VIS25', alt: 'IEEE VIS 2025 conference sticker' }
			]
		}
	];
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
		<!-- Masonry columns so mixed portrait/landscape pieces show uncropped. -->
		<div class="columns-1 gap-8 pt-2 sm:columns-2 md:columns-3">
			{#each illustrations as illustration}
				<div class="mb-8 break-inside-avoid">
					<TapedFigure seed={illustration.src}>
						<img
							src={illustration.src}
							alt={illustration.alt}
							class="block w-full p-1.5"
							loading="lazy"
						/>
					</TapedFigure>
				</div>
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
		<div class="flex flex-col gap-12">
			{#each stickerSeries as series}
				<div>
					<h3
						class="mb-6 font-serif text-2xl text-fg"
						style="border-left: 3px solid var(--color-accent-3); padding-left: 0.75rem;"
					>
						{series.label}
					</h3>
					<ul class="grid grid-cols-3 gap-6 sm:grid-cols-5">
						{#each series.stickers as sticker}
							<li class="flex flex-col items-center gap-2">
								<img
									src={sticker.src}
									alt={sticker.alt}
									class="sticker aspect-square w-full object-contain"
									loading="lazy"
								/>
								<span class="font-sans text-xs tracking-widest text-muted uppercase">
									{sticker.caption}
								</span>
							</li>
						{/each}
					</ul>
				</div>
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

<style>
	.sticker {
		filter: drop-shadow(0 2px 3px rgb(0 0 0 / 0.15));
		transition:
			transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
			filter 300ms ease;
	}

	/* Alternate the hover wiggle direction so a row doesn't all lean the same way. */
	li:nth-child(odd) .sticker:hover {
		transform: rotate(-4deg) scale(1.05);
		filter: drop-shadow(0 6px 10px rgb(0 0 0 / 0.2));
	}

	li:nth-child(even) .sticker:hover {
		transform: rotate(4deg) scale(1.05);
		filter: drop-shadow(0 6px 10px rgb(0 0 0 / 0.2));
	}

	@media (prefers-reduced-motion: reduce) {
		.sticker {
			transition: none;
		}
		li .sticker:hover {
			transform: none;
		}
	}
</style>
