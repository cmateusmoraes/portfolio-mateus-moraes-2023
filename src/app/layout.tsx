import "./reset.css";
import "../styles/globals.scss";

import { Space_Grotesk } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Mateus Moraes - Desenvolvedor Front-End",
  description:
    "Desenvolvedor especialista front-end com mais de 20 anos de experiência | React, Javascript, Next.js, TypescriptHTML, CSS ",
  openGraph: {
    title: "Mateus Moraes - Desenvolvedor Front-End",
    description:
      "Desenvolvedor especialista front-end com mais de 20 anos de experiência | React, Javascript, Next.js, Typescript HTML, CSS ",
    url: "https://${process.env.VERCEL_URL}",
    siteName: "Mateus Moraes - Portfolio",
    images: [
      {
        url: "https://${process.env.VERCEL_URL}/image/jobs/portfolio.jpg",
        width: 800,
        height: 546,
      },
    ],
    locale: "pt_BR",
    type: "website",
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
      </body>
    </html>
  );
}
