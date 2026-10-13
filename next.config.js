/** @type {import('next').NextConfig} */
module.exports = {
  // allow the dev server to be opened from other devices / the LAN URL without cross-origin warnings
  allowedDevOrigins: ['192.168.0.19', '192.168.*.*', '10.*.*.*', '*.local'],
  // old service URLs from the first version of the site
  async redirects() {
    return [
      // one canonical host: www and the vercel.app alias permanently redirect to https://rudrix.co.in
      { source: '/:path*', has: [{ type: 'host', value: 'www.rudrix.co.in' }], destination: 'https://rudrix.co.in/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'rudrix-website.vercel.app' }], destination: 'https://rudrix.co.in/:path*', permanent: true },
      { source: '/services/ai', destination: '/services/custom-software-development', permanent: true },
      { source: '/services/apps', destination: '/services/mobile-app-development', permanent: true },
      { source: '/services/design', destination: '/services/ui-ux-design', permanent: true },
      { source: '/services/web', destination: '/services/web-development', permanent: true },
    ];
  },
};
