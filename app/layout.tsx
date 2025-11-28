import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "MelhorApostasEmPortugal | Top Casas de Apostas Licenciadas SRIJ 2025",
  description:
    "O guia definitivo de apostas desportivas em Portugal. Comparação independente das melhores casas de apostas licenciadas pelo SRIJ. Bónus exclusivos, análises detalhadas e apostas seguras.",
  generator: "v0.app",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MelhorApostasEmPortugal | Top Casas de Apostas 2025",
    description: "Descubra as melhores casas de apostas licenciadas em Portugal. Comparações, bónus e guias completos.",
    siteName: "MelhorApostasEmPortugal",
    locale: "pt_PT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="author" content="MelhorApostasEmPortugal" />
        <meta property="og:site_name" content="MelhorApostasEmPortugal - Comparador de Apostas" />
        <meta name="classification" content="Comparison Website" />
        <meta name="category" content="Sports Betting Comparison" />
        <meta
          name="disclaimer"
          content="Site de comparação independente. Não somos uma casa de apostas. Links para sites licenciados pelo SRIJ."
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
