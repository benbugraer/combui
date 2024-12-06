import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CombUI | Blocks",
  description:
    "Discover a wide range of pre-built UI blocks and patterns to accelerate your development and improve your projects. Perfect for developers looking to save time and enhance their applications.",
  openGraph: {
    title: "CombUI | Blocks",
    description:
      "Discover a wide range of pre-built UI blocks and patterns to accelerate your development and improve your projects. Perfect for developers looking to save time and enhance their applications.",
    type: "website",
    url: "https://www.combui.tech/blocks",
    siteName: "CombUI",
  },
  alternates: {
    canonical: "https://www.combui.tech/blocks",
  },
};

export default function BlocksPage() {
  return (
    <div>
      <h1>Blocks Page Here</h1>
    </div>
  );
}
