/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        default: "#09090A",
      },
      screens: {
        'xs': {'max':'425px'},
      },
      fontFamily: {
        suprecot: "suprecot",
        sans: "poppins"
      },
      boxShadow: {
        "default": "0 0 10px 0 #6d28d9",
        "light-violet": `0 0 5px rgb(91 33 182 / var(--tw-bg-opacity)),
                        0 0 25px rgb(91 33 182 / var(--tw-bg-opacity)),
                        0 0 50px rgb(91 33 182 / var(--tw-bg-opacity)),
                        0 0 100px rgb(91 33 182 / var(--tw-bg-opacity))`,
        "custom": `5px 5px 8px #00000046, -5px -5px 8px #4f475200`,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
