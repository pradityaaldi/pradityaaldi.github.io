import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// GitHub dark (Primer) accent — link blue
				accent: {
					DEFAULT: '#58a6ff',
					soft: '#79c0ff',
					deep: '#1f6feb',
					fg: '#2f81f7'
				},
				// GitHub primary/action green
				success: {
					DEFAULT: '#238636',
					hover: '#2ea043',
					fg: '#3fb950'
				},
				// GitHub dark canvas + borders
				ink: {
					950: '#010409', // canvas.inset (header/footer)
					900: '#0d1117', // canvas.default (page bg)
					800: '#161b22', // canvas.subtle (cards)
					700: '#30363d', // border.default
					600: '#21262d' // border.muted / btn bg
				},
				fg: {
					DEFAULT: '#e6edf3',
					muted: '#7d8590',
					subtle: '#6e7681'
				}
			},
			fontFamily: {
				display: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Noto Sans',
					'Helvetica',
					'Arial',
					'sans-serif'
				],
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Noto Sans',
					'Helvetica',
					'Arial',
					'sans-serif'
				],
				mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'monospace']
			},
			boxShadow: {
				// GitHub overlay shadow
				glow: '0 8px 24px rgba(1,4,9,0.6)',
				gh: '0 8px 24px rgba(1,4,9,0.4)'
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
