module.exports = {
  important: true,
  // Active dark mode on class basis
  // false or 'media' or 'class'
  darkMode: false,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // check: "url('/icons/check.svg')",
        // landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
}
