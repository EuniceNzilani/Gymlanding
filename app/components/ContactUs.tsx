"use client"

import { useEffect, useState } from 'react'

export default function ContactUs() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="contact" style={{ background: '#ffd9b3', padding: isMobile ? '2rem 1rem 3rem' : '3rem 4rem 3rem', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
        {/* Top contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
          <div style={{ background: 'rgba(248,250,252,0.98)', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span aria-hidden style={{ background: '#fff', borderRadius: '50%', padding: 8, color: '#fb923c' }}>📞</span>
              <div style={{ fontWeight: 700, color: '#0f172a' }}>Phone</div>
            </div>
            <div style={{ color: '#fb923c', fontWeight: 800 }}>+254111014100</div>
            <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>24/7 availability</div>
          </div>

          <div style={{ background: 'rgba(248,250,252,0.98)', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span aria-hidden style={{ background: '#fff', borderRadius: '50%', padding: 8, color: '#fb923c' }}>💬</span>
              <div style={{ fontWeight: 700, color: '#0f172a' }}>WhatsApp</div>
            </div>
            <div style={{ color: '#fb923c', fontWeight: 800 }}>+254748329740</div>
            <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>8:00 AM - 10:00 PM daily</div>
          </div>

          <div style={{ background: 'rgba(248,250,252,0.98)', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span aria-hidden style={{ background: '#fff', borderRadius: '50%', padding: 8, color: '#fb923c' }}>✉️</span>
              <div style={{ fontWeight: 700, color: '#0f172a' }}>Email</div>
            </div>
            <div style={{ color: '#fb923c', fontWeight: 800 }}>support@mzalendofiber.co.ke</div>
            <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>24/7 availability</div>
          </div>
        </div>

        {/* Form area */}
        <div style={{ background: 'transparent', borderRadius: 12, padding: isMobile ? 0 : 12 }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0f172a', marginBottom: 12 }}><span aria-hidden style={{ color: '#fb923c' }}>✉️</span> Send us a Message</h3>

          <form onSubmit={(e) => { e.preventDefault(); console.log('contact form submitted') }} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12, width: '100%', boxSizing: 'border-box' }}>
            <input aria-label="Full name" placeholder="Full name" required style={{ padding: '12px', borderRadius: 8, border: '1px solid rgba(15,23,42,0.08)', width: '100%', boxSizing: 'border-box' }} />
            <input aria-label="Email" placeholder="Email" required style={{ padding: '12px', borderRadius: 8, border: '1px solid rgba(15,23,42,0.08)', width: '100%', boxSizing: 'border-box' }} />

            <select aria-label="Subject" required style={{ gridColumn: isMobile ? '1' : '1 / span 2', padding: '12px', borderRadius: 8, border: '1px solid rgba(15,23,42,0.08)', width: '100%', boxSizing: 'border-box' }}>
              <option value="">Select an option</option>
              <option>General</option>
              <option>Billing</option>
              <option>Technical</option>
            </select>

            <textarea aria-label="Message" placeholder="Describe your issue..." required style={{ gridColumn: isMobile ? '1' : '1 / span 2', minHeight: 120, padding: 12, borderRadius: 8, border: '1px solid rgba(15,23,42,0.08)', width: '100%', boxSizing: 'border-box' }} />

            <div style={{ gridColumn: isMobile ? '1' : '1 / span 2', display: 'flex', justifyContent: 'flex-start' }}>
              <button type="submit" style={{ background: '#10b981', color: '#fff', padding: '10px 16px', borderRadius: 8, border: 'none', cursor: 'pointer' }}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
