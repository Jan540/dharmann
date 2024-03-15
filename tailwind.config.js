import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: 'var(--text)',
				background: 'var(--background)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
				muted: 'var(--muted)',
				border: 'var(--border)'
			},
			fontFamily: {
				sans: ['"Satoshi-Variable"', ...defaultTheme.fontFamily.sans]
			},
			typography: ({ theme }) => ({
				custom: {
					css: {
						'--tw-prose-body': theme('colors.text'),
						'--tw-prose-headings': theme('colors.text'),
						'--tw-prose-lead': theme('colors.accent'),
						'--tw-prose-links': theme('colors.accent'),
						'--tw-prose-bold': theme('colors.primary'),
						'--tw-prose-counters': theme('colors.text'),
						'--tw-prose-bullets': theme('colors.text'),
						'--tw-prose-hr': theme('colors.border'),
						'--tw-prose-quotes': theme('colors.primary'),
						'--tw-prose-quote-borders': theme('colors.primary'),
						'--tw-prose-captions': theme('colors.primary'),
						'--tw-prose-code': theme('colors.primary'),
						'--tw-prose-pre-code': theme('colors.text'),
						'--tw-prose-pre-bg': theme('colors.border'),
						'--tw-prose-th-borders': theme('colors.border'),
						'--tw-prose-td-borders': theme('colors.border'),

						'--tw-prose-invert-body': theme('colors.text'),
						'--tw-prose-invert-headings': theme('colors.text'),
						'--tw-prose-invert-lead': theme('colors.accent'),
						'--tw-prose-invert-links': theme('colors.accent'),
						'--tw-prose-invert-bold': theme('colors.primary'),
						'--tw-prose-invert-counters': theme('colors.text'),
						'--tw-prose-invert-bullets': theme('colors.text'),
						'--tw-prose-invert-hr': theme('colors.border'),
						'--tw-prose-invert-quotes': theme('colors.primary'),
						'--tw-prose-invert-quote-borders': theme('colors.primary'),
						'--tw-prose-invert-captions': theme('colors.primary'),
						'--tw-prose-invert-code': theme('colors.primary'),
						'--tw-prose-invert-pre-code': theme('colors.text'),
						'--tw-prose-invert-pre-bg': theme('colors.border'),
						'--tw-prose-invert-th-borders': theme('colors.border'),
						'--tw-prose-invert-td-borders': theme('colors.border')
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
