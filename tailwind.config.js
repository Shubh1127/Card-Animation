/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 5px 12px rgba(0, 0, 0, 0.3)', // Define your custom shadow here
      },
      
    },
  },
  plugins: [],
}

