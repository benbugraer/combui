import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Navigation from "@/components/Sections/Navigation/Navigation";
import { ThemeProvider } from "next-themes";
import { RootProvider } from "fumadocs-ui/provider";

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
    url: "https://www.combui.tech/",
    siteName: "CombUI",
  },
  alternates: {
    canonical: "https://www.combui.tech/",
  },
  metadataBase: new URL("https://www.combui.tech/"),
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
        <RootProvider>
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
        </RootProvider>
      </body>
    </html>
  );
}
