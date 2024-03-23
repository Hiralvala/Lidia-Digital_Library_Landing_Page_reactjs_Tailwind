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
        paragraph: "#5E6282",
        menu: "#4475f2",
        name: "#75c7f5",
        border: "#DEDEDE",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        smm: "700px",
        sm: "768px",
        smd: "900px",
        md: "1060px",
        lg: "1200px",
        lgx: "1400px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

