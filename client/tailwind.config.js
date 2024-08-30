/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#17115BE5',
        'purple-blue': 'rgba(23, 17, 91, 0.65)'
      },
      screens: {
        'tablet': '700px',
        // => @media (min-width: 640px) { ... }

        "mid":'950px',
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}