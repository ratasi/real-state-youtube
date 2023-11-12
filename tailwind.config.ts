import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#727C73",
      },
      backgroundImage: {
        banner: "url('/assets/house-banner.png')",
      },
      boxShadow: {
        light: "0px 4px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
