
import Container from '@/components/TeamSection/Container'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Team | Lycan International",
  description:
    "Meet the Lycan International executive team — a group of visionaries leading innovation, growth, and community development.",
  openGraph: {
    title: "Executive Team | Lycan International",
    description:
      "Discover the leaders behind Lycan International who drive excellence and strategic growth across all initiatives.",
    url: "https://www.lycaninternational.com/executive",
  },
};

export default function page() {
  return (
    <Container />
  )
}
