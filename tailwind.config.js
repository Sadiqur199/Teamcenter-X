/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      // backgroundImage: theme => ({
      //   'gradient-custom': 'linear-gradient(90deg, #000028, #0099ff)',
      // })
    },
  },
  plugins: [require("daisyui")],
}

