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
    SIGN_WITH_GOOGLE: process.env.SIGN_WITH_GOOGLE,
    SIGN_WITH_FACEBOOK: process.env.SIGN_WITH_FACEBOOK,
    API_DOMAIN: process.env.API_DOMAIN,
  }
};

export default nextConfig;
