import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tarun's portfolio",
  description: "modern portfolio with awesome animations",
};

// Lazy load ThemeProvider
const LazyThemeProvider = dynamic(() => import('./Components/theme-provider').then(mod => mod.ThemeProvider), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </LazyThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
