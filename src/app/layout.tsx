import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider"

import { ClerkProvider} from '@clerk/nextjs'


const font = DM_Sans({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Agently",
  description: "Automate your work with Agently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/sign-in"}>
      <html lang="en">
        <body className={font.className}>
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
