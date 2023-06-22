/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
        'serif': ['Poppins']
        
      }
    },
  },
  plugins: [require("daisyui")],
}

