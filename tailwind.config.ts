import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config;
