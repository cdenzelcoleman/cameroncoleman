export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive']
      },
      colors: {
        primary: '#ff007f',
        secondary: '#00dfff',
      },
      backgroundImage: {
        'pixel-art': "url('/assets/pixel-bg.png')"
      }
    }
  },
  plugins: [],
}