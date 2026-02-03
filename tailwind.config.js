export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'kettleer-maroon': '#722F37',
        'kettleer-maroon-dark': '#5a252c',
        'kettleer-gold': '#C9A227',
        'kettleer-gold-light': '#e8d48a',
        'kettleer-cream': '#FDF8F3',
      },
      fontFamily: {
        'display': ['Oswald', 'Impact', 'sans-serif'],
        'serif': ['Crimson Text', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
