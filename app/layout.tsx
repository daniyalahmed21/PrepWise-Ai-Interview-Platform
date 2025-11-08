import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const Monasans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const geistMono = Mona_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepView",
  description: "An AI-powered Interview simulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${Monasans.className} antialiased`}>{children}</body>
    </html>
  );
}