import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "Dream Vacations 2",
  description: "Description of your website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full max-w-3xl mx-auto flex flex-col items-center">
        {children}
        <Footer />
      </body>
    </html>
  );
}
