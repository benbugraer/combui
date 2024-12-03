import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CombUI | Components",
  description:
    "Discover CombUI's extensive library of reusable UI components designed to streamline your web development process. Enhance your projects with our modern, efficient, and customizable components.",
  openGraph: {
    title: "CombUI | Components",
    description:
      "Discover CombUI's extensive library of reusable UI components designed to streamline your web development process. Enhance your projects with our modern, efficient, and customizable components.",
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
