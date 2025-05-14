/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
    // Production optimizations
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    // Cache settings
    onDemandEntries: {
        // period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 25 * 1000,
        // number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 2,
    },
    // Environment variables configuration
    env: {
        NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
    // Note: Headers should be configured at the hosting level (e.g., Fleek, Vercel, etc.)
    // for static exports. Common headers to set:
    // - X-DNS-Prefetch-Control: on
    // - Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
    // - X-XSS-Protection: 1; mode=block
    // - X-Frame-Options: SAMEORIGIN
    // - X-Content-Type-Options: nosniff
    // - Referrer-Policy: origin-when-cross-origin
};

if (process.env.NEXT_PUBLIC_TEMPO) {
    nextConfig["experimental"] = {
        // NextJS 13.4.8 up to 14.1.3:
        // swcPlugins: [[require.resolve("tempo-devtools/swc/0.86"), {}]],
        // NextJS 14.1.3 to 14.2.11:
        // swcPlugins: [[require.resolve("tempo-devtools/swc/0.90"), {}]]

        // NextJS 15+ (Not yet supported, coming soon)
    }
}

module.exports = nextConfig;