/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode : "class",
	theme: {
		extend: {
			colors: {
				'primary': 'rgb(14 19 25)',
				'secondary': 'rgb(16 23 31)',
			  },
			gridTemplateRows:{
				'layout': '60px 1fr',
			},
			gridTemplateColumns:{
				'layout': '250px 1fr',
			},
			
		},
	},
	plugins: [],
}
