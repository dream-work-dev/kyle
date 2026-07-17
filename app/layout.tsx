import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Kyle Keller | Senior Software Engineer", template: "%s | Kyle Keller" },
  description: "Portfolio of Kyle Keller, a Chicago-based Senior Software Engineer specializing in full-stack products, frontend architecture, and API integrations.",
  openGraph: {
    title: "Kyle Keller | Senior Software Engineer",
    description: "Full-stack products, frontend architecture, and FinTech API integrations.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kyle Keller — Senior Software Engineer" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
