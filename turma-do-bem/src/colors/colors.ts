/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#f4f6fb", // fundo claro (clínica)
        mantle: "#ffffff", // cards brancos
        text: "#1f2937", // texto escuro
        subtext: "#6b7280",

        accent: "#22c55e", // verde saúde (principal)
        accentSoft: "#bbf7d0",

        highlight: "#3b82f6", // azul médico
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",

        teal: "#14b8a6", // apoio (água/limpeza)
        peach: "#fb923c", // calor humano
      },
      borderRadius: {
        apple: "12px",
        "apple-lg": "20px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
      } 
    },
  },
  theme_dark: {
    extends: {
      colors: {
        base: "#1f2937", // fundo escuro (clínica)
        mantle: "#6b7280", // cards escuros
        text: "#f4f6fb", // texto claro
        subtext: "#ffffff",

        accent: "#22c55e", // verde saúde (principal)
        accentSoft: "#bbf7d0",

        highlight: "#3b82f6", // azul médico
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",

        teal: "#14b8a6", // apoio (água/limpeza)
        peach: "#fb923c", // calor humano
      },
      borderRadius: {
        apple: "12px",
        "apple-lg": "20px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
      } 
      },
    },
    plugins: [],
  }
  
