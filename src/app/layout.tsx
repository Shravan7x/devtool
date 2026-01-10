import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-Schibsted_Grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-Martian_Mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevTool",
  description: "The Hub for every developer Event you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
