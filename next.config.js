/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'r2kd0cre8z.ufs.sh',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'xsgames.co',
        pathname: '/randomusers/**',
      }
    ]
  },
  async redirects() {
    return [
      // Redirecciones 410 para las rutas de limpieza de canaletas
      ...[
        '/gutter-cleaning-denver',
        '/gutter-cleaning-parker',
        '/gutter-cleaning-castle-rock',
        '/gutter-cleaning-lone-tree',
        '/gutter-cleaning-highlands-ranch',
        '/gutter-cleaning-centennial',
        '/gutter-cleaning-central-park',
        '/gutter-cleaning-hilltop',
        '/gutter-cleaning-washington-park',
        '/gutter-cleaning-cherry-creek',
        '/gutter-cleaning-university-park',
        '/gutter-cleaning-highland',
        // Redirecciones 410 para las rutas de pressure washing
        '/pressure-washing-denver',
        '/pressure-washing-parker',
        '/pressure-washing-castle-rock',
        '/pressure-washing-lone-tree',
        '/pressure-washing-highlands-ranch',
        '/pressure-washing-centennial',
        '/pressure-washing-central-park',
        '/pressure-washing-hilltop',
        '/pressure-washing-washington-park',
        '/pressure-washing-cherry-creek',
        '/pressure-washing-university-park',
        '/pressure-washing-highland'
      ].map(path => ({
        source: path,
        destination: '/api/gone',
        permanent: false
      }))
    ];
  },
}

module.exports = nextConfig
