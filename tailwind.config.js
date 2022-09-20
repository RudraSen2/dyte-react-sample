/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dyte-blue": "#2160FD",
        "dyte-black": "#06060E",
        "dyte-grey": "#262626"
      },
    },
  },
  plugins: [],
}