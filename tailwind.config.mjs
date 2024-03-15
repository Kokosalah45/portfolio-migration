/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode : "class",
	theme: {
		extend: {
			colors: {
				'primary': 'rgb(14 19 25)',
				'secondary': 'rgb(16 23 31)',
				text : 'rgb(102 110 119)',
				'radial-centerd' : "radial-gradient(circle at center, #1D2B3B, #0F161E)"
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


// background: radial-gradient(at right bottom, #1D2B3B, #0F161E);