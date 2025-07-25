/** @type {import('tailwindcss').Config} */
export default {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    colors: {
      bbkvYellow: '#FFCC00',
      bbkvDark: '#2C210A',
      bbkvGrey: '#4A4A4A',
      bbkvOrange: '#FF9900',
      bbkvOffwhite: '#F9F7F2',
    },
  },
},
plugins: [],
};

