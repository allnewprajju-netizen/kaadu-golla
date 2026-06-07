import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Kaadu Golla community palette - earthy, grounded, organic
                earth: {
                    50: "#faf7f2",
                    100: "#f4ede5",
                    200: "#e9dccb",
                    300: "#dcc4a8",
                    400: "#d1a878",
                    500: "#c89050", // Deep terracotta
                    600: "#b07840",
                    700: "#924a36",
                    800: "#764035",
                    900: "#603a32",
                },
                terracotta: {
                    50: "#fdf6f3",
                    100: "#fce8e0",
                    200: "#f7cfc0",
                    300: "#f0b19f",
                    400: "#e8927e",
                    500: "#d9725d", // Warm terracotta
                    600: "#c85f4d",
                    700: "#a84a41",
                    800: "#8d3f39",
                    900: "#753633",
                },
                forest: {
                    50: "#f1f6f0",
                    100: "#deeae0",
                    200: "#c3d9c6",
                    300: "#a3c5a6",
                    400: "#7bb087",
                    500: "#5a9a66", // Forest green
                    600: "#4d865a",
                    700: "#3f6e4b",
                    800: "#34583e",
                    900: "#2d4935",
                },
                cream: {
                    50: "#fefdfb",
                    100: "#fef8f5",
                    200: "#fdf3ed",
                    300: "#fce8e0",
                    400: "#f9d9cc",
                    500: "#f5c9b8", // Warm cream
                    600: "#edbb9f",
                    700: "#e3a885",
                    800: "#d4946d",
                    900: "#c2865c",
                },
            },
            fontFamily: {
                sans: ["system-ui", "sans-serif"],
                serif: ["Georgia", "serif"],
            },
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1rem" }],
                sm: ["0.875rem", { lineHeight: "1.25rem" }],
                base: ["1rem", { lineHeight: "1.5rem" }],
                lg: ["1.125rem", { lineHeight: "1.75rem" }],
                xl: ["1.25rem", { lineHeight: "1.75rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
                "5xl": ["3rem", { lineHeight: "1" }],
            },
            spacing: {
                gutter: "1.5rem",
                "gutter-lg": "2rem",
            },
            borderRadius: {
                sm: "0.25rem",
                md: "0.375rem",
                lg: "0.5rem",
                xl: "0.75rem",
            },
            animation: {
                fadeIn: "fadeIn 0.5s ease-in",
                slideUp: "slideUp 0.6s ease-out",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                slideUp: {
                    from: { transform: "translateY(20px)", opacity: "0" },
                    to: { transform: "translateY(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
