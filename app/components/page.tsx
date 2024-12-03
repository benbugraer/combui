import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CombUI | Components",
  description:
    "Explore our collection of reusable UI components for modern web applications",
  openGraph: {
    title: "CombUI | Components",
    description:
      "Explore our collection of reusable UI components for modern web applications",
    type: "website",
    url: "https://www.combui.tech/components",
    siteName: "CombUI",
  },
  alternates: {
    canonical: "https://www.combui.tech/components",
  },
};

export default function ComponentsPage() {
  return <div>Components Page</div>;
}
