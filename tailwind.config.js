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
				accent: 'var(--accent)'
			},
			// fontSize: {
			// 	sm: '0.750rem',
			// 	base: '1rem',
			// 	xl: '1.333rem',
			// 	'2xl': '1.777rem',
			// 	'3xl': '2.369rem',
			// 	'4xl': '3.158rem',
			// 	'5xl': '4.210rem'
			// },
			// fontFamily: {
			// 	heading: 'Popp',
			// 	body: 'Poppins'
			// },
			// fontWeight: {
			// 	normal: '400',
			// 	bold: '700'
			// }
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
						'--tw-prose-hr': 'rgb(0 0 0 / 10%)',
						'--tw-prose-quotes': theme('colors.primary'),
						'--tw-prose-quote-borders': theme('colors.primary'),
						'--tw-prose-captions': theme('colors.primary'),
						'--tw-prose-code': theme('colors.primary'),
						'--tw-prose-pre-code': theme('colors.text'),
						'--tw-prose-pre-bg': 'rgb(0 0 0 / 10%)',
						'--tw-prose-th-borders': 'rgb(0 0 0 / 10%)',
						'--tw-prose-td-borders': 'rgb(0 0 0 / 10%)',

						'--tw-prose-invert-body': theme('colors.text'),
						'--tw-prose-invert-headings': theme('colors.text'),
						'--tw-prose-invert-lead': theme('colors.accent'),
						'--tw-prose-invert-links': theme('colors.accent'),
						'--tw-prose-invert-bold': theme('colors.primary'),
						'--tw-prose-invert-counters': theme('colors.text'),
						'--tw-prose-invert-bullets': theme('colors.text'),
						'--tw-prose-invert-hr': 'rgb(255 255 255 / 10%)',
						'--tw-prose-invert-quotes': theme('colors.primary'),
						'--tw-prose-invert-quote-borders': theme('colors.primary'),
						'--tw-prose-invert-captions': theme('colors.primary'),
						'--tw-prose-invert-code': theme('colors.primary'),
						'--tw-prose-invert-pre-code': theme('colors.text'),
						'--tw-prose-invert-pre-bg': 'rgb(255 255 255 / 10%)',
						'--tw-prose-invert-th-borders': 'rgb(255 255 255 / 10%)',
						'--tw-prose-invert-td-borders': 'rgb(255 255 255 / 10%)'
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
