/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            keyframes: {
                show: {
                    '0%': { transform: 'translate(-10%, 0)' },
                    '100%': { transform: 'translate(0, 0)' },
                },
            },
            animation: {
                'show-sidebar': 'show .5s forwards',
            },
            fontFamily: {
                sans: 'Kumbh Sans, sans-serif'
            },
            colors: {
                gray: {
                    800: "#050505"
                }
            }
        },
    },
    plugins: [],
}