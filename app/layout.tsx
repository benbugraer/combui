import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Navigation from "@/components/Navigation/Navigation";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CombUI | Modern UI Component Library",
  description:
    "A modern UI component library for Next.js applications with beautiful, responsive and accessible components",
  openGraph: {
    title: "CombUI | Modern UI Component Library",
    description:
      "A modern UI component library for Next.js applications with beautiful, responsive and accessible components",
    type: "website",
    url: "https://combui.com",
    siteName: "CombUI",
  },
  alternates: {
    canonical: "https://combui.com",
  },
  metadataBase: new URL("https://combui.com"),
  keywords: [
    "UI library",
    "React components",
    "Next.js",
    "UI framework",
    "Component library",
  ],
  robots: {
    index: true,
    follow: true,
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
        className={clsx(
          "antialiased bg-contrast text-primary",
          outfit.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip mx-auto px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
