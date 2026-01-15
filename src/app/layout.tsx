// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Doe | Full Stack Developer Portfolio',
  description: 'A modern portfolio website showcasing projects, skills, and contact information.',
  keywords: ['developer', 'portfolio', 'web development', 'react', 'nextjs'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    title: 'John Doe | Full Stack Developer',
    description: 'Modern portfolio website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'John Doe Portfolio',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
