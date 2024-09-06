/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    // See https://github.com/vercel/next.js/commit/645be74efd9d14a18fc26716076ce0fa855687ff
    // Still recommended by Tailwind install docs https://tailwindcss.com/docs/installation/using-postcss
    autoprefixer: {},
  },
};

export default config;
