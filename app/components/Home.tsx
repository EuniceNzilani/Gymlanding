"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatedSection, AnimatedItem } from './AnimatedSection'

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
        background: '#ffffff',
        padding: '3.5rem 1rem',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >

      <div style={{maxWidth: 1400, margin: '0 auto', padding: '2rem', borderRadius: 15, position: 'relative', overflow: 'hidden'}}>
        <Image src="/background.jpg" alt="" fill style={{objectFit: 'cover', filter: 'brightness(0.96)'}} />
        <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.14)', zIndex: 1, borderRadius: 15}} />
        <div style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '3rem', alignItems: 'center', margin: 0}}>
          
            {/* Left: Content */}
            <AnimatedSection direction="left" delay={0.1}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', order: isMobile ? 2 : 1}}>
                <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem'}}>
                  <div style={{width: 12, height: 12, borderRadius: 3, background: 'rgb(211, 80, 10)', boxShadow: '0 6px 12px rgba(255,122,26,0.22)', flexShrink: 0}}/>
                  <span style={{fontSize: '0.875rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>M-Gym</span>
                </div>

                <h1 style={{fontSize: isMobile ? '1.875rem' : '3rem', margin: '0 0 1rem 0', lineHeight: 1.2, color: '#fff', fontWeight: 900}}>
                  Grow Your Gym & <span style={{background: 'rgb(241, 98, 21)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 6px 18px rgba(255,122,26,0.12)'}}>Boost Revenue</span>
                </h1>

                <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.7, maxWidth: '90%'}}>
                  Stop losing money and members. Automate payments, manage schedules, track member progress, and scale your business effortlessly with our intelligent gym management platform.
                </p>

                {/* CTA Button */}
                <div style={{display: 'flex', gap: '1rem', marginBottom: '3rem'}}>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 2rem',
                    background: 'linear-gradient(135deg,#FF7A1A,#FF5A00)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 25px rgba(204,85,0,0.3)',
                    whiteSpace: 'nowrap'
                  }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(204,85,0,0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(204,85,0,0.3)'; }}>
                    <span>📱</span>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2}}>
                      <div style={{fontSize: '0.7rem', color: '#ffffff', fontWeight: 700}}>Get it on</div>
                      <div style={{fontSize: '0.9rem', fontWeight: 800, color: '#ffffff'}}>Google Play</div>
                    </div>
                  </button>
                </div>

                {/* Key Benefits */}
                <div style={{display: 'grid', gap: '1rem'}}>
                  <div style={{fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.8)'}}>What you gain:</div>
                  <div style={{display: 'grid', gap: '0.75rem'}}>
                    <div style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                      <div style={{width: 20, height: 20, borderRadius: '50%', background: 'rgba(204,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontSize: '0.75rem'}}>✓</div>
                      <div>
                        <div style={{fontWeight: 600, color: '#fff', fontSize: '0.95rem'}}>Automated Payments</div>
                        <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)'}}>Never chase payments again</div>
                      </div>
                    </div>
                    <div style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                      <div style={{width: 20, height: 20, borderRadius: '50%', background: 'rgba(204,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontSize: '0.75rem'}}>✓</div>
                      <div>
                        <div style={{fontWeight: 600, color: '#fff', fontSize: '0.95rem'}}>24/7 Member Portal</div>
                        <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)'}}>Workouts, diet plans, attendance tracking</div>
                      </div>
                    </div>
                    <div style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                      <div style={{width: 20, height: 20, borderRadius: '50%', background: 'rgba(204,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontSize: '0.75rem'}}>✓</div>
                      <div>
                        <div style={{fontWeight: 600, color: '#fff', fontSize: '0.95rem'}}>Real-time Dashboard</div>
                        <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)'}}>Track revenue, attendance, and growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Phone Mockup Display */}
            <AnimatedSection direction="right" delay={0.2}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', order: isMobile ? 1 : 2, position: 'relative'}}>
                <div style={{position: 'relative', width: '100%', height: isMobile ? '300px' : '500px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  {/* Main center phone - larger */}
                  <div style={{position: 'absolute', width: isMobile ? '120px' : '200px', height: isMobile ? '240px' : '380px', zIndex: 3}}>
                    <img src="/phone%20mockup.png" alt="Main app mockup" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2rem', boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 1px rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)'}} />
                  </div>

                  {/* Left phone - offset */}
                  {!isMobile && (
                    <div style={{position: 'absolute', left: '0px', width: '130px', height: '260px', zIndex: 2, transform: 'rotate(-15deg) translateY(30px)'}}>
                      <img src="/gym-Dashboard.png" alt="Secondary mockup 1" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.05)', opacity: 0.8, filter: 'brightness(0.85) contrast(1.1)'}} />
                    </div>
                  )}

                   {/* Right phone - offset */}
                   {!isMobile && (
                     <div style={{position: 'absolute', right: '0px', width: '130px', height: '260px', zIndex: 2, transform: 'rotate(15deg) translateY(40px)'}}>
                       <img src="/Gym-image.png" alt="Secondary mockup 2" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.05)', opacity: 0.8,filter: 'brightness(0.85) contrast(1.1)'}} />
                     </div>
                   )}

                  {/* Floating accent elements */}
                  <div style={{position: 'absolute', width: isMobile ? '60px' : '100px', height: isMobile ? '60px' : '100px', background: 'rgba(204,85,0,0.1)', borderRadius: '50%', top: '-20px', right: '10%', filter: 'blur(30px)', pointerEvents: 'none'}}/>
                  <div style={{position: 'absolute', width: isMobile ? '80px' : '120px', height: isMobile ? '80px' : '120px', background: 'rgba(204,85,0,0.1)', borderRadius: '50%', bottom: '-30px', left: isMobile ? '-40px' : '-10%', filter: 'blur(40px)', pointerEvents: 'none'}}/>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  )
}