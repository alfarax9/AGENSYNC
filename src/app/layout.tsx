import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import site from "@/content/site.json";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-bg font-sans text-text-secondary">
        <a
          href="#main"
          className="sr-only rounded-full bg-accent px-5 py-2.5 text-text focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60"
        >
          {site.skipLink}
        </a>
        <LenisProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
