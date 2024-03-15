/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode : "class",
	theme: {
		extend: {
			colors: {
				'primary': 'rgb(14 19 25)',
				'secondary': 'rgb(16 23 31)',
				text : 'rgb(102 110 119)'
			  },
			gridTemplateRows:{
				'layout': '45px 1fr',
			},
			gridTemplateColumns:{
				'layout': '250px 1fr',
			},
			
		},
	},
	plugins: [],
}
