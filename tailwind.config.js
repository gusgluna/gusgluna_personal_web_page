module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./public/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        pr_color: "#1c4c96",
      },
      height: {
        212: "53rem",
        112: "28rem",
      },
      width: {
        312: "78rem",
        88: "22rem",
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
content: [];
