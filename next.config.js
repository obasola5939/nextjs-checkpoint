// next.config.js - Add for static export
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export with images
  },
}
