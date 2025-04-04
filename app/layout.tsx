import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const gibmPlexSans = IBM_Plex_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Coffee Connoisseur",
  description: "Discover your favorite local coffee shops!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gibmPlexSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
