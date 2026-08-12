import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter, Permanent_Marker } from 'next/font/google'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '25 TWO LIFE — More Than Your Sentence',
  description:
    'They gave me 25. I chose life. 25 TWO LIFE is a lifestyle, streetwear and media brand built on transformation, second chances and the discipline to rebuild.',
  generator: 'v0.app',
  keywords: [
    '25 TWO LIFE',
    'second chances',
    'streetwear',
    'workwear',
    'transformation',
    'reentry',
    'resilience',
  ],
  openGraph: {
    title: '25 TWO LIFE — More Than Your Sentence',
    description:
      'A story of consequence, growth, discipline, art and second chances. This is your 2nd life.',
    type: 'website',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${anton.variable} ${inter.variable} ${permanentMarker.variable}`}
    >
      <body className="antialiased grain">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
