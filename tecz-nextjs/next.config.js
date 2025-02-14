/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/shop",
            destination: "/",
            permanent: true, // Set to false if you want a temporary redirect
          },
        ];
      }
}

module.exports = nextConfig
