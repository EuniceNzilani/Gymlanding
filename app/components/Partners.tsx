"use client"

import { useEffect, useState } from 'react'

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
    <section id="partners" style={{background: '#ffffff', padding: isMobile ? '1.5rem 1rem' : '2rem 4rem', width: '100%', boxSizing: 'border-box'}}>
      <div style={{width: '100%', maxWidth: 1200, margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: 800}}>Our Partners</h2>
        <p style={{color: '#64748b', marginBottom: '1.25rem'}}>Trusted by gyms and studios across the region.</p>

        <div style={{display: 'flex', gap: isMobile ? '0.75rem' : '1.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style={{width: isMobile ? 120 : 160, height: isMobile ? 60 : 80, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', borderRadius: 8}}>
            <img src={logoSrc} alt="Partner logo" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
          </div>

          <div style={{width: isMobile ? 120 : 160, height: isMobile ? 60 : 80, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', borderRadius: 8}}>
            <img src={logoSrc} alt="Partner logo" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
          </div>

          <div style={{width: isMobile ? 120 : 160, height: isMobile ? 60 : 80, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', borderRadius: 8}}>
            <img src={logoSrc} alt="Partner logo" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
          </div>
        </div>
      </div>
    </section>
  )
}
