/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  webpack: function (config, { isServer, buildId }) {
    config.resolve = {
      alias: {
        '@api': path.resolve(__dirname, 'api'),
        '@hooks': path.resolve(__dirname, 'hooks'),
        '@components': path.resolve(__dirname, 'components'),
        '@styles': path.resolve(__dirname, 'styles'),
        '@const': path.resolve(__dirname, 'const'),
      },
      ...config.resolve,
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
