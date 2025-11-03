import Container from '@/components/ParkSection/Container'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "St. Sebastian Park | Lycan International",
  description:
    "Discover St. Sebastian Park — a Lycan International community project promoting recreation, environmental conservation, and social engagement.",
  openGraph: {
    title: "St. Sebastian Park | Lycan International",
    description:
      "Learn about St. Sebastian Park, Lycan International’s initiative for sustainable community spaces and environmental well-being.",
    url: "https://www.lycaninternational.com/st-sebastian-park",
  },
};

export default function page() {
  return (
    <Container />
  )
}
