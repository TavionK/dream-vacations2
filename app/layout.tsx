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
    <html lang="en">
      <body className="min-h-screen max-w-5xl mx-auto flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
