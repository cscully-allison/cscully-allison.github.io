<script lang="ts">
	import { page } from '$app/state';

	const isHome = $derived(page.url.pathname === '/');

	function anchor(id: string): string {
		return isHome ? `#${id}` : `/#${id}`;
	}
</script>

<nav class="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
	<div class="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
		<a href="/" class="font-serif text-lg text-fg transition-colors hover:text-accent">
			Connor Scully-Allison
		</a>
		<ul class="m-0 flex list-none gap-8 p-0">
			<li>
				<a href={anchor('introduction')} class="font-sans text-sm text-muted transition-colors hover:text-accent">
					Introduction
				</a>
			</li>
			<li>
				<a href={anchor('research')} class="font-sans text-sm text-muted transition-colors hover:text-accent">
					Research
				</a>
			</li>
			<li>
				<a href={anchor('software')} class="font-sans text-sm text-muted transition-colors hover:text-accent">
					Software
				</a>
			</li>
			<li>
				<a href={anchor('papers')} class="font-sans text-sm text-muted transition-colors hover:text-accent">
					Papers
				</a>
			</li>
			<li>
				<a href="/design" class="font-sans text-sm text-muted transition-colors hover:text-accent-3">
					Design ↗
				</a>
			</li>
		</ul>
	</div>
</nav>
