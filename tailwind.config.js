export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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