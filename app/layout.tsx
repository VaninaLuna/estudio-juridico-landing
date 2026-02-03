import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

// Base URL del sitio (para SEO: OG, canonical). Definir NEXT_PUBLIC_SITE_URL en .env en producción.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pozzattoypezzutti.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pozzatto y Pezzutti Asociados | Estudio Jurídico en Mendoza",
    template: "%s | Pozzatto y Pezzutti Asociados",
  },
  description:
    "Estudio jurídico en Mendoza. Asesoramiento en derecho societario, laboral, MASC, ejecuciones, contratos e inmobiliario. Excelencia legal con visión integral. Contacto: 9 de Julio 672.",
  keywords: [
    "estudio jurídico Mendoza",
    "abogados Mendoza",
    "derecho societario",
    "derecho laboral",
    "MASC mediación",
    "ejecuciones y cobranzas",
    "derecho inmobiliario Mendoza",
    "Pozzatto Pezzutti",
    "asesoramiento legal",
  ],
  authors: [{ name: "Pozzatto y Pezzutti Asociados" }],
  creator: "Pozzatto y Pezzutti Asociados",
  publisher: "Pozzatto y Pezzutti Asociados",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Pozzatto y Pezzutti Asociados",
    title: "Pozzatto y Pezzutti Asociados | Estudio Jurídico en Mendoza",
    description:
      "Estudio jurídico en Mendoza. Asesoramiento integral en derecho societario, laboral, MASC, ejecuciones, contratos e inmobiliario.",
    images: [
      {
        url: "/img/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pozzatto y Pezzutti Asociados - Estudio Jurídico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pozzatto y Pezzutti Asociados | Estudio Jurídico en Mendoza",
    description: "Estudio jurídico en Mendoza. Excelencia legal con visión integral.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: "/favicon.ico",
  },
  category: "legal",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Pozzatto y Pezzutti Asociados",
  description:
    "Estudio jurídico en Mendoza. Asesoramiento en derecho societario, laboral, MASC, ejecuciones, contratos e inmobiliario.",
  url: siteUrl,
  image: `${siteUrl}/img/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 de Julio 672, planta alta oficina 8",
    addressLocality: "Ciudad de Mendoza",
    addressRegion: "Mendoza",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -32.8895,
    longitude: -68.8458,
  },
  telephone: ["+54 261 509-5754", "+54 261 513-4316"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "18:00",
  },
  areaServed: { "@type": "City", name: "Mendoza", sameAs: "https://es.wikipedia.org/wiki/Mendoza_(Argentina)" },
  priceRange: "$$",
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
