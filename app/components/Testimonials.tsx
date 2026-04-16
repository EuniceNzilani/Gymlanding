"use client"

import { useEffect, useState } from 'react'

export default function Testimonials() {
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
    <section id="testimonials" style={{background: '#ffd9b3', padding: isMobile ? '3rem 1rem 6rem' : '3rem 4rem 6rem'}}>
      <div style={{width: '100%', maxWidth: 1200, margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2rem)' : '2rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: 800}}>What Gym Owners Say</h2>
        <p style={{color: '#64748b', marginBottom: '2rem'}}>Real results from real businesses using M-Gym.</p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem'}}>
          <div style={{background: '#f8fafc', borderRadius: 12, padding: '1.25rem', textAlign: 'left'}}>
            <div style={{display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem'}}>
              <div style={{width: 48, height: 48, borderRadius: 12, background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700}}>AR</div>
              <div>
                <div style={{fontWeight: 800}}>Arjun R.</div>
                <div style={{fontSize: '0.85rem', color: '#94a3b8'}}>Owner, Peak Fitness</div>
              </div>
            </div>
            <p style={{color: '#334155', lineHeight: 1.6}}>
              “Since switching to M‑Gym our monthly revenue increased 28% — automation saved hours each week.”
            </p>
          </div>

          <div style={{background: '#f8fafc', borderRadius: 12, padding: '1.25rem', textAlign: 'left'}}>
            <div style={{display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem'}}>
              <div style={{width: 48, height: 48, borderRadius: 12, background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700}}>SM</div>
              <div>
                <div style={{fontWeight: 800}}>Sana M.</div>
                <div style={{fontSize: '0.85rem', color: '#94a3b8'}}>Manager, CoreClub</div>
              </div>
            </div>
            <p style={{color: '#334155', lineHeight: 1.6}}>
              “Member retention jumped after we started using the custom plans and in-app reminders. Game changer.”
            </p>
          </div>

          <div style={{background: '#f8fafc', borderRadius: 12, padding: '1.25rem', textAlign: 'left'}}>
            <div style={{display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem'}}>
              <div style={{width: 48, height: 48, borderRadius: 12, background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700}}>RK</div>
              <div>
                <div style={{fontWeight: 800}}>Rohit K.</div>
                <div style={{fontSize: '0.85rem', color: '#94a3b8'}}>Founder, LiftLab</div>
              </div>
            </div>
            <p style={{color: '#334155', lineHeight: 1.6}}>
              “Support and onboarding were excellent — we migrated in a day and saw immediate improvements.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
