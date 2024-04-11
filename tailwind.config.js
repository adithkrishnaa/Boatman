/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#363636",
        secondry:'#0077BE',
        line:"#0094DA",
        menu:"#272727",
        abou:"#494949",
        white:"#FFFFFF",
        drop:"#F9F9F9"
      },
      fontFamily:{
        poppin:[ "Poppins"],
        inter: ["Inter"],
        pompiere:["Pompiere"]
      },
      height:{
        max:'542px',
        prolg:'367px',
        promd:'335px',
        navb:'110px'
      }
    },
  },
  plugins: [],
}

