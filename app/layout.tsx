import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";

export const metadata: Metadata = {
  title: {
    default: "Msingi",
    template: "%s | Msingi",
  },
  description:
    "A structured digital learning platform supporting meaningful learning, practice and competency development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}