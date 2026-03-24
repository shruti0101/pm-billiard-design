/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "cdn.sanity.io"],
  },

  async redirects() {
    return [
      {
        source: '/:slug.html',
        destination: '/categories/:slug',
        permanent: true, // SEO 301 redirect
      },
    ];
  },
};

export default nextConfig;