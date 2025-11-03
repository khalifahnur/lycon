import React from "react";
import Container from "@/components/ContactForm/Container";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Lycan International",
  description:
    "Get in touch with Lycan International. Fill out our contact form for inquiries, partnerships, or support — we’d love to hear from you.",
  openGraph: {
    title: "Contact Us | Lycan International",
    description:
      "Reach out to Lycan International through our contact form for questions, collaborations, or customer support.",
    url: "https://www.lycaninternational.com/contact",
  },
};

export default function page() {
  return <Container />;
}
