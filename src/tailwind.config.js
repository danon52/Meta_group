export default {
    theme: {
        extend: {
            animation: {
                scrollBehavior: ['smooth'],
                'marquee': 'marquee 30s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }
                }
            }
        }
    }
}