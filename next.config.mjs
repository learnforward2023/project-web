/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    ENV: process.env.ENV,
    APP_TITLE: process.env.APP_TITLE,
    SIGN_WITH_GITHUB: process.env.SIGN_WITH_GITHUB,
    API_DOMAIN: process.env.API_DOMAIN,
  }
};

export default nextConfig;
