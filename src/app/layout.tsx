import "./reset.css";
import "../styles/globals.scss";

import { Space_Grotesk } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "MateusMoraes - Desenvolvedor Front-End",
  description:
    "Desenvolvedor especialista front-end com mais de 20 anos de experiência.",
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
