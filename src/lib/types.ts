import type { SvelteComponent } from 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
};

export type MdsvexFile = {
	default: SvelteComponent;
	metadata: Record<string, string>;
};
