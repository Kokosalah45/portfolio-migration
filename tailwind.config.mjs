/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode : "class",
	theme: {
		extend: {
			colors: {
				primary: 'rgb(14 19 25)',
				secondary: 'rgb(16 23 31)',
				title : '#FFF',
				subtitle : '#7a9fbb',
				separator : '#272f3c',
				'regular-text' : '#848d94',
				'secondary-text' : '#333d48',
				'text-active' : '#c0aa82',
				'separator-active' : '#a0525f',

			  },
			
			gridTemplateRows:{
				'layout': '45px 1fr',
			},
			gridTemplateColumns:{
				'layout': '250px 1fr 250px',
			},
			
			
		},
	},
	plugins: [],
}


// background: radial-gradient(at right bottom, #1D2B3B, #0F161E);