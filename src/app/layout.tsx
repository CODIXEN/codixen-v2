import type { Metadata, Viewport } from "next";
import { Besley, Schibsted_Grotesk, Geist_Mono } from "next/font/google";
import { CalProvider } from "@/components/cal-provider";
import "./globals.css";

const besley = Besley({
  variable: "--font-besley",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://codixen.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CODIXEN — Custom Software, SaaS & AI Development Agency",
    template: "%s · CODIXEN",
  },
  description:
    "CODIXEN is a premium software development agency building custom web apps, SaaS platforms, and AI-powered products for startups and enterprises. Next.js, Laravel, and AI engineering done right.",
  keywords: [
    "software development agency",
    "SaaS development",
    "AI application development",
    "Next.js agency",
    "Laravel development",
    "custom web applications",
    "API development",
    "mobile app development",
    "UI/UX design",
  ],
  authors: [{ name: "CODIXEN" }],
  creator: "CODIXEN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "CODIXEN",
    title: "CODIXEN — Custom Software, SaaS & AI Development Agency",
    description:
      "We design and engineer premium software products — custom web apps, SaaS platforms, and AI systems that ship fast and scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODIXEN — Custom Software, SaaS & AI Development Agency",
    description:
      "Premium software agency for startups and enterprises. Web apps, SaaS, and AI products engineered to scale.",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },

  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: "/iconicon.svg", type: "image/svg+xml" }],
    shortcut: "/iconicon.svg",
    apple: "/iconicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#e8f3f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${besley.variable} ${schibsted.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-fg">
        <CalProvider />
        {children}
      </body>
    </html>
  );
}
