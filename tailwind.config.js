/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
        xs: "375px",
				sm: "576px",
				md: "768px",
				lg: "976px",
				xl: "1440px",
			},
      fontFamily: {
        'main': 'Roboto Flex, sans-serif',
        'header': 'Bebas Neue, sans-serif',
        'text': 'Roboto Condensed, sans-serif'

      },
      colors: {
        'cta': '#0147FF',
        'dark': '#282828',
        'light': '#F7F7F7',
        'grey' :"#D9DCD5",
        'title': '#1D1D1B',
        'dot': '#EDEDED'
      },
		},
	},
	plugins: [],
};