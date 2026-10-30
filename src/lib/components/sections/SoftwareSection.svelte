<script lang="ts">
	import { software } from '$lib/data/software.js';
	import TapedFigure from '$lib/components/TapedFigure.svelte';
	import CopyCommand from '$lib/components/CopyCommand.svelte';
	import { fadeInUp } from '$lib/actions/animate.js';
</script>

<section id="software" class="py-20">
	<div class="mx-auto max-w-4xl px-6">
		<h2 use:fadeInUp class="mb-12 font-serif text-3xl text-fg">Software</h2>

		<div>
			{#each software as project, i (project.id)}
				<article
					use:fadeInUp={{ delay: i * 120, bounce: true }}
					class="flex flex-col gap-6 border-t border-border py-12 first:border-t-0 first:pt-0"
				>
					<header class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
						<div class="flex flex-col gap-1.5">
							<p class="font-sans text-xs tracking-widest text-muted uppercase">
								{project.kind} · {project.license}
							</p>
							<h3
								class="font-serif text-2xl text-fg"
								style="border-left: 3px solid var(--color-accent-2); padding-left: 0.75rem;"
							>
								{project.name}
							</h3>
							<p class="pl-[calc(0.75rem+3px)] font-sans text-sm text-muted italic">
								{project.tagline}
							</p>
						</div>
						<div class="flex flex-wrap gap-3 sm:justify-end sm:pt-5">
							{#each project.links as link (link.url)}
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									class="rounded-sm border border-accent px-2.5 py-1 font-sans text-xs font-medium text-accent transition-colors hover:border-accent-hover hover:text-accent-hover"
								>
									{link.label}
								</a>
							{/each}
						</div>
					</header>

					<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-5">
						<div class="flex flex-col gap-5 md:col-span-3">
							<p class="font-sans text-base leading-relaxed text-fg/80">{project.description}</p>

							<div class="flex flex-wrap items-center gap-2">
								<span class="mr-1 font-sans text-xs tracking-widest text-muted uppercase">
									{project.tagLabel}
								</span>
								{#each project.tags as tag (tag)}
									<span
										class="rounded-full border border-border bg-bg px-2.5 py-0.5 font-sans text-xs text-fg"
									>
										{tag}
									</span>
								{/each}
							</div>

							<CopyCommand command={project.install} />
						</div>

						<div class="pt-2 md:col-span-2 {i % 2 === 1 ? 'md:order-first' : ''}">
							<TapedFigure seed={project.id}>
								<img
									src={project.figure.src}
									alt={project.figure.alt}
									class="block w-full p-1.5"
									loading="lazy"
								/>
							</TapedFigure>
						</div>
					</div>

					{#if project.linkedViews}
						{@const views = project.linkedViews}
						<div class="flex flex-col gap-4 pt-2">
							<p class="font-sans text-xs tracking-widest text-muted uppercase">
								Linked views in practice
							</p>
							<div class="grid grid-cols-1 items-center gap-4 md:grid-cols-[3fr_auto_2fr]">
								<TapedFigure seed={`${project.id}-left`}>
									<img src={views.left.src} alt={views.left.alt} class="block w-full p-1.5" loading="lazy" />
								</TapedFigure>

								<!-- Hand-drawn-ish two-way arrow; turns vertical when the views stack. -->
								<svg
									viewBox="0 0 64 32"
									class="mx-auto h-8 w-16 rotate-90 md:rotate-0"
									fill="none"
									stroke="var(--color-accent-3)"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<path d="M6 16 C 20 11, 44 21, 58 16" />
									<path d="M13 9 L 5 16 L 13 23" />
									<path d="M51 9 L 59 16 L 51 23" />
								</svg>

								<div class="flex flex-col gap-3">
									<TapedFigure seed={`${project.id}-right`}>
										<img
											src={views.right.src}
											alt={views.right.alt}
											class="block w-full p-1.5"
											loading="lazy"
										/>
									</TapedFigure>
									<p class="font-sans text-sm text-muted italic">{views.caption}</p>
								</div>
							</div>
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>
