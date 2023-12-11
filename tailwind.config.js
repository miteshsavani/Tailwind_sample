/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#5c6ac4',
				'primary-light': '#737ec9',
				secondary: '#ecc94b',
			},
		},
	},
	plugins: [],
};
