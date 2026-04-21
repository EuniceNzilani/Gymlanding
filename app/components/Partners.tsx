"use client"

import { useEffect, useState } from 'react'
import { AnimatedSection, AnimatedItem } from './AnimatedSection'

export default function Partners() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const logoSrc = '/gym%20logo.webp'

  return (
    <section id="partners" style={{background: '#e5e7eb', padding: isMobile ? '1.5rem 1rem' : '2rem 4rem', width: '100%', boxSizing: 'border-box'}}>
      <div style={{width: '100%', maxWidth: 1200, margin: '0 auto', textAlign: 'center'}}>
        <AnimatedSection direction="up" delay={0}>
          <div>
            <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: 800}}>Our Partners</h2>
            <p style={{color: '#64748b', marginBottom: '1.25rem'}}>Trusted by gyms and studios across the region.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.1}>
        <div style={{display: 'flex', gap: isMobile ? '1rem' : '2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <AnimatedItem delay={0.15}>
          <div style={{width: isMobile ? 200 : 320, height: isMobile ? 120 : 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', borderRadius: 8}}>
            <img src="/K%20%26%20Q%20logo.jpg" alt="Partner logo" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply'}} />
          </div>
          </AnimatedItem>

          <AnimatedItem delay={0.25}>
          <div style={{width: isMobile ? 160 : 240, height: isMobile ? 80 : 120, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', borderRadius: 8}}>
            <img src={logoSrc} alt="Partner logo" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply'}} />
          </div>
          </AnimatedItem>

          <AnimatedItem delay={0.35}>
          <div style={{width: isMobile ? 160 : 240, height: isMobile ? 80 : 120, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', borderRadius: 8}}>
            <img src={logoSrc} alt="Partner logo" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply'}} />
          </div>
          </AnimatedItem>
        </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
