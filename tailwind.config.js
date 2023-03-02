/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greeny':'#1AD993',
        'softGreeny':'#ABFFE0',
        'bluesh': '#503AE7',
        'purply': '#832BC1',
        'blackish': '#14142B',
        'grayesh': '#AFB0B9',
        'offWhite': '#F4F2FF',
      },
      fontFamily: {
        inter:['Inter', 'sans-serif']
      },
      fontSize: {
        'h1': '48px',
        'h2': '32px',
        'h3': '24px',
        'h4': '20px',
        'h5': '16px',
        'h6': '12px',
        'body': '16px',
      }
    },
  },
  plugins: [],
}
