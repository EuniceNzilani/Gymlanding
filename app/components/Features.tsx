"use client"

import { useEffect, useState } from 'react'

export default function Features() {
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
    <section id="features" style={{background: '#ffd9b3', padding: isMobile ? '2rem 1rem' : '4rem 4rem', width: '100%', boxSizing: 'border-box'}}>
      <div style={{width: '100%', maxWidth: 1200, margin: '0 auto', boxSizing: 'border-box'}}>
        <div style={{marginBottom: '3rem'}}>
          <h2 style={{fontSize: isMobile ? 'clamp(1.75rem, 6vw, 2.5rem)' : '2.5rem', margin: '0 0 1rem 0', color: '#0f172a', fontWeight: 900}}>Powerful Features</h2>
          <p style={{fontSize: '1.1rem', color: '#64748b', margin: 0, maxWidth: 600}}>Everything you need to run a thriving gym business</p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '3rem', alignItems: 'start'}}>
          {/* Left: image */}
          <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', order: isMobile ? 2 : 1}}>
            <img src="/Features.png" alt="Gym Owners diagram" style={{width: '100%', maxWidth: 480, borderRadius: 16, boxShadow: '0 10px 40px rgba(0,0,0,0.08)'}} />
          </div>

          {/* Right: features content */}
          <div style={{display: 'grid', gap: '1.5rem', order: isMobile ? 1 : 2}}>
            <div style={{background: '#ffe8cc', padding: isMobile ? '1.25rem' : '1.75rem', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9', transition: 'all 0.3s'}}>
              <h3 style={{margin: '0 0 0.75rem 0', fontSize: isMobile ? '1rem' : '1.15rem', color: '#0f172a', fontWeight: 700}}>For Gym Owners</h3>
              <ul style={{marginTop: '1rem', padding: 0, listStyle: 'none', color: '#475569', lineHeight: 1.8, fontSize: isMobile ? '0.9rem' : '0.95rem', display: 'grid', gap: '0.75rem'}}>
                <li style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                  <span style={{color: '#ff8a00', fontWeight: 700, flexShrink: 0}}>📈</span>
                  <span><strong>Dashboard</strong> - Track revenue and growth with charts</span>
                </li>
                <li style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                  <span style={{color: '#ff8a00', fontWeight: 700, flexShrink: 0}}>💰</span>
                  <span><strong>Payment Tracking</strong> - Never chase payments again</span>
                </li>
                <li style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                  <span style={{color: '#ff8a00', fontWeight: 700, flexShrink: 0}}>👔</span>
                  <span><strong>Staff Control</strong> - Add staff, set permissions, track performance</span>
                </li>
                <li style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                  <span style={{color: '#ff8a00', fontWeight: 700, flexShrink: 0}}>📋</span>
                  <span><strong>Plans & Pricing</strong> - Create custom membership plans</span>
                </li>
                <li style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                  <span style={{color: '#ff8a00', fontWeight: 700, flexShrink: 0}}>🏃</span>
                  <span><strong>Workouts & Diet</strong> - Create programs and meal plans</span>
                </li>
                <li style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                  <span style={{color: '#ff8a00', fontWeight: 700, flexShrink: 0}}>📝</span>
                  <span><strong>Activity Log</strong> - Track all gym activities automatically</span>
                </li>
                <li style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                  <span style={{color: '#ff8a00', fontWeight: 700, flexShrink: 0}}>📣</span>
                  <span><strong>Announcements</strong> - Schedule and send messages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
