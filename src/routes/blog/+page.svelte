<script lang="ts">
	import { siteTitle } from '$lib/config';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{siteTitle} - Blog</title>
	<meta name="description" content={siteTitle + 'Blog'} />
</svelte:head>

{#each data.posts as post}
	<a href={'blog/' + post.slug}>
		<div>
			<b>{post.title}</b>

			<p>{formatDate(post.date)}</p>
		</div>
	</a>
{/each}
