import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Chop House | Premium Barbershop in Tulsa, Oklahoma",
  description:
    "Luxury barbershop experience in Tulsa with elite barbers, sharp fades, braids, beard trims, hot towel shaves, and walk-in friendly service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
