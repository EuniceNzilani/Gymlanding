'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const navHeight = 60

  return (
    <nav style={{position: 'fixed', top: 0, left: 0, right: 0, background: '#fafafa', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', zIndex: 1000}}>
      <div style={{maxWidth: 1400, margin: '0 auto', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '60px'}}>
        {/* Mobile Menu Button - Left */}
        <button onClick={() => setIsOpen(!isOpen)} style={{flexDirection: 'column', gap: '0.35rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem'}} className="sm:hidden flex">
          <span style={{width: '1.5rem', height: '0.2rem', background: '#1f2937', borderRadius: '0.1rem', transition: 'all 0.3s', transform: isOpen ? 'rotate(45deg) translateY(0.55rem)' : 'rotate(0)'}}></span>
          <span style={{width: '1.5rem', height: '0.2rem', background: '#1f2937', borderRadius: '0.1rem', transition: 'all 0.3s', opacity: isOpen ? 0 : 1}}></span>
          <span style={{width: '1.5rem', height: '0.2rem', background: '#1f2937', borderRadius: '0.1rem', transition: 'all 0.3s', transform: isOpen ? 'rotate(-45deg) translateY(-0.55rem)' : 'rotate(0)'}}></span>
        </button>

        <div style={{fontWeight: 800, fontSize: 'clamp(1.1rem, 5vw, 1.5rem)', background: 'linear-gradient(135deg,#ff8a00,#ff5e00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>M-Gym</div>
        
        {/* Desktop Menu */}
        <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}} className="hidden sm:flex">
          <Link href="/" style={{textDecoration: 'none', color: '#1f2937', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.3s', cursor: 'pointer'}}>Home</Link>
          <Link href="/features" style={{textDecoration: 'none', color: '#1f2937', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.3s', cursor: 'pointer'}}>Features</Link>
          <Link href="/pricing" style={{textDecoration: 'none', color: '#1f2937', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.3s', cursor: 'pointer'}}>Pricing</Link>
          <Link href="/testimonials" style={{textDecoration: 'none', color: '#1f2937', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.3s', cursor: 'pointer'}}>Testimonials</Link>
          <button style={{padding: '0.65rem 1.75rem', background: 'linear-gradient(135deg,#ff8a00,#ff5e00)', color: '#fff', border: 'none', borderRadius: 25, fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 12px rgba(255,130,0,0.25)', transition: 'all 0.3s'}}>
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{position: 'absolute', top: navHeight, left: 0, right: 0, background: '#fafafa', borderTop: '1px solid #e5e7eb', flexDirection: 'column', gap: '0.5rem', padding: '1rem', maxHeight: 'calc(100vh - 60px)', overflowY: 'auto'}} className="sm:hidden flex">
          <Link href="/" onClick={() => setIsOpen(false)} style={{textDecoration: 'none', color: '#1f2937', fontSize: '0.95rem', fontWeight: 500, padding: '0.75rem 1rem', borderRadius: '0.5rem', transition: 'background 0.3s', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>Home</Link>
          <Link href="/features" onClick={() => setIsOpen(false)} style={{textDecoration: 'none', color: '#1f2937', fontSize: '0.95rem', fontWeight: 500, padding: '0.75rem 1rem', borderRadius: '0.5rem', transition: 'background 0.3s', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>Features</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} style={{textDecoration: 'none', color: '#1f2937', fontSize: '0.95rem', fontWeight: 500, padding: '0.75rem 1rem', borderRadius: '0.5rem', transition: 'background 0.3s', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>Pricing</Link>
          <Link href="/testimonials" onClick={() => setIsOpen(false)} style={{textDecoration: 'none', color: '#1f2937', fontSize: '0.95rem', fontWeight: 500, padding: '0.75rem 1rem', borderRadius: '0.5rem', transition: 'background 0.3s', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>Testimonials</Link>
          <button style={{width: '100%', padding: '0.65rem 1rem', background: 'linear-gradient(135deg,#ff8a00,#ff5e00)', color: '#fff', border: 'none', borderRadius: 25, fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 12px rgba(255,130,0,0.25)', transition: 'all 0.3s', marginTop: '0.5rem'}}>
            Sign In
          </button>
        </div>
      )}
    </nav>
  )
}
