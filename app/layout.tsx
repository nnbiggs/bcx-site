import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyRegisterButton from "@/components/StickyRegisterButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bergen County Xpress | Youth Track & Field Club",
    template: "%s | Bergen County Xpress",
  },
  description: "Bergen County Xpress (BCX) is a premier youth track and field club dedicated to developing young athletes through expert coaching and comprehensive training programs.",
  keywords: ["track and field", "youth sports", "athletics", "Bergen County", "running", "track club"],
  authors: [{ name: "Bergen County Xpress" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bergencountyxpress.com",
    siteName: "Bergen County Xpress",
    title: "Bergen County Xpress | Youth Track & Field Club",
    description: "Premier youth track and field club in Bergen County",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bergen County Xpress | Youth Track & Field Club",
    description: "Premier youth track and field club in Bergen County",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyRegisterButton />
      </body>
    </html>
  );
}
