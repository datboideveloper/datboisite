/** @type {import('tailwindcss').Config} */
module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/images",
          outputPath: "static/images/",
        },
      },
    });

    return config;
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
