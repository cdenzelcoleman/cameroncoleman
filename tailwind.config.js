module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        // Add pixel-art style extensions here
        fontFamily: {
          retro: ['"Press Start 2P"', 'cursive']
      },
      colors: {
        primary: '#ff007f',
        secondary: '#00dfff',
      },
      backgroundImage: {
        'pixel-art': "url('/src/assets/pixel-bg.png')"
      }
      }
    },
    plugins: [],
  }