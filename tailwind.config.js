module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: '#1D4ED8',       // Blue (buttons, links)
        secondary: '#9333EA',     // Purple (accents)
        accent: '#F59E0B',        // Amber (highlight/CTA)

        // Extended for e-commerce
        success: '#10B981',       // Green (Success badges)
        warning: '#FBBF24',       // Yellow (Promo banners)
        danger: '#EF4444',        // Red (Errors, delete actions)
        info: '#3B82F6',          // Sky blue (notifications)
        muted: '#6B7280',         // Gray (subtext, placeholders)
        background: '#F9FAFB',    // Light background
        card: '#FFFFFF',          // Product card background
        sale: '#DC2626',          // Red for discounts
        black: '#111827',         // Deep black
        lightGray: '#E5E7EB',     // Borders, dividers

        // Custom gradient anchors (optional)
        gradientStart: '#6366F1',
        gradientEnd: '#EC4899',
      },
       backdropBlur: {
      xs: '2px',},
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
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
      },
    },
  },
  plugins: [],
};
