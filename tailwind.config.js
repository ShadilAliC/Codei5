/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2e0730",
        secondary: "#D86B0B",
        success: "rgb(var(--success)",
        danger: "rgb(var(--danger)",
        warning: "rgb(var(--warning)",
        info: "rgb(var(--info)",
        light: "rgb(var(--light)",
        dark: "rgb(var(--dark)",
        body_color: "#f9f9f9",
        bodybg_color: "#f8f8f7",
        btn_bg:"#664969",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}