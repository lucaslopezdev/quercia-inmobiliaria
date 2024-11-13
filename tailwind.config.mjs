/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				sm: '600px',
				md: '728px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1480px'
			}
		},
		extend: {
			colors: {
				blueQ: '#00007F',
				redQ: '#FF0000',
				whatsapp: '#25CC64'
			}
		},
		fontFamily: {
			system: ['system-ui'] // parece ser por defecto
		}
	},
	plugins: [],
}
