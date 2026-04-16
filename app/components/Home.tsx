"use client"

import { useEffect, useState } from 'react'

export default function Home() {
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
    <section
      id="home"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center -18px',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: '-60px',
        paddingTop: '0px',
        overflow: 'hidden'
      }}
    >
      <div style={{position: 'absolute', top: '-10%', right: '-5%', width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius: '50%', background: 'rgba(255,138,0,0.08)', filter: 'blur(60px)', pointerEvents: 'none'}}/>
      <div style={{position: 'absolute', bottom: '-10%', left: '-5%', width: isMobile ? 150 : 300, height: isMobile ? 150 : 300, borderRadius: '50%', background: 'rgba(255,138,0,0.06)', filter: 'blur(60px)', pointerEvents: 'none'}}/>
      <div style={{position: 'absolute', top: 'calc(50% - 150px)', left: '10%', width: isMobile ? 200 : 300, height: isMobile ? 200 : 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,138,0,0.85) 0%, rgba(255,100,0,0.7) 50%, rgba(255,80,0,0.4) 100%)', filter: 'blur(45px)', pointerEvents: 'none'}}/>

      {/* overlay to dim the image (adjust rgba to darken/lighten) */}
      <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.32)', zIndex: 0, pointerEvents: 'none'}}/>

      {/* frosted overlay with only a thin blurred border (center kept clear) */}
      <div style={{position: 'absolute', inset: 0, borderRadius: 0, background: 'rgba(255,255,255,0.04)', boxShadow: 'inset 0 0 120px rgba(0,0,0,0.12)', zIndex: 1, pointerEvents: 'none', overflow: 'hidden'}}>
        {/* subtle inner gradient to soften edges */}
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))'}}/>

        {/* masked element that applies a small (2px) backdrop blur only around the edges */}
        <div style={{
          position: 'absolute',
          inset: 0,
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 85%, black 100%)',
          maskImage: 'radial-gradient(ellipse at center, transparent 85%, black 100%)',
          backdropFilter: 'blur(2px) saturate(110%)',
          WebkitBackdropFilter: 'blur(2px) saturate(110%)',
          pointerEvents: 'none'
        }}/>
      </div>

      <div style={{width: '100%', maxWidth: 1400, padding: isMobile ? '2rem 1rem' : '3rem 5rem', position: 'relative', zIndex: 2}}>
        <div style={{display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '2rem', alignItems: 'center'}}>
          {/* Left: Content (now inside a white card) */}
          <div style={{display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', order: isMobile ? 2 : 1, padding: isMobile ? '0 0.5rem' : '0'}}>
            <div style={{background: '#ffffff', borderRadius: 16, padding: isMobile ? '1rem 1rem' : '2rem', boxShadow: '0 15px 35px rgba(2,6,23,0.08)', maxWidth: isMobile ? '100%' : 700, width: '100%', marginRight: isMobile ? 0 : '2rem', marginTop: isMobile ? 0 : '60px', maxHeight: isMobile ? 'calc(100vh - 100px)' : 'auto', overflowY: isMobile ? 'auto' : 'visible'}}>
              <div style={{display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: isMobile ? '1rem' : '1.5rem'}}>
                <div style={{width: isMobile ? 28 : 32, height: isMobile ? 28 : 32, borderRadius: 8, background: 'linear-gradient(135deg,#ff8a00,#ff5e00)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isMobile ? '1rem' : '1.2rem'}}>💪</div>
                <span style={{fontSize: isMobile ? '0.75rem' : '0.85rem', fontWeight: 700, color: '#ff8a00', textTransform: 'uppercase', letterSpacing: '0.5px'}}>M-Gym</span>
              </div>

              <h1 style={{fontSize: isMobile ? 'clamp(1.3rem, 5vw, 2.5rem)' : '3.5rem', margin: '0 0 1rem 0', lineHeight: 1.1, color: '#0f172a', fontWeight: 900}}>
                Grow Your Gym & <span style={{background: 'linear-gradient(135deg,#ff8a00,#ff5e00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Boost Revenue</span>
              </h1>

              <p style={{color: '#475569', fontSize: isMobile ? '0.85rem' : '1.1rem', marginBottom: isMobile ? '1.5rem' : '2.5rem', lineHeight: 1.6, maxWidth: '100%'}}>
                <strong>Stop Losing Money & Members Because Of:</strong><br/>
                ❌ Members forgetting to pay (costing you thousands monthly)<br/>
                ❌ Empty classes because nobody knows the schedule<br/>
                ❌ Spending hours on paperwork instead of growing your business<br/>
                ❌ Members quitting because they see no progress<br/>
                ❌ Staff confusion and miscommunication
              </p>

              {/* App Store Buttons */}
              <div style={{display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap'}}>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '0.5rem' : '0.75rem',
                  padding: isMobile ? '0.65rem 1rem' : '0.85rem 1.5rem',
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  fontSize: isMobile ? '0.75rem' : '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  whiteSpace: 'nowrap'
                }}>
                  <span style={{fontSize: isMobile ? '1rem' : '1.3rem'}}>▶️</span>
                  <div>
                    <div style={{fontSize: isMobile ? '0.6rem' : '0.7rem', opacity: 0.8}}>Get it on</div>
                    <div style={{fontSize: isMobile ? '0.8rem' : '1rem', fontWeight: 700}}>Google Play</div>
                  </div>
                </button>
              </div>

              {/* Key Benefits */}
              <div style={{display: 'grid', gap: isMobile ? '0.75rem' : '1rem'}}>
                <div style={{fontWeight: 700, fontSize: isMobile ? '0.8rem' : '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#ff8a00'}}>Your gains include:</div>
                <div style={{display: 'grid', gap: isMobile ? '0.6rem' : '0.75rem'}}>
                  <div style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                    <span style={{color: '#ff8a00', fontWeight: 700, fontSize: '1.2rem', marginTop: '-2px', flexShrink: 0}}>✓</span>
                    <div>
                      <div style={{fontWeight: 600, color: '#0f172a', fontSize: isMobile ? '0.85rem' : '1rem'}}>Automated Payments</div>
                      <div style={{fontSize: isMobile ? '0.8rem' : '0.9rem', color: '#64748b'}}>Never chase payments again</div>
                    </div>
                  </div>
                  <div style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                    <span style={{color: '#ff8a00', fontWeight: 700, fontSize: '1.2rem', marginTop: '-2px', flexShrink: 0}}>✓</span>
                    <div>
                      <div style={{fontWeight: 600, color: '#0f172a', fontSize: isMobile ? '0.85rem' : '1rem'}}>24/7 Member Portal</div>
                      <div style={{fontSize: isMobile ? '0.8rem' : '0.9rem', color: '#64748b'}}>Workouts, diet plans, attendance tracking</div>
                    </div>
                  </div>
                  <div style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                    <span style={{color: '#ff8a00', fontWeight: 700, fontSize: '1.2rem', marginTop: '-2px', flexShrink: 0}}>✓</span>
                    <div>
                      <div style={{fontWeight: 600, color: '#0f172a', fontSize: isMobile ? '0.85rem' : '1rem'}}>Real-time Dashboard</div>
                      <div style={{fontSize: isMobile ? '0.8rem' : '0.9rem', color: '#64748b'}}>Track revenue, attendance, and growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup (image) */}
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', order: isMobile ? 1 : 2}}>
            <div style={{position: 'relative', width: isMobile ? 240 : 320, height: isMobile ? 450 : 600}}>
              <img src="/phone%20mockup.png" alt="Phone mockup" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 40, boxShadow: '0 25px 50px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,138,0,0.1)'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
