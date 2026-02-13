import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "La Ruta Padel Club Nogales";
const DEFAULT_DESC = "Club de pádel en Nogales. Tres canchas full panorámicas, cafetería, amplio estacionamiento y clases de pádel. Reservá tu cancha en Pucalan Parcela 27.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://larutapadel.cl"),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,
  keywords: ["pádel", "padel", "Nogales", "canchas", "club", "La Ruta", "reservas", "clases de pádel", "Pucalan"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DEFAULT_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESC,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "La Ruta Padel Club Nogales",
              description: "Club de pádel en Nogales. Tres canchas full panorámicas, cafetería, amplio estacionamiento y clases de pádel.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nogales",
                addressRegion: "Valparaiso",
                streetAddress: "Pucalan Parcela 27",
              },
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://larutapadel.cl",
              telephone: "+56963223271",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Cafetería", value: true },
                { "@type": "LocationFeatureSpecification", name: "Estacionamiento", value: true },
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var k='larutapadel-theme';var v=localStorage.getItem(k);if(v==='dark')document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');})();`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-w-0 overflow-x-hidden bg-zinc-100 text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-100 [padding-left:env(safe-area-inset-left)] [padding-right:env(safe-area-inset-right)]`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
