import { slugFromPath } from '$lib/slug-from-path';
import type { Post } from '$lib/types';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const paths = import.meta.glob('/src/posts/*.svx', { eager: true });

export const GET: RequestHandler = async () => {
	const posts = [];

	for (const path in paths) {
		const file = paths[path];

		if (!file || typeof file !== 'object') {
			return error(404, 'Not found');
		}

		const slug = slugFromPath(path);

		if (!slug) {
			return error(500, 'Error parsing slug');
		}

		if ('metadata' in file === false) {
			return error(500, `${path} does not have metadata`);
		}

		const metadata = file.metadata as Omit<Post, 'slug'>;

		if (!metadata.title || !metadata.description || !metadata.date) {
			return error(500, `${path} does not have all the required metadata`);
		}

		const post: Post = {
			...metadata,
			slug
		};

		posts.push(post);
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return json(posts);
};
