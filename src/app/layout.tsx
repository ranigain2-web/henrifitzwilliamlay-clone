import type { Metadata } from "next";
import { Jost, Marcellus } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Henri Fitzwilliam-Lay - Interior Design Studio",
    template: "%s - Henri Fitzwilliam-Lay",
  },
  description:
    "Henri Fitzwilliam-Lay Ltd is a boutique interior design studio known for creating unique, timeless spaces that reflect the personalities of those who live in them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${marcellus.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
