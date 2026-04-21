import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://favicon-generator.top";

export const metadata: Metadata = {
  title: "Favicon Generator - Create Favicons from Text, Emoji or Image",
  description:
    "Free online favicon generator. Create favicons from text, emoji, or uploaded images. Download as ICO, PNG in all sizes (16x16 to 512x512). Get HTML meta tags for easy integration.",
  keywords: [
    "favicon generator",
    "favicon maker",
    "create favicon online",
    "favicon from text",
    "favicon from emoji",
    "ico generator",
    "website icon generator",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Favicon Generator - Create Favicons from Text, Emoji or Image",
    description:
      "Free online tool to generate favicons from text, emoji, or images. Download as ICO or PNG in multiple sizes.",
    url: siteUrl,
    siteName: "Favicon Generator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Favicon Generator - Create Favicons from Text, Emoji or Image",
    description:
      "Free online tool to generate favicons from text, emoji, or images. Download as ICO or PNG in multiple sizes.",
  },
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Favicon Generator",
    url: siteUrl,
    description:
      "Free online favicon generator. Create favicons from text, emoji, or uploaded images in multiple sizes.",
    applicationCategory: "DesignApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
