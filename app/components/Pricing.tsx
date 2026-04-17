"use client"

import { useEffect, useState } from 'react'

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
    <section id="pricing" style={{background: '#ffd9b3', padding: isMobile ? '3rem 1rem 6rem' : '3rem 4rem 6rem', position: 'relative', overflow: 'hidden'}}>

      <div style={{width: '100%', maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1}}>
        <h2 style={{fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2rem)' : '2rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: 800}}>Pricing</h2>
        <p style={{color: '#64748b', marginBottom: '2rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>Simple plans for gyms of all sizes — scale as you grow.</p>

        <div style={{display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: isMobile ? '1rem' : '1.25rem', alignItems: 'stretch'}}>
          <div style={{background: '#fff', borderRadius: 12, padding: isMobile ? '1.25rem' : '1.5rem', boxShadow: '0 6px 20px rgba(2,6,23,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220}}>
            <div style={{fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>Under 50 customers</div>
            <div style={{fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem'}}>Ksh 100<span style={{fontSize: isMobile ? '0.65rem' : '0.75rem', fontWeight:700}}> / customer / month</span></div>
            <ul style={{color: '#475569', textAlign: 'left', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
              <li style={{marginBottom: '0.5rem'}}>All core features</li>
              <li style={{marginBottom: '0.5rem'}}>Basic onboarding</li>
              <li>Email support</li>
            </ul>
            <button style={{background: '#CC5500', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: isMobile ? '0.9rem' : '1rem'}}>Get Started</button>
          </div>

          <div style={{background: '#fff', borderRadius: 12, padding: isMobile ? '1.25rem' : '1.5rem', boxShadow: '0 6px 20px rgba(2,6,23,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220}}>
            <div style={{fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>50–100 customers</div>
            <div style={{fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem'}}>Ksh 80<span style={{fontSize: isMobile ? '0.65rem' : '0.75rem', fontWeight:700}}> / customer / month</span></div>
            <ul style={{color: '#475569', textAlign: 'left', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
              <li style={{marginBottom: '0.5rem'}}>Everything in lower tier</li>
              <li style={{marginBottom: '0.5rem'}}>Priority onboarding</li>
              <li>24/7 Priority support</li>
            </ul>
            <button style={{background: '#CC5500', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: isMobile ? '0.9rem' : '1rem'}}>Get Started</button>
          </div>

          <div style={{background: 'linear-gradient(180deg,#fff,#f7fdfc)', borderRadius: 12, padding: isMobile ? '1.25rem' : '1.5rem', boxShadow: '0 8px 28px rgba(2,6,23,0.08)', border: '1px solid rgba(6,182,212,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220}}>
            <div style={{fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>100–200 customers</div>
            <div style={{fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem'}}>Ksh 70<span style={{fontSize: isMobile ? '0.65rem' : '0.75rem', fontWeight:700}}> / customer / month</span></div>
            <ul style={{color: '#475569', textAlign: 'left', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
              <li style={{marginBottom: '0.5rem'}}>Dedicated onboarding specialist</li>
              <li style={{marginBottom: '0.5rem'}}>Integration support</li>
              <li>Phone + email support</li>
            </ul>
            <button style={{background: '#CC5500', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: isMobile ? '0.9rem' : '1rem'}}>Get Started</button>
          </div>

          <div style={{background: '#fff', borderRadius: 12, padding: isMobile ? '1.25rem' : '1.5rem', boxShadow: '0 6px 20px rgba(2,6,23,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220}}>
            <div style={{fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>200–500 customers</div>
            <div style={{fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem'}}>Ksh 60<span style={{fontSize: isMobile ? '0.65rem' : '0.75rem', fontWeight:700}}> / customer / month</span></div>
            <ul style={{color: '#475569', textAlign: 'left', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
              <li style={{marginBottom: '0.5rem'}}>24/7 Priority support</li>
              <li style={{marginBottom: '0.5rem'}}>Advanced integrations</li>
            </ul>
            <button style={{background: '#CC5500', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: isMobile ? '0.9rem' : '1rem'}}>Get Started</button>
          </div>

          <div style={{background: '#fff', borderRadius: 12, padding: isMobile ? '1.25rem' : '1.5rem', boxShadow: '0 6px 20px rgba(2,6,23,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220}}>
            <div style={{fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', fontSize: isMobile ? '0.95rem' : '1rem'}}>500+ customers</div>
            <div style={{fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem'}}>Custom</div>
            <ul style={{color: '#475569', textAlign: 'left', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
              <li style={{marginBottom: '0.5rem'}}>24/7 Enterprise support</li>
              <li style={{marginBottom: '0.5rem'}}>Custom contract & pricing</li>
              <li>White-glove support</li>
            </ul>
            <button style={{background: '#CC5500', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: isMobile ? '0.9rem' : '1rem'}}>Request Quote</button>
          </div>
        </div>
      </div>
    </section>
  )
}
