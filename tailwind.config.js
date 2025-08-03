
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
        primary: '#10B981',          // Emerald Green
        secondary: '#D1FAE5',        // Mint
        accent: '#FBBF24',           // Yellow (CTA)
        success: '#10B981',          // Success Green
        warning: '#FACC15',          // Bright Yellow
        danger: '#DC2626',           // Strong Red
        info: '#0EA5E9',             // Teal Blue
        muted: '#6B7280',            // Neutral Gray
        background: '#F0FDF4',       // Soft Green
        card: '#FFFFFF',             // Card White
        sale: '#065F46',             // Dark Green (for urgency tags like SALE)
        black: '#1E293B',            // Slate for text
        lightGray: '#E5E7EB',        // Light Gray (for borders etc.)
        gradientStart: '#10B981',    // Gradient Green Start
        gradientEnd: '#34D399',      // Lighter Green End
      },

      backdropBlur: {
        xs: '2px',
      },

      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
        marquee: 'marquee 30s linear infinite',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideIn: {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
