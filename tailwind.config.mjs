/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode : "class",
	theme: {
		extend: {
			colors: {
				primary: 'rgb(4, 6, 10)',
				secondary: 'rgb(17, 24, 32)',
				title : 'rgb(255,255,255)',
				subtitle : 'rgb(127, 202, 255)',
				separator : 'rgb(31, 40, 54)',
				'regular-text' : 'rgb(112, 135, 158)',
				'secondary-text' : 'rgb(138, 148, 159)',
				'text-active' : 'rgb(232, 180, 79)',
				'separator-active' : 'rgb(196, 70, 80)',


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