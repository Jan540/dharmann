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

<article>
	<hgroup class="flex flex-col gap-2">
		<h1 class="text-6xl">{data.frontmatter.title}</h1>
		<p class="text-gray-600">Published at {formatDate(data.frontmatter.date)}</p>
	</hgroup>

	<div class="prose">
		<svelte:component this={component} />
	</div>
</article>
