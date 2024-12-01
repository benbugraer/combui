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
    url: "https://combui.com/components",
    siteName: "CombUI",
  },
  alternates: {
    canonical: "https://combui.com/components",
  },
};

export default function ComponentsPage() {
  return <div>Components Page</div>;
}
