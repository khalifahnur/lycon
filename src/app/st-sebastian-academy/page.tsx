import Container from '@/components/AcademySection/Container'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "St. Sebastian Academy | Lycan International",
  description:
    "Explore St. Sebastian Academy — an educational initiative by Lycan International focused on nurturing young talent and academic excellence.",
  openGraph: {
    title: "St. Sebastian Academy | Lycan International",
    description:
      "Learn more about St. Sebastian Academy, Lycan International’s commitment to education and youth empowerment.",
    url: "https://www.lycaninternational.com/st-sebastian-academy",
  },
};

export default function page() {
  return (
    <Container />
  )
}
