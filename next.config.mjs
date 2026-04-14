/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable gzip + brotli compression
    compress: true,

    // Optimize images served via next/image
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "avatar.vercel.sh",
            },
        ],
        // Limit generated sizes to what we actually need
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },

    // Security & caching headers
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                ],
            },
            {
                // Cache static assets aggressively
                source: "/(.*)\\.(png|jpg|jpeg|webp|avif|svg|ico|woff2)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },

    // Minimize powered-by header exposure
    poweredByHeader: false,

    // Enable React strict mode for catching issues
    reactStrictMode: true,
};

export default nextConfig;
