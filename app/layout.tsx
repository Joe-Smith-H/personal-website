import type { Metadata } from "next"
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
})

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mara Ellison — Portrait & Wedding Photographer",
  description:
    "Portrait and wedding photography in Portland, Oregon. Natural light, unhurried sessions, and photographs that look like the people in them.",
  openGraph: {
    title: "Mara Ellison — Portrait & Wedding Photographer",
    description:
      "Portrait and wedding photography in Portland, Oregon. Natural light, unhurried sessions, and photographs that look like the people in them.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
