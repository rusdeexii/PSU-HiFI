import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import icon from './favicon.png';  // นำเข้ารูปภาพ favicon ของคุณ

export const metadata: Metadata = {
  title: "PSU-HiFI",
  description: "HiFI Science PSU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={icon.src} type="image/png" />
      </head>
      <body style={{ fontFamily: 'Sarabun, sans-serif' }}>{children}</body>
    </html>
  );
}
