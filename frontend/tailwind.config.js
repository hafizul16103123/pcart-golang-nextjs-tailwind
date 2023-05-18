/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        siteColor: "var( --siteColor)",
        siteTextColor: "var( --text-gray-500)",
        siteSecondaryColor: "var( --siteSecondaryColor)",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
  plugins: [require("tw-elements/dist/plugin")],
};
