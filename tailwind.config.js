// import buildingIcon from './src/data/smartbuilding.png';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#ebf8f9', //'#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://www.bproperty.com/blog/wp-content/uploads/appartment-building-appartments-architecture-87223-1-1.jpg')",
      },
    },
  },
  plugins: [],
};
// https://www.bproperty.com/blog/wp-content/uploads/appartment-building-appartments-architecture-87223-1-1.jpg

// https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000
