/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //     'hero': "url('../public/bgSvg1.svg')",
      //     'hero3': "url('../public/bgSvg3.svg')"
      // },
      // fontFamily:{
      //   TitilliumWeb : ['Titillium Web'],
      //   Montserrat : ['Montserrat'],
      //   Poppins : ['Poppins']
      // }
    },
  },
  plugins: [],
}
