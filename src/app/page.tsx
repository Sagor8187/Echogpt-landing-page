import AIModels from '@/Componant/AIModels'
import Features from '@/Componant/Features'
import Hero from '@/Componant/Hero'
import ProductPreview from '@/Componant/ProductPreview'
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
    </div>
  )
}
