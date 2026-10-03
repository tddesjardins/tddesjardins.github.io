import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tddesjardins.github.io"),
  title: "Tyler Desjardins | Scientist & Astronomer",
  description:
    "Tyler Desjardins, Ph.D. — Senior Staff Scientist at the Space Telescope Science Institute, working on the Nancy Grace Roman Space Telescope, astronomical calibration, and extragalactic science.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tyler Desjardins | Scientist & Astronomer",
    description:
      "Building the tools to explore our universe. Roman Space Telescope, Hubble, and extragalactic astronomy.",
    url: "/",
    type: "website",
    images: [
      { url: "/images/roman_deep.webp", alt: "A rich field of distant galaxies" },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
