import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PopupList } from "@/components/PopupList";
import {
  ClerkProvider,

} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme Inc.",
  description: "description",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en">
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />

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
    </ClerkProvider>
  );
}
