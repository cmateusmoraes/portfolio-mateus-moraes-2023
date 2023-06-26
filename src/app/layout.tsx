import "./reset.css";
import "../styles/globals.scss";

import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Mateus Moraes - Desenvolvedor Front-End",
  description:
    "Desenvolvedor especialista front-end com mais de 20 anos de experiência | React, Javascript, Next.js, Typescript, HTML, CSS ",
  openGraph: {
    title: "Mateus Moraes - Desenvolvedor Front-End",
    description:
      "Desenvolvedor especialista front-end com mais de 20 anos de experiência | React, Javascript, Next.js, Typescript, HTML, CSS ",
    url: "https://mateus-moraes.vercel.app",
    siteName: "Mateus Moraes - Portfolio",
    images: [
      {
        url: "https://mateus-moraes.vercel.app/image/portfolio.jpg",
        width: 800,
        height: 546,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Moraes - Desenvolvedor Front-End",
    description:
      "Desenvolvedor especialista front-end com mais de 20 anos de experiência | React, Javascript, Next.js, Typescript, HTML, CSS ",
    creator: "@cmateusmoraes",
    creatorId: "1467726470533754880",
    images: ["https://mateus-moraes.vercel.app/image/portfolio.jpg"],
  },
};

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
