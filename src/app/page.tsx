import AIModels from '@/Componant/AIModels'
import CTA from '@/Componant/CTA'
import FAQ from '@/Componant/FAQ'
import Features from '@/Componant/Features'
import Hero from '@/Componant/Hero'
import Pricing from '@/Componant/Pricing'
import ProductPreview from '@/Componant/ProductPreview'
import Testimonials from '@/Componant/Testimonials'
import WhyChooseUs from '@/Componant/WhyChooseUs'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <AIModels></AIModels>
      <ProductPreview></ProductPreview>
      <WhyChooseUs></WhyChooseUs>
      <Pricing></Pricing>
      <FAQ></FAQ>
      <Testimonials></Testimonials>
      <CTA></CTA>
    </div>
  )
}
