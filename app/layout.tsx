import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "José Valdés | Portfolio",
  description:
    "Software Developer & Data Engineer crafting digital systems and data-driven experiences.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-[system-ui] tracking-tighter">{children}</body>
    </html>
  );
}
