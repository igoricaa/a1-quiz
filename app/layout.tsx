import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { KioskWrapper } from "@/components/KioskWrapper";

const a1Sans = localFont({
  src: [
    {
      path: "../public/fonts/A1Sans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/A1Sans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/A1Sans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-a1-sans",
});

const a1Serif = localFont({
  src: [
    {
      path: "../public/fonts/A1Serif-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/A1Serif-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/A1Serif-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-a1-serif",
});

export const metadata: Metadata = {
  title: "A1 Quiz - Napravi Pomak",
  description:
    "Otkrij svoj AI data personality tip na A1 Data Science konferenciji",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#eb140a",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-RS">
      <body className={`${a1Sans.variable} ${a1Serif.variable} antialiased`}>
        <KioskWrapper>{children}</KioskWrapper>
      </body>
    </html>
  );
}
