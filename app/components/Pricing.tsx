"use client"

import { useEffect, useState } from 'react'
import { AnimatedSection, AnimatedItem } from './AnimatedSection'

export default function Pricing() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="pricing" style={{background: '#ffffff62', padding: '3.5rem 1rem', position: 'relative', overflow: 'hidden', width: '100%', boxSizing: 'border-box'}}>

      <div style={{maxWidth: 1400, margin: '0 auto', background: '#f0a961cc', padding: '2rem', borderRadius: 15, textAlign: 'center', position: 'relative', zIndex: 1}}>
        <div style={{width: '100%', maxWidth: 1200, margin: '0 auto'}}>
        <AnimatedSection direction="up" delay={0}>
          <div>
            <h2 style={{fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2rem)' : '2rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: 800}}>Pricing</h2>
            <p style={{color: '#64748b', marginBottom: '2rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>Simple plans for gyms of all sizes — scale as you grow.</p>
          </div>
        </AnimatedSection>

        <div style={{display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '1rem' : '1.25rem', alignItems: 'stretch', width: '100%', boxSizing: 'border-box'}}>
          <AnimatedItem delay={0.1}>
            <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: 12, padding: isMobile ? '1.25rem' : '1.5rem', boxShadow: '0 15px 35px rgba(2,6,23,0.12)', border: '1px solid rgba(255,255,255,0.16)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220, position: 'relative'}}>
              <div style={{fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>Under 50 customers</div>
              <div style={{fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem'}}>Ksh 100<span style={{fontSize: isMobile ? '0.65rem' : '0.75rem', fontWeight:700}}> / customer / month</span></div>
              <ul style={{color: '#475569', textAlign: 'left', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
                <li style={{marginBottom: '0.5rem'}}>All core features</li>
                <li style={{marginBottom: '0.5rem'}}>Basic onboarding</li>
                <li>Email support</li>
              </ul>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.2}>
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: 12, padding: isMobile ? '1.25rem' : '1.5rem', boxShadow: '0 15px 35px rgba(2,6,23,0.12)', border: '1px solid rgba(255,255,255,0.16)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220, position: 'relative'}}>
            <div style={{fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>50–100 customers</div>
            <div style={{fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem'}}>Ksh 80<span style={{fontSize: isMobile ? '0.65rem' : '0.75rem', fontWeight:700}}> / customer / month</span></div>
            <ul style={{color: '#475569', textAlign: 'left', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
              <li style={{marginBottom: '0.5rem'}}>Everything in lower tier</li>
              <li style={{marginBottom: '0.5rem'}}>Priority onboarding</li>
              <li>24/7 Priority support</li>
            </ul>
            
          </div>
          </AnimatedItem>

          <AnimatedItem delay={0.3}>
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: 12, padding: isMobile ? '1.25rem' : '1.5rem', boxShadow: '0 15px 35px rgba(2,6,23,0.12)', border: '1px solid rgba(255,255,255,0.16)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220, position: 'relative'}}>
            <div style={{fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>100–200 customers</div>
            <div style={{fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem'}}>Ksh 70<span style={{fontSize: isMobile ? '0.65rem' : '0.75rem', fontWeight:700}}> / customer / month</span></div>
            <ul style={{color: '#475569', textAlign: 'left', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
              <li style={{marginBottom: '0.5rem'}}>Dedicated onboarding specialist</li>
              <li style={{marginBottom: '0.5rem'}}>Integration support</li>
              <li>Phone + email support</li>
            </ul>
            
          </div>
          </AnimatedItem>

          <AnimatedItem delay={0.4}>
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: 12, padding: isMobile ? '1.25rem' : '1.5rem', boxShadow: '0 15px 35px rgba(2,6,23,0.12)', border: '1px solid rgba(255,255,255,0.16)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220, position: 'relative'}}>
            <div style={{fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>200–500 customers</div>
            <div style={{fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem'}}>Ksh 60<span style={{fontSize: isMobile ? '0.65rem' : '0.75rem', fontWeight:700}}> / customer / month</span></div>
            <ul style={{color: '#475569', textAlign: 'left', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
              <li style={{marginBottom: '0.5rem'}}>24/7 Priority support</li>
              <li style={{marginBottom: '0.5rem'}}>Advanced integrations</li>
            </ul>
          </div>
          </AnimatedItem>

          <AnimatedItem delay={0.5}>
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: 12, padding: isMobile ? '1.25rem' : '1.5rem', boxShadow: '0 15px 35px rgba(2,6,23,0.12)', border: '1px solid rgba(255,255,255,0.16)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220, position: 'relative'}}>
            <div style={{fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>500+ customers</div>
            <div style={{fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem'}}>Custom</div>
            <ul style={{color: '#475569', textAlign: 'left', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
              <li style={{marginBottom: '0.5rem'}}>24/7 Enterprise support</li>
              <li style={{marginBottom: '0.5rem'}}>Custom contract & pricing</li>
              <li>White-glove support</li>
            </ul>
          </div>
          </AnimatedItem>
          
          <AnimatedItem delay={0.6}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: isMobile ? 12 : 0, gridColumn: isMobile ? '1 / -1' : 'auto'}}>
            <button style={{background: '#CC5500', color: '#fff', border: 'none', padding: '0.75rem 1.25rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: isMobile ? '0.95rem' : '1rem'}}>Get Started</button>
          </div>
          </AnimatedItem>
        </div>
        </div>
      </div>
    </section>
  )
}
