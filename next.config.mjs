/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  output: "standalone",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
