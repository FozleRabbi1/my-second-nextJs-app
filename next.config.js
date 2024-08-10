/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['png.pngtree.com', 'onebighappyphoto.com'], //======>>> Manuyal sistem
        remotePatterns: [   //========>>> dynamic
            {
                protocol: 'https',
                hostname: '**', // universel **  এর ফলে যত প্রকার hostnmae আছে সব support করবে 
            },
        ],
    },
};

module.exports = nextConfig;
