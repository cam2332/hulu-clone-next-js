module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                '3xl': '2000px',
            },
            padding: {
                '1/2': '50%',
                '2/3': '66%',
            },
            inset: {
                'full-94': 'calc(100% - 94px)'
            },
            height: {
                'full-94': 'calc(100% - 94px)'
            },
            zIndex: {
                '-1': '-1',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('tailwind-scrollbar-hide')],
}