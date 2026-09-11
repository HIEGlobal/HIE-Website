import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HIE Global | Empowering Enterprise Growth & Strategic Excellence",
  description:
    "HIE Global is a premier business organization delivering world-class strategic advisory, global operations acceleration, and enterprise innovation across international markets.",
  keywords: [
    "HIE Global",
    "Business Organization",
    "Enterprise Advisory",
    "Global Trade",
    "Strategic Operations",
    "Corporate Governance",
  ],
  authors: [{ name: "HIE Global" }],
  openGraph: {
    title: "HIE Global | Business Organization & Global Advisory",
    description:
      "Empowering enterprises through cross-border strategy, operational excellence, and transformative growth solutions.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
