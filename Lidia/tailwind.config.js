/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plus: ["Plus","Jarkata","Sans"],
        pluss: ["plus"]
      },
      colors:{
        primary: "#4737FF",
        unactive: "#9A9EA6",
        Login: "#181E4B",
        paragraph: "#5E6282"
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

