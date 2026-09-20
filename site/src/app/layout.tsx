import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI/UX BOOST",
  description: "Pixel-perfect. Fully responsive. Zero AI slop. A Claude Code skill for faithful web implementation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
