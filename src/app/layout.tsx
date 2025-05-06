import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { ClientToast } from "@/components/ClientToast";
import "./globals.css";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import Footer from "@/components/Footer";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { LoadAds } from "@/components/LoadAds";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MadLetters – A to Z Medical Quiz Game",
  description:
    "Guess medical terms from A to Z! MadLetters is a fun and educational quiz game designed for healthcare enthusiasts, students, and professionals.",
  keywords: [
    "MadLetters",
    "medical quiz",
    "quiz app",
    "alphabet quiz",
    "Pasapalabra game",
    "health education",
    "medical students",
    "letter-based game",
    "guess the word",
  ],
  openGraph: {
    title: "MadLetters – A to Z Medical Quiz Game",
    description:
      "Play and learn medical terms in this unique letter-based quiz game. How many can you guess from A to Z?",
    url: "https://madletters.com",
    siteName: "MadLetters",
    images: [
      {
        url: "https://madletters.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "MadLetters Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MadLetters – A to Z Medical Quiz Game",
    description:
      "Play and learn medical terms in this fun and challenging alphabet quiz game.",
    images: ["https://madletters.com/og-image.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userId = (await cookies()).get("userId")?.value;
  const userName = `User${Math.floor(1000 + Math.random() * 9000)}`;
  const dbUser = await prisma.user.upsert({
    where: { id: userId },
    update: {},
    create: {
      userPoint: 0,
      id: userId,
      userName: userName,
    },
  });

  const finalUserName = dbUser.userName;

  return (
    <html lang="en" className="w-full h-full overflow-x-hidden ">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased w-full h-full bg-amber-50/25 flex flex-col`}
      >
        <CookieConsentBanner />
        <LoadAds />
        <Toaster position="top-center" reverseOrder={true} />
        <ClientToast name={finalUserName} />
        <header className="w-full">
          <Navbar />
        </header>
        <div className="flex-1">{children}</div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
