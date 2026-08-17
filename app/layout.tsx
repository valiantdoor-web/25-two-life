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
    '25 TWO LIFE is a mission-driven platform built on accountability, personal responsibility, transformation, discipline, service and the long work of rebuilding a life.',
  generator: 'v0.app',
  keywords: [
    '25 TWO LIFE',
    'second chances',
    'accountability',
    'transformation',
    'reentry',
    'personal responsibility',
    'service',
  ],
  openGraph: {
    title: '25 TWO LIFE — More Than Your Sentence',
    description:
      'The name comes from a 25-year firearm enhancement. The mission is about what came after: accountability, growth, discipline and service.',
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
