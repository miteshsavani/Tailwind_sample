/** @type {import('tailwindcss').Config} */
// Theme file
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#65a30d',
				'primary-light': '#737ec9',
				secondary: '#ecc94b',
			},
		},
	},
	plugins: [],
};
