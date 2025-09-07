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

export const metadata: Metadata = {
  title: "EpixLabs – Your Tech Partner for Web, Mobile & Cloud",
  description:
    "EpixLabs builds scalable web apps, mobile solutions, and cloud infrastructure. Trusted engineering partner for startups and enterprises.",
  keywords: [
    "EpixLabs",
    "Web Development",
    "Mobile Apps",
    "Next.js",
    "DevOps",
    "Cloud",
  ],
  authors: [{ name: "EpixLabs" }],
  openGraph: {
    title: "EpixLabs – Web, Mobile & Cloud Development",
    description: "Trusted engineering partner for modern digital products.",
    url: "https://epixlabs.uz",
    siteName: "EpixLabs",
    images: [
      {
        url: "https://epixlabs.uz/union.png",
        width: 1200,
        height: 630,
        alt: "EpixLabs Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@epixlabs",
    title: "EpixLabs – Web, Mobile & Cloud Development",
    description:
      "EpixLabs builds scalable web, mobile, and cloud solutions with speed and reliability.",
    images: ["https://epixlabs.uz/union.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
