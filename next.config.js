/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
});
const nextConfig = {
  reactStrictMode: false,
};

module.exports = withPWA(nextConfig);

// 340333856491-fbeavp89pggtigfsn1h0a5bmkavudasj.apps.googleusercontent.com
