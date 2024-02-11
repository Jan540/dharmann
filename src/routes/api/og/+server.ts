import { read } from '$app/server';
import OgImage from '$lib/components/og-image.svelte';
import Inter from '$lib/fonts/Inter-Regular.ttf';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import type { RequestHandler } from './$types';

// export const config = {
// 	runtime: 'edge'
// };

const fontData = read(Inter).arrayBuffer();

const height = 630;
const width = 1200;

export const GET: RequestHandler = async ({ url }) => {
	const title = url.searchParams.get('title') ?? undefined;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const result = (OgImage as any).render({ title });
	const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'Inter',
				data: await fontData,
				style: 'normal'
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
