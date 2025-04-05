/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    prependData: `@import "./_mantine.scss";`,
  },

  images: {
    // unoptimized: true,
    // dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },

  webpack: (config) => {
    config.externals = [...config.externals, 'bcrypt'];
    return config;
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-google-site-verification',
            value: 'x-google-site-verification-code',
          },
          {
            key: 'x-bing-site-verification',
            value: 'x-bing-site-verification-code',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
