import "../styles/globals.scss";
import "./reset.css";

import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { metadataInfo } from "@/data/metadata";

const space = Space_Grotesk({ subsets: ["latin"], adjustFontFallback: false });

export const metadata = metadataInfo;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={space.className}>
        <Header />

        {children}

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
