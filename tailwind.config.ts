import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			fontColor: 'var(--color-font-color)',
  			fontHover: 'var(--color-font-color-hover)',
  			bgColor: 'var(--color-background-color)',
  			bgHover: 'var(--color-background-color-hover)',
  			borderColor: 'var(--color-border-color)'
  		},
  		fontFamily: {
  			pavelt: ['Pavelt', 'san-serif']
  		},
  		height: {
  			headerHeight: 'var(--header-height)',
  			footerHeight: 'var(--footer-height)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
  	screens: {
  		sm: '600px',
  		md: '750px',
  		lg: '960px',
  		xl: '1100px'
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
