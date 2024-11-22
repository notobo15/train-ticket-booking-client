import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "canvas-primary": "var(--col-bg-canvas-prim)",
        "negative-400": "var(--col-negative-400)",
        "link-600": "var(--col-link-600)",
        transparent: "var(--col-transparent)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      spacing: {
        "100": "var(--d-100)",
        "150": "var(--d-150)",
        "200": "var(--d-200)",
        "250": "var(--d-250)",
        "300": "var(--d-300)",
        "350": "var(--d-350)",
      },
      boxShadow: {
        none: "0 0 #0000",
        sm: "var(--s-sm)",
        md: "var(--s-md)",
        raised: "var(--s-el-raised)",
      },
      letterSpacing: {
        tight: "var(--ls-tight)",
        tighter: "var(--ls-tighter)",
        wide: "var(--ls-wide)",
        wider: "var(--ls-wider)",
      },
      lineHeight: {
        reset: "var(--lh-reset)",
      },
      gridTemplateColumns: {
        "custom-1": "25% 1fr minmax(min-content, 12.5%)",
      },
    },
  },
  variants: {
    extend: {
      padding: ["responsive"], // Đảm bảo các lớp padding có thể phản hồi theo kích thước màn hình
    },
  },
  plugins: [],
};
export default config;
