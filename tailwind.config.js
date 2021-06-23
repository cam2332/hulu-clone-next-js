module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                '2xl': '1600px',
                '3xl': '2000px',
                'sm-landscape': { 'raw': '(hover: none) and (min-width: 640px)' }
            },
            padding: {
                '1/2': '50%',
                '2/3': '66%',
                '3/4': '75%'
            },
            inset: {
                'full-94': 'calc(100% - 94px)'
            },
            height: {
                'full-94': 'calc(100% - 94px)'
            },
            minHeight: {
                's35': '35vh',
                's65': '65vh'
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