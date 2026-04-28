"use client"

import { AnimatedSection, AnimatedItem } from './AnimatedSection'

export default function Partners() {
  return (
    <section id="partners" className="bg-gray-200 p-6 md:p-16 w-full box-border">
      <div className="w-full max-w-6xl mx-auto text-center">
        <AnimatedSection direction="up" delay={0}>
          <div>
            <h2 className="text-xl md:text-2xl mb-2 text-gray-900 font-extrabold">Our Partners</h2>
            <p className="text-gray-600 mb-5">Trusted by gyms and studios across the region.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.1}>
        <div className="flex gap-4 md:gap-8 justify-center items-center flex-wrap">
          <AnimatedItem delay={0.15}>
          <div className="w-48 md:w-80 h-28 md:h-40 flex items-center justify-center bg-transparent rounded-lg">
            <img src="/K%20%26%20Q%20logo.jpg" alt="Partner logo" className="max-w-full max-h-full object-contain mix-blend-multiply" />
          </div>
          </AnimatedItem>
        </div>
        </AnimatedSection>
      </div>
    </section>
  )
}