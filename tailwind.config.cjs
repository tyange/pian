/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'burger': "url(../public/images/burger.png)"
      }
    }
  },
  plugins: []
};
