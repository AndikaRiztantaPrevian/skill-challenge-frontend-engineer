/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        latoRegular: ['Regular'],
        latoBold: ['Bold']
      }
    },
    colors: {
      primary: {
        blue: "#2F80ED",
        gray: {
          darken: "#4F4F4F",
          DEFAULT: "#828282",
          light: "#E0E0E0",
        },
        white: "#FFFFFF",
      },
      indicator: {
        orange: "#F8B76B",
        purple: "#8785FF",
        red: "#EB5757",
        yellow: "#F2C94C",
      },
      chats: {
        orange: {
          DEFAULT: "#E5A443",
          light: "#FCEED3",
        },
        purple: {
          DEFAULT: "#9B51E0",
          light: "#EEDCFF",
        },
        green: {
          DEFAULT: "#43B78D",
          light: "#D2F2EA",
        },
      },
    },
  },
  plugins: [],
};
