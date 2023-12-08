import React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

import { Header } from "@/components/header";

import "../styles/globals.scss";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dog Spa",
  description: "Dog Spa app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
