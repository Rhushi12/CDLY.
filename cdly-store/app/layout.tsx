import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CDLY | High-End Editorial Fashion",
  description: "Discover the new monochromatic aesthetic. Sharp lines, premium wools, and an uncompromising dedication to form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${notoSans.variable} ${spaceMono.variable} font-[family-name:var(--font-display)] antialiased`}
        suppressHydrationWarning
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

