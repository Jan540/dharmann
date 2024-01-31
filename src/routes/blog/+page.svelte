<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.posts as post}
	<div>
		<b>{post.title}</b>

		<p>{formatDate(post.date)}</p>
	</div>
{/each}
