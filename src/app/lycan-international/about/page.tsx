import Container from '@/components/About/Container'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lycan International",
  description: "Learn about Lycan International’s mission, vision, and values.",
  openGraph: {
    title: "About | Lycan International",
    description: "Learn about Lycan International’s mission, vision, and values.",
    url: "https://www.lycaninternational.com/lycan-international/about",
  },
};

export default function page() {
  
  return (
    <Container />
  )
}
