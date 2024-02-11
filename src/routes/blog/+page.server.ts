import type { Post } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/posts');
	const posts = (await res.json()) as Post[];

	return {
		posts
	};
}) satisfies PageServerLoad;
