import Footer from "@/components/Footer";
import HubFloatingButtons from "@/components/HubFloatingButtons";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Elite Salón | Maestría Capilar en San Salvador de Jujuy",
    template: "%s | Elite Salón",
  },
  description:
    "Peluquería boutique y centro de estética de lujo en el centro de Jujuy. Especialistas en salud capilar, colorimetría avanzada, manicura y maquillaje HD.",
  keywords: [
    "peluquería San Salvador de Jujuy",
    "estética Jujuy",
    "balayage Jujuy",
    "botox capilar Jujuy",
    "manicura profesional Jujuy",
    "Elite Salón",
  ],
  authors: [{ name: "Elite Salón" }],
  creator: "Elite Salón",
  publisher: "Elite Salón",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "",
    siteName: "Elite Salón",
    title: "Elite Salón | Estética de Lujo en Jujuy",
    description:
      "Revela tu verdadero ser con nuestros protocolos de salud capilar y diseño de autor.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Salón Jujuy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Elite Salón",
    image: "https://estilo-belleza-elixir.com/assets/og-image.jpg",
    description:
      "Centro de estética y peluquería de lujo en San Salvador de Jujuy.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Centro Cívico",
      addressLocality: "San Salvador de Jujuy",
      addressRegion: "Jujuy",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -24.1858,
      longitude: -65.2995,
    },
    telephone: "+543880000000",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$$",
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-black antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <HubFloatingButtons />
      </body>
    </html>
  );
}
