import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VyorAI Platform',
    short_name: 'VyorAI',
    description: 'Next-Gen AI Virtual Try-On and Developer Infrastructure built for absolute precision and premium scale.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#10B981',
    icons: [
      {
        src: '/LOGO.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
