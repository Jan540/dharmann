import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

export const prerender = true;

injectSpeedInsights();
