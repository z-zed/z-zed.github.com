/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Añade esta línea
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      boxShadow: {
        card: "7px 7px rgb(0 0 0 / 100%)",
        hover: "11px 11px #000",
      },
      colors: {
        pblue: "#96C7F2",
        pgreen: "#ADF296",
        ppink: "#F396E5",
        pyellow: "#F2CF96",
        ppurlple: "#9D859A",
        pblack: "#4E6273",
      },
      fontFamily: {
        fontFamily: {
          alexandria: [
            "Alexandria-Black",
            "Alexandria-Bold",
            "Alexandria-ExtraBold",
            "Alexandria-ExtraLight",
            "Alexandria-Light",
            "Alexandria-Medium",
            "Alexandria-Regular",
            "Alexandria-SemiBold",
            "Alexandria-Thin",
          ],
          kablammo: ["Kablammo-Regular"],
        },
        maxWidth: {
          "1/12": "8.333333%",
          "2/12": "16.666667%",
          "3/12": "25%",
          "4/12": "33.333333%",
          "5/12": "41.666667%",
          "6/12": "50%",
          "7/12": "58.333333%",
          "8/12": "66.666667%",
          "9/12": "75%",
          "10/12": "83.333333%",
          "11/12": "91.666667%",
          "12/12": "100%",
        },
        borderWidth: {
          1: "1px",
        },
        borderColor: {
          black: "#000",
          blackRad: "rgba(0,0,0,0.8)",
          whiteRad: "rgba(242, 242, 242, 0.8)",
        },
      },
    },
    plugins: [require("tailwind-scrollbar")],
  },
};
