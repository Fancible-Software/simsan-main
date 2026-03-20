import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Simsan Fraser Maintenance",
  description: "Simsan Fraser Maintenance Ltd provides reliable exterior cleaning and property maintenance for homeowners who value quality and care.",
  icons: {
    icon: "/icons/logo.svg",
    shortcut: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased`}
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        suppressHydrationWarning
      >
        <AppRouterCacheProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
