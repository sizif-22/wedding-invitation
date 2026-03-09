import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import { Cinzel, Cormorant_Garamond, Jost } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Amr & Hend — Wedding Invitation",
  description:
    "You are joyfully invited to celebrate the wedding of Amr & Hend — Sunday, 5th April 2026",
  icons: {
    icon: "/WI.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${cormorant.variable} ${jost.variable}`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
