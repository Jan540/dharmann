<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<svelte:head>
	<title>Jan Schöfer - {data.frontmatter.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.frontmatter.title} />
	<meta property="og:description" content={data.frontmatter.description} />
	<meta name="description" content={data.frontmatter.description} />
	<!-- <meta property="og:image" content={data.frontmatter.image} /> -->
</svelte:head>

<article class="max-w-4xl md:pt-10">
	<hgroup class="mb-8 flex flex-col gap-3 md:mb-14">
		<h1 class="text-5xl font-bold md:text-6xl">{data.frontmatter.title}</h1>
		<p class="text-xl text-muted md:text-2xl">Published on {formatDate(data.frontmatter.date)}</p>
	</hgroup>

	<div class="prose prose-xl prose-custom md:prose-2xl">
		<svelte:component this={component} />
	</div>
</article>
