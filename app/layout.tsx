import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Are We So Back? | Real-time S&P 500 Market Status",
  description:
    "Check if we're so back based on the S&P 500 market performance. Get real-time updates on market trends and share with friends.",
  keywords:
    "S&P 500, stock market, market status, market trends, share market status",
  openGraph: {
    title: "Are We So Back?",
    description: "Find out if we are so back based on the stock market",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Are We So Back?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Are We So Back?",
    description: "Find out if we are so back based on the stock market",
    images: ["/api/og"],
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
