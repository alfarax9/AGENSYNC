import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { AnalyticsEvents } from "@/components/analytics/AnalyticsEvents";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Navbar } from "@/components/layout/Navbar";
import { MotionProvider } from "@/components/motion/MotionProvider";
import site from "@/content/site.json";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  // Only a fallback now; Apple devices render SF Pro and never need this file.
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  // Only badges and labels use it; preloading put it on the LCP critical path.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.defaultTitle, template: site.seo.titleTemplate },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.seo.defaultTitle,
    description: site.description,
    url: "/",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: site.seo.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-bg font-sans text-text-secondary">
        <a
          href="#main"
          className="sr-only rounded-full bg-accent px-5 py-2.5 text-text focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80]"
        >
          {site.skipLink}
        </a>
        <LenisProvider />
        <MotionProvider>
          <Navbar />
          <MobileNavigation />
          {children}
          <Footer />
        </MotionProvider>
        <AnalyticsEvents />
        <Analytics />
      </body>
    </html>
  );
}
