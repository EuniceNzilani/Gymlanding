"use client"

import { useEffect, useState } from 'react'
import { AnimatedSection, AnimatedItem } from './AnimatedSection'

export default function ContactUs() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="contact" style={{background: '#ffffff62', padding: '3.5rem 1rem', position: 'relative', overflow: 'hidden', width: '100%', boxSizing: 'border-box'}}>

      <div style={{maxWidth: 1400, margin: '0 auto', background: '#ffd9b3', padding: '2rem', borderRadius: 15, textAlign: 'center', position: 'relative', zIndex: 1}}>
        <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
        {/* Top contact cards */}
        <AnimatedSection direction="up" delay={0}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
          <AnimatedItem delay={0.1}>
            <div style={{ background: 'rgba(226,232,240,0.7)', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span aria-hidden style={{ background: '#fff', borderRadius: '50%', padding: 8, color: '#fb923c' }}>📞</span>
                <div style={{ fontWeight: 700, color: '#0f172a' }}>Phone</div>
              </div>
              <div style={{ color: '#fb923c', fontWeight: 800 }}>+254111014100</div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>24/7 availability</div>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.2}>
            <div style={{ background: 'rgba(226,232,240,0.7)', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span aria-hidden style={{ background: '#fff', borderRadius: '50%', padding: 8, color: '#fb923c' }}>💬</span>
                <div style={{ fontWeight: 700, color: '#0f172a' }}>WhatsApp</div>
              </div>
              <div style={{ color: '#fb923c', fontWeight: 800 }}>+254748329740</div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>8:00 AM - 10:00 PM daily</div>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.3}>
            <div style={{ background: 'rgba(226,232,240,0.7)', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span aria-hidden style={{ background: '#fff', borderRadius: '50%', padding: 8, color: '#fb923c' }}>✉️</span>
                <div style={{ fontWeight: 700, color: '#0f172a' }}>Email</div>
              </div>
              <div style={{ color: '#fb923c', fontWeight: 800 }}>support@mzalendofiber.co.ke</div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>24/7 availability</div>
            </div>
          </AnimatedItem>
        </div>
        </AnimatedSection>

        {/* Form area */}
        <AnimatedSection direction="up" delay={0.4}>
        <div style={{ background: 'transparent', borderRadius: 12, padding: isMobile ? 0 : 12 }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0f172a', marginBottom: 12 }}><span aria-hidden style={{ color: '#fb923c' }}>✉️</span> Send us a Message</h3>

          <form onSubmit={(e) => { e.preventDefault(); console.log('contact form submitted') }} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12, width: '100%', boxSizing: 'border-box' }}>
            <input aria-label="Full name" placeholder="Full name" required style={{ padding: '12px', borderRadius: 8, border: '1px solid #f1f5f9', background: 'rgba(226,232,240,0.7)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', width: '100%', boxSizing: 'border-box', color: '#0f172a' }} />
            <input aria-label="Email" placeholder="Email" required style={{ padding: '12px', borderRadius: 8, border: '1px solid #f1f5f9', background: 'rgba(226,232,240,0.7)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', width: '100%', boxSizing: 'border-box', color: '#0f172a' }} />

            <select aria-label="Subject" required style={{ gridColumn: isMobile ? '1' : '1 / span 2', padding: '12px', borderRadius: 8, border: '1px solid #f1f5f9', background: 'rgba(226,232,240,0.7)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', width: '100%', boxSizing: 'border-box', color: '#0f172a' }}>
              <option value="">Select an option</option>
              <option>General</option>
              <option>Billing</option>
              <option>Technical</option>
            </select>

            <textarea aria-label="Message" placeholder="Describe your issue..." required style={{ gridColumn: isMobile ? '1' : '1 / span 2', minHeight: 120, padding: 12, borderRadius: 8, border: '1px solid #f1f5f9', background: 'rgba(226,232,240,0.7)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', width: '100%', boxSizing: 'border-box', color: '#0f172a' }} />

            <div style={{ gridColumn: isMobile ? '1' : '1 / span 2', display: 'flex', justifyContent: 'flex-start' }}>
              <button type="submit" style={{ background: '#fb923c', color: '#fff', padding: '10px 16px', borderRadius: 8, border: 'none', cursor: 'pointer' }}>Send Message</button>
            </div>
          </form>
        </div>
        </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
