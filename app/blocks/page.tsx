import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CombUI | Blocks",
  description:
    "Discover pre-built UI blocks and patterns to accelerate your development process",
  openGraph: {
    title: "CombUI | Blocks",
    description:
      "Discover pre-built UI blocks and patterns to accelerate your development process",
    type: "website",
    url: "https://combui.com/blocks",
    siteName: "CombUI",
  },
  alternates: {
    canonical: "https://combui.com/blocks",
  },
};

export default function BlocksPage() {
  return <div>Blocks</div>;
}
