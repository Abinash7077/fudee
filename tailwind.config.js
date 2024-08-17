/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'bottom-sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'bottom': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'bottom-md': '0 6px 8px rgba(0, 0, 0, 0.1)',
        'bottom-lg': '0 8px 10px rgba(0, 0, 0, 0.1)',
        'bottom-xl': '0 10px 15px rgba(0, 0, 0, 0.2)',
        'bottom-2xl': '0 12px 20px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
