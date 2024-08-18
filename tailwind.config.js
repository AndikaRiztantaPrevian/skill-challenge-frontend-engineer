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
        white: "#E0E0E0",
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
      stikers: {
        blue: "#E9F3FF",
        orange: "#FDCFA4",
        cream: "#F9E9C3",
        greenlight: "#AFEBDB",
        green: "#CBF1C2",
        purple: "#CFCEF9",
        purplelight: "F9E0FD",
      }
    },
  },
  plugins: [],
};
