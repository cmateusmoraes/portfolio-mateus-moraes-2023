import "./reset.css";
import "../styles/globals.scss";

import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { metadataInfo } from "@/data/metadata";

const space = Space_Grotesk({ subsets: ["latin"] });

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
