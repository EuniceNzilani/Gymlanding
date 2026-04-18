"use client"

import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const initial = [
    { id: 1, name: 'Arjun R.', role: 'Owner, Peak Fitness', text: '“Since switching to M‑Gym our monthly revenue increased 28% — automation saved hours each week.”' },
    { id: 2, name: 'Sana M.', role: 'Manager, CoreClub', text: '“Member retention jumped after we started using the custom plans and in-app reminders. Game changer.”' },
  ]

  const [items, setItems] = useState(initial)

  const handleNext = () => setItems(prev => {
    if (prev.length <= 1) return prev
    const [first, ...rest] = prev
    return [...rest, first]
  })

  const handlePrev = () => setItems(prev => {
    if (prev.length <= 1) return prev
    const last = prev[prev.length - 1]
    return [last, ...prev.slice(0, prev.length - 1)]
  })

  return (
    <section id="testimonials" style={{ background: '#ffd9b3', padding: isMobile ? '3rem 1rem 4rem' : '3rem 2rem 4rem', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2rem)' : '2rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: 800 }}>What Gym Owners Say</h2>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>Real results from real businesses using M-Gym.</p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: 'transparent', borderRadius: 12, padding: '1.25rem', textAlign: 'left', maxWidth: isMobile ? '100%' : 760 }}>
            <div style={{ display: isMobile ? 'block' : 'flex', gap: isMobile ? '0.5rem' : 0 }}>
              {items.slice(0, 2).map((item, idx) => {
                const isLeft = idx === 0
                const cardBg = isMobile ? 'rgba(248,250,252,0.98)' : (isLeft ? 'rgba(248,250,252,0.35)' : 'rgba(248,250,252,0.98)')
                const cardRadius = isMobile ? 12 : (isLeft ? '12px 0 0 12px' : '0 12px 12px 0')
                const cardPadding = isMobile ? '0.75rem' : '1rem'
                const nameFontSize = isLeft ? (isMobile ? '1rem' : '1.125rem') : (isMobile ? '0.95rem' : '1rem')
                const roleFontSize = isLeft ? (isMobile ? '0.9rem' : '0.95rem') : '0.85rem'

                return (
                  <div key={item.id} style={{ flex: 1, padding: isMobile ? '0.5rem 0' : '0' }}>
                    <div style={{ position: 'relative' }}>
                      {/* outer edge circles removed; joined circles remain inside the card */}

                      <div style={{ background: cardBg, borderRadius: cardRadius, padding: cardPadding, minHeight: isMobile ? 'auto' : 160, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                        {/* Joined circles inside card (infinity-like) */}
                        {isLeft && (
                          <div style={{ position: 'absolute', top: (isMobile ? 8 : 12), left: (isMobile ? 8 : 12), width: (isMobile ? 34 : 42), height: (isMobile ? 18 : 22), pointerEvents: 'none', zIndex: 2 }}>
                            <div aria-hidden style={{ position: 'absolute', left: 0, top: 0, width: (isMobile ? 18 : 22), height: (isMobile ? 18 : 22), borderRadius: '50%', background: '#fb923c', boxShadow: '0 6px 12px rgba(0,0,0,0.08)' }} />
                            <div aria-hidden style={{ position: 'absolute', left: (isMobile ? 16 : 20), top: 0, width: (isMobile ? 18 : 22), height: (isMobile ? 18 : 22), borderRadius: '50%', background: '#ef4444', boxShadow: '0 6px 12px rgba(0,0,0,0.08)' }} />
                          </div>
                        )}
                        {isLeft ? (
                          <>
                            <div />
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                              <div style={{ fontWeight: 800, fontSize: nameFontSize }}>{items[1]?.name}</div>
                              <div style={{ fontSize: roleFontSize, color: '#94a3b8' }}>{items[1]?.role}</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.75rem' }}>
                              <div style={{ color: '#f59e0b', fontSize: isMobile ? '1.5rem' : '2rem', textAlign: 'center' }} aria-hidden>★★★★★</div>
                            </div>
                            <p style={{ color: '#334155', lineHeight: 1.6 }}>{item.text}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16 }}>
          <button aria-label="Previous testimonials" onClick={handlePrev} style={{ background: 'transparent', border: '1px solid rgba(15,23,42,0.08)', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>&lt;</button>
          <button aria-label="Next testimonials" onClick={handleNext} style={{ background: 'transparent', border: '1px solid rgba(15,23,42,0.08)', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>&gt;</button>
        </div>
      </div>
    </section>
  )
}
