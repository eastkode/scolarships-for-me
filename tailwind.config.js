module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Educational trust and reliability
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600 - Main primary
          700: "#1D4ED8", // blue-700
          900: "#1E3A8A", // blue-900
          DEFAULT: "#2563EB", // blue-600
        },
        
        // Secondary Colors - Professional depth
        secondary: {
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900 - Main secondary
          DEFAULT: "#0F172A", // slate-900
        },

        // Accent Colors - Deadline urgency and opportunity
        accent: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500 - Main accent
          600: "#D97706", // amber-600
          DEFAULT: "#F59E0B", // amber-500
        },

        // Background Colors
        background: "#FEFEFE", // neutral-50 - Clean canvas
        surface: "#F8FAFC", // slate-50 - Subtle elevation

        // Text Colors
        text: {
          primary: "#1E293B", // slate-800 - Extended reading
          secondary: "#64748B", // slate-500 - Information hierarchy
        },

        // Status Colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500 - Achievement celebration
          600: "#059669", // emerald-600
          DEFAULT: "#10B981", // emerald-500
        },

        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500 - Important deadlines
          DEFAULT: "#F59E0B", // amber-500
        },

        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500 - Problem identification
          DEFAULT: "#EF4444", // red-500
        },
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },

      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'strong': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },

      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      transitionDuration: {
        '300': '300ms',
      },

      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
    },
  },
  plugins: [],
}