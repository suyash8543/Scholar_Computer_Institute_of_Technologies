/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2563eb",
                secondary: "#1e293b",
            },
            screens: {
                'xs': '320px',
                'sm': '480px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                '3xl': '1920px',
            },
            spacing: {
                'safe': 'max(1rem, env(safe-area-inset-left))',
            },
        },
    },
    plugins: [],
};