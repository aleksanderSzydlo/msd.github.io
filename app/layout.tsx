import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "MSD Architekci – Pracownia Architektoniczna",
  description:
    "MSD ARCHITEKCI Sp. z o.o. – pracownia projektowa założona w 2014 roku. Projekty indywidualne, adaptacje, analizy działek. Sosnowiec.",
  keywords:
    "architekt, pracownia architektoniczna, projekt domu, Sosnowiec, MSD Architekci",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
