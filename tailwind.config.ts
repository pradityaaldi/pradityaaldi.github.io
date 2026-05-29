import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: '#22d3ee',
					soft: '#67e8f9',
					deep: '#0891b2'
				},
				ink: {
					950: '#05070a',
					900: '#0a0e14',
					800: '#11161f',
					700: '#1a212d'
				}
			},
			fontFamily: {
				display: ['Montserrat', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				glow: '0 0 40px -10px rgba(34,211,238,0.45)'
			},
			keyframes: {
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				float: {
					'0%,100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%,100%': { opacity: '0.4' },
					'50%': { opacity: '1' }
				}
			},
			animation: {
				'fade-up': 'fade-up 0.7s ease-out forwards',
				float: 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite'
			}
		}
	},
	plugins: []
} satisfies Config;
