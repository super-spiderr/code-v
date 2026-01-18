import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend, Courier_Prime } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier",
});

export const metadata: Metadata = {
  title: "Project Code-V",
  description: "Creative Developer Portfolio",
};

import { ConstructionBanner, Marquee, Gatekeeper } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${courierPrime.variable} antialiased`}
      >
        <Gatekeeper>
          <div className="fixed top-0 left-0 w-full z-[150] bg-emerald-500/10 backdrop-blur-md border-b border-emerald-500/20 py-1.5 flex overflow-hidden">
            <Marquee
              text="[ STATUS: SYSTEM_UPDATE_PENDING // CONNECTION_STABLE // SECTOR_V_ACTIVE // AUTH_VERIFIED ]"
              speed={30}
              className="text-[8px] font-mono font-bold text-emerald-400/80 uppercase tracking-[0.4em]"
            />
          </div>
          {children}
          <ConstructionBanner />
        </Gatekeeper>
      </body>
    </html>
  );
}
