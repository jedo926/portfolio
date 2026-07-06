import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Abdulmajeed Tayyar — Full-Stack & AI Engineer",
  description:
    "Full-stack and AI engineer shipping production systems end to end: enterprise RAG at Trend Micro, client work for Al-Futtaim and Saudi Arabia's Ministry of Education, and a NASA Space Apps ML project.",
  openGraph: {
    title: "Abdulmajeed Tayyar — Full-Stack & AI Engineer",
    description:
      "RAG platforms, AI agents, computer vision and full-stack products — shipped to production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
