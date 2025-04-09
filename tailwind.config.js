module.exports = {
  content: [
    './index.html', // Ensure this matches the root HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4379F2',
        primaryHover: '#2563eb',
        primaryActive: '#1b5ce9',
        success: '#23c197',
        successHover: '#00a99a',
        successActive: '#00a396',
      },
    },
  },
  plugins: [],
};
