import Landing from "@/components/landing";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Lycan International",
  description: "Learn about Lycan International’s mission, vision, and values.",
  openGraph: {
    title: "Home | Lycan International",
    description: "Learn about Lycan International’s mission, vision, and values.",
    url: "https://www.lycaninternational.com/about",
  },
};

export default function Home() {
  return <Landing />;
}
