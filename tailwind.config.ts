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
        primary: "#fff",
        background: "#eff1f7",
      },
      maxWidth: {
        '9xl': '1440px',
      },
      padding: {
        "50": "50px",
      },
    },
  },
  plugins: [],
};
export default config;
