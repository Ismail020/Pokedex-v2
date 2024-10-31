import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite/**/*.{js,ts,jsx,tsx,mdx}",
        flowbite.content(),
    ],
    theme: {
        extend: {
            fontFamily: {
                sora: ["var(--font-sora)"],
                'atkinson': ['"Atkinson Hyperlegible"', 'sans-serif'],
            },
            boxShadow: {
                custom: "0px 5px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            },
            colors: {
                primary: "#fff",
                background: "#1E1E1E",
                foreground: "#242424",
                foregroundHover: "#3a3a3a",
                aboveForeground: "#4e4e4e",
                border: "#6B7280",
                male: "#8bc8f7",
                female: "#f49ec6",
            },
            borderRadius: {
                "20": "20px",
            },
            maxWidth: {
                "9xl": "1920px",
            },
            padding: {
                "50": "50px",
            },
        },
    },
    plugins: [flowbite.plugin(), "prettier-plugin-tailwindcss"],
};
export default config;
