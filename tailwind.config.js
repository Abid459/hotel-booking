module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#06b6d4",
        
"secondary": "#67e8f9",
        
"accent": "#facc15",
        
"neutral": "#e5e7eb",
        
"base-100": "#f5f5f4",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
