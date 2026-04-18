"use client"

import { useState, useEffect } from 'react'

export default function Footer() {
  const [showSupport, setShowSupport] = useState(false)
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
    <footer style={{background: '#CC5500', color: '#ffffff', padding: isMobile ? '1.5rem 1rem 0.75rem' : '1.25rem 2rem 1rem'}}>
      <div style={{width: '100%', maxWidth: 1400, margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: isMobile ? '1.25rem' : '1.25rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.04)'}}>
          <div>
            <div style={{fontWeight: 800, fontSize: isMobile ? '1.05rem' : '1.25rem', color: '#ffffff', marginBottom: '0.5rem'}}>M-Gym</div>
                <p style={{color: '#94a3b8', fontSize: isMobile ? '0.82rem' : '0.88rem', lineHeight: 1.5, margin: 0}}>
              Transform your gym business with powerful management tools designed for modern fitness studios.
            </p>
          </div>
          <div>
            <h4 style={{color: '#fb923c', fontWeight: 700, margin: '0 0 0.6rem 0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Product</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem'}}>
              <li><a href="/features" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: isMobile ? '0.85rem' : '0.9rem', transition: 'color 0.2s', display: 'inline-block'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd8b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Features</a></li>
              <li><a href="/faq" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: isMobile ? '0.85rem' : '0.9rem', transition: 'color 0.2s', display: 'inline-block'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd8b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>FAQ</a></li>
              <li><a href="/pricing" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: isMobile ? '0.85rem' : '0.9rem', transition: 'color 0.2s', display: 'inline-block'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd8b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{color: '#fb923c', fontWeight: 700, margin: '0 0 0.6rem 0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Support</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem'}}>
              <li><a href="#contact" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: isMobile ? '0.85rem' : '0.9rem', transition: 'color 0.2s', display: 'inline-block'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd8b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Help Center</a></li>
              <li><a href="/documentation" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: isMobile ? '0.85rem' : '0.9rem', transition: 'color 0.2s', display: 'inline-block'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd8b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Documentation</a></li>
              <li>
                <a href="#contact" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: isMobile ? '0.85rem' : '0.9rem', transition: 'color 0.2s', display: 'inline-block'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd8b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Support</a>
              </li>
              
            </ul>
          </div>
          <div>
            <h4 style={{color: '#fb923c', fontWeight: 700, margin: '0 0 0.6rem 0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Legal</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem'}}>
              <li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: isMobile ? '0.85rem' : '0.9rem', transition: 'color 0.2s', display: 'inline-block'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd8b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Privacy</a></li>
              <li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: isMobile ? '0.85rem' : '0.9rem', transition: 'color 0.2s', display: 'inline-block'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd8b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Terms</a></li>
              <li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: isMobile ? '0.85rem' : '0.9rem', transition: 'color 0.2s', display: 'inline-block'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd8b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Security</a></li>
              <li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: isMobile ? '0.85rem' : '0.9rem', transition: 'color 0.2s', display: 'inline-block'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd8b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>Compliance</a></li>
            </ul>
          </div>
        </div>
        <div style={{textAlign: 'center', paddingTop: '0.5rem'}}>
          <p style={{color: '#94a3b8', fontSize: isMobile ? '0.7rem' : '0.78rem', margin: 0}}>© 2026 M-Gym. All rights reserved.</p>
        </div>
        {showSupport && (
          <div onClick={() => setShowSupport(false)} style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60, padding: isMobile ? '1rem' : '0'}}>
            <div onClick={(e) => e.stopPropagation()} style={{width: isMobile ? '100%' : 'min(520px, 95%)', background: '#f7fff7', borderRadius: isMobile ? '8px' : '12px', padding: isMobile ? '1.25rem 1rem 1.5rem' : '1rem 1rem 1.25rem', boxShadow: '0 8px 30px rgba(2,6,23,0.35)', maxHeight: isMobile ? '90vh' : 'auto', overflowY: isMobile ? 'auto' : 'visible'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                <h3 style={{margin: 0, color: '#064e3b', fontSize: isMobile ? '1.1rem' : '1.25rem'}}>Contact Us</h3>
                <button onClick={() => setShowSupport(false)} aria-label="Close support" style={{background: 'transparent', border: 'none', fontSize: isMobile ? '1rem' : '1.15rem', cursor: 'pointer', color: '#064e3b', padding: '0.5rem'}}>✕</button>
              </div>
              <div style={{display: 'grid', gap: '0.6rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#064e3b'}}>
                  <span style={{fontSize: '1.1rem', flexShrink: 0}}>📞</span>
                  <a href="tel:+254111014100" style={{color: '#064e3b', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '0.95rem'}}>+254111014100</a>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#064e3b'}}>
                  <span style={{fontSize: '1.05rem', flexShrink: 0}}>✉️</span>
                  <a href="mailto:support@mzalendofiber.co.ke" style={{color: '#064e3b', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '0.95rem', wordBreak: 'break-word'}}>support@mzalendofiber.co.ke</a>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#064e3b'}}>
                  <span style={{fontSize: '1.05rem', flexShrink: 0}}>📍</span>
                  <span style={{fontSize: isMobile ? '0.9rem' : '0.95rem'}}>Nairobi, Kenya</span>
                </div>

                <div style={{marginTop: '0.6rem', background: '#E6F4E6', color: '#064e3b', padding: '0.75rem', borderRadius: '10px', boxShadow: '0 1px 0 rgba(0,0,0,0.04)'}}>
                  <div style={{fontWeight: 700, marginBottom: '0.45rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: isMobile ? '0.9rem' : '1rem'}}>
                    <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block', flexShrink: 0}}></span>
                    <span>Opening Hours</span>
                  </div>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.25rem', fontSize: isMobile ? '0.85rem' : '0.9rem', color: '#064e3b'}}>
                    <li><strong style={{fontWeight: 700}}>Mon-Fri:</strong> 8:00 AM - 6:00 PM</li>
                    <li><strong style={{fontWeight: 700}}>Sat:</strong> 9:00 AM - 2:00 PM</li>
                    <li><strong style={{fontWeight: 700}}>Sun:</strong> Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
