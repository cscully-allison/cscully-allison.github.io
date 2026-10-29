<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, createTimeline } from 'animejs';
	import portrait from '$lib/assets/Self_portrait.png';
	import NewsWidget from '$lib/components/NewsWidget.svelte';

	let nameEl: HTMLHeadingElement;
	let titleEl: HTMLParagraphElement;
	let bioEl: HTMLDivElement;
	let rightColEl: HTMLDivElement;

	onMount(() => {
		const tl = createTimeline();

		tl.add(nameEl, {
			opacity: [0, 1],
			translateY: [40, 0],
			duration: 900,
			ease: 'outElastic(1, 0.5)'
		})
		.add(
			titleEl,
			{
				opacity: [0, 1],
				translateY: [20, 0],
				duration: 800,
				ease: 'outCubic'
			},
			'-=500'
		)
		.add(
			bioEl,
			{
				opacity: [0, 1],
				translateY: [20, 0],
				duration: 700,
				ease: 'outCubic'
			},
			'-=300'
		)
		.add(
			rightColEl,
			{
				opacity: [0, 1],
				translateY: [20, 0],
				duration: 700,
				ease: 'outCubic'
			},
			'-=500'
		);
	});
</script>

<section id="introduction" class="mx-auto max-w-4xl px-6 py-20">
	<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
		<!-- Bio column -->
		<div>
			<h1
				bind:this={nameEl}
				style="opacity: 0"
				class="mb-2 font-serif text-5xl leading-tight text-fg md:text-6xl"
			>
				Connor Scully-Allison
			</h1>
			<p
				bind:this={titleEl}
				style="opacity: 0"
				class="mb-8 font-sans text-base text-muted"
			>
				Postdoctoral Scholar at the University of Chicago
			</p>
			<div
				bind:this={bioEl}
				style="opacity: 0"
				class="space-y-4 font-sans text-base leading-relaxed text-fg"
			>
				<p>
					I am a <strong>human-data interaction researcher</strong> operating at the intersection of
					human centered computing, visualization, and high performance computing research. I design
					and implement multimodal data interaction systems (combining visualization, code and AI) to
					support complex, federated analytical workflows used by data workers in real-world deployment scenarios.
					<a
						href="#research"
						class="underline underline-offset-2 transition-colors text-accent hover:text-accent-hover"
					>
						My software
					</a>
					has active users at three National Labs across the country: Lawrence Livermore National
					Laboratory, National Laboratory of the Rockies, and Argonne National Laboratory.
				</p>
			</div>
		</div>

		<!-- Illustration + news column -->
		<div bind:this={rightColEl} style="opacity: 0" class="flex flex-col gap-8">
			<img src={portrait} alt="Connor Scully-Allison self portrait" class="w-full rounded-sm" />
			<NewsWidget />
		</div>
	</div>
</section>
