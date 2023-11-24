/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos JavaScript y JSX en la carpeta src
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#E6DB20",
        yellowBlack: "#dbce18",
        customDarkGray: "#363237",
        yellowOpacity: "rgba(230, 219, 32, 0.60)",
      },
      fontFamily: {
        poppins: "Poppins",
        syncopate: "Syncopate",
      },
    },
  },
  plugins: [],
};
