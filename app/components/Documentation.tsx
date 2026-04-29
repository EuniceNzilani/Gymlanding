"use client"

import { useState, useEffect, useRef } from 'react'

export default function Documentation() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')
  const [sidebarFixed, setSidebarFixed] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const HEADER_HEIGHT = 100 // compact header height in px

  const sections = [
    { id: 'overview', icon: '📖', label: 'Overview' },
    { id: 'getting-started', icon: '🚀', label: 'Getting Started' },
    { id: 'features', icon: '⚙️', label: 'Features Guide' },
    { id: 'api', icon: '🔌', label: 'API Reference' },
    { id: 'tutorials', icon: '🎓', label: 'Tutorials' },
    { id: 'faq', icon: '❓', label: 'FAQ' },
    { id: 'troubleshooting', icon: '🔧', label: 'Troubleshooting' }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Switch sidebar from fixed to in-flow when near bottom
  useEffect(() => {
    if (isMobile) return
    const handleScroll = () => {
      if (!contentRef.current || !sidebarRef.current) return
      const contentBottom = contentRef.current.getBoundingClientRect().bottom
      const sidebarHeight = sidebarRef.current.offsetHeight
      const viewportHeight = window.innerHeight
      // When the bottom of the content area is about to go above the bottom of the sidebar
      setSidebarFixed(contentBottom > HEADER_HEIGHT + sidebarHeight + 24)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])



  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - HEADER_HEIGHT - 16
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <div id="documentation" style={{backgroundColor: '#ffd9b3', paddingTop: 0, paddingBottom: '3rem'}}>
      {/* ── Compact Fixed Header ── */}
      <div style={{
        backgroundColor: 'white',
        padding: isMobile ? '0.75rem 1rem' : '0.75rem 2rem',
        borderBottom: '1px solid #e5e7eb',
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 10,
        height: `${HEADER_HEIGHT}px`,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          {/* Top row: back + badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
            <button
              onClick={() => window.location.assign('/#home')}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '1.2rem', color: '#d97706', padding: '0.25rem 0.5rem',
                borderRadius: '50%', display: 'flex', alignItems: 'center',
                justifyContent: 'center', transition: 'background 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(217,119,6,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'none'}
              aria-label="Go back"
            >
              ←
            </button>
            <div style={{ backgroundColor: '#fef3c7', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>
              <span style={{ color: '#d97706', fontSize: '0.78rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                📚 Documentation
              </span>
            </div>
          </div>

          {/* Bottom row: title + subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: 800, color: '#1e293b', margin: 0, lineHeight: 1.2, textAlign: 'center' }}>
              M-Gym Documentation
            </h1>
            {!isMobile && (
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.4, textAlign: 'center' }}>
                Comprehensive guides and resources to help you maximize your gym management platform
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? `${HEADER_HEIGHT + 16}px 1rem 0` : `${HEADER_HEIGHT + 24}px 2rem 0`,
          display: !isMobile ? 'grid' : 'block',
          gridTemplateColumns: !isMobile ? '260px 1fr' : 'none',
          gap: !isMobile ? '2rem' : '0',
          alignItems: 'start',
        }}
      >



        {/* Mobile Navigation */}
        {isMobile && (
          <div style={{marginBottom: '1.5rem', overflowX: 'auto', display: 'flex', gap: '0.5rem', paddingBottom: '0.5rem'}}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  background: activeSection === section.id ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(15,23,42,0.04)',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: activeSection === section.id ? 600 : 500,
                  color: activeSection === section.id ? '#d97706' : '#475569',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                }}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}

        {/* Desktop sidebar — fixed until near the bottom, then in-flow */}
        {!isMobile && (
          <div style={{ position: 'relative' }}>
            <div
              ref={sidebarRef}
              style={
                sidebarFixed
                  ? { position: 'fixed', top: `${HEADER_HEIGHT + 24}px`, width: '260px', zIndex: 9 }
                  : { position: 'relative', top: 'auto', width: '100%', zIndex: 9 }
              }
            >
              <h3 style={{ fontSize: '0.78rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.75rem' }}>
                Quick Navigation
              </h3>
              <div style={{ display: 'grid', gap: '0.6rem' }}>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    style={{
                      background: activeSection === section.id ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.6)',
                      border: activeSection === section.id ? '2px solid rgba(15,23,42,0.06)' : '1px solid rgba(15,23,42,0.04)',
                      padding: '0.6rem 0.875rem',
                      borderRadius: '8px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontSize: '0.85rem',
                      fontWeight: activeSection === section.id ? 600 : 500,
                      color: activeSection === section.id ? '#d97706' : '#475569',
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>{section.icon}</span>
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content area */}
        <div ref={contentRef} style={{ display: 'grid', gap: '1.5rem' }}>

          {/* Overview */}
          <div id="overview" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>📖</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Welcome to M-Gym Documentation</h2>
            </div>
            <div>
              <p style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem'}}>
                M-Gym is a comprehensive gym management platform designed to streamline operations, boost revenue, and enhance member experiences. This documentation provides everything you need to get started and make the most of our powerful tools.
              </p>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16}}>
                <div style={{background: 'linear-gradient(135deg, rgba(255,122,26,0.1), rgba(255,90,0,0.05))', padding: 20, borderRadius: 12, border: '1px solid rgba(255,122,26,0.2)'}}>
                  <div style={{fontSize: 28, marginBottom: 12}}>💳</div>
                  <h4 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 700, color: '#92400e'}}>Automated Payments</h4>
                  <p style={{fontSize: '0.9rem', lineHeight: 1.5, color: '#4a5568'}}>Never chase payments again. Support for M-Pesa, cash, cards, and bank transfers.</p>
                </div>
                <div style={{background: 'linear-gradient(135deg, rgba(255,122,26,0.1), rgba(255,90,0,0.05))', padding: 20, borderRadius: 12, border: '1px solid rgba(255,122,26,0.2)'}}>
                  <div style={{fontSize: 28, marginBottom: 12}}>🏋️</div>
                  <h4 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 700, color: '#92400e'}}>Class Management</h4>
                  <p style={{fontSize: '0.9rem', lineHeight: 1.5, color: '#4a5568'}}>Easy class booking, scheduling, and real-time availability updates.</p>
                </div>
                <div style={{background: 'linear-gradient(135deg, rgba(255,122,26,0.1), rgba(255,90,0,0.05))', padding: 20, borderRadius: 12, border: '1px solid rgba(255,122,26,0.2)'}}>
                  <div style={{fontSize: 28, marginBottom: 12}}>📊</div>
                  <h4 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 700, color: '#92400e'}}>Business Analytics</h4>
                  <p style={{fontSize: '0.9rem', lineHeight: 1.5, color: '#4a5568'}}>Track revenue, member engagement, and business performance in real-time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div id="getting-started" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>🚀</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Getting Started with M-Gym</h2>
            </div>
            <div>
              <div style={{display: 'grid', gap: '1.5rem'}}>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 700, color: '#92400e'}}>1. Account Setup</h4>
                  <p style={{color: '#475569', lineHeight: 1.6}}>Create your gym account and configure your basic settings including gym name, location, and contact information.</p>
                </div>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 700, color: '#92400e'}}>2. Member Management</h4>
                  <p style={{color: '#475569', lineHeight: 1.6}}>Add your existing members or set up member registration forms. Configure membership plans and pricing.</p>
                </div>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 700, color: '#92400e'}}>3. Schedule Classes</h4>
                  <p style={{color: '#475569', lineHeight: 1.6}}>Create class schedules, set up recurring classes, and configure instructor assignments.</p>
                </div>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 700, color: '#92400e'}}>4. Payment Integration</h4>
                  <p style={{color: '#475569', lineHeight: 1.6}}>Connect your payment methods including M-Pesa integration, card processing, and bank transfers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Guide */}
          <div id="features" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>⚙️</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Features Guide</h2>
            </div>
            <div>
              <div style={{display: 'grid', gap: '2rem'}}>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 700, color: '#92400e'}}>💳 Automated Payments</h4>
                  <p style={{color: '#475569', lineHeight: 1.6, marginBottom: '1rem'}}>Eliminate payment chasing with automated collection via multiple channels:</p>
                  <ul style={{color: '#475569', paddingLeft: '1.5rem'}}>
                    <li>M-Pesa integration for instant payments</li>
                    <li>Credit/debit card processing</li>
                    <li>Bank transfer tracking</li>
                    <li>Cash payment logging</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 700, color: '#92400e'}}>🏋️ Class Management</h4>
                  <p style={{color: '#475569', lineHeight: 1.6, marginBottom: '1rem'}}>Streamline class operations with comprehensive booking tools:</p>
                  <ul style={{color: '#475569', paddingLeft: '1.5rem'}}>
                    <li>Real-time class scheduling</li>
                    <li>Automated booking confirmations</li>
                    <li>Waitlist management</li>
                    <li>Instructor assignment</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 700, color: '#92400e'}}>🎯 Progress Tracking</h4>
                  <p style={{color: '#475569', lineHeight: 1.6, marginBottom: '1rem'}}>Keep members motivated with detailed progress monitoring:</p>
                  <ul style={{color: '#475569', paddingLeft: '1.5rem'}}>
                    <li>Weight and measurement logging</li>
                    <li>Workout history tracking</li>
                    <li>Personalized goal setting</li>
                    <li>Progress visualization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* API Reference */}
          <div id="api" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>🔌</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>API Reference</h2>
            </div>
            <div>
              <div style={{background: 'rgba(0,0,0,0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
                <strong>Base URL:</strong> <code>https://api.m-gym.com/v1</code>
              </div>
              <div style={{display: 'grid', gap: '1.5rem'}}>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700, color: '#92400e'}}>Authentication</h4>
                  <p style={{color: '#475569', lineHeight: 1.6}}>All API requests require authentication via Bearer token in the Authorization header.</p>
                  <code style={{display: 'block', background: 'rgba(0,0,0,0.05)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.9rem'}}>
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700, color: '#92400e'}}>Endpoints</h4>
              <div style={{display: 'grid', gap: '0.25rem'}}>
                    <div style={{background: 'rgba(0,0,0,0.05)', padding: '0.75rem', borderRadius: '4px'}}>
                      <code style={{fontWeight: 600}}>GET /members</code> - Retrieve member list
                    </div>
                    <div style={{background: 'rgba(0,0,0,0.05)', padding: '0.75rem', borderRadius: '4px'}}>
                      <code style={{fontWeight: 600}}>POST /payments</code> - Process payments
                    </div>
                    <div style={{background: 'rgba(0,0,0,0.05)', padding: '0.75rem', borderRadius: '4px'}}>
                      <code style={{fontWeight: 600}}>GET /classes</code> - Get class schedule
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tutorials */}
          <div id="tutorials" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>🎓</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Video Tutorials & Guides</h2>
            </div>
            <div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem'}}>
                <div style={{background: 'rgba(255,122,26,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,122,26,0.2)'}}>
                  <div style={{fontSize: 32, marginBottom: 12}}>🎬</div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700, color: '#92400e'}}>Quick Start Guide</h4>
                  <p style={{color: '#475569', lineHeight: 1.6}}>5-minute setup walkthrough for new users</p>
                </div>
                <div style={{background: 'rgba(255,122,26,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,122,26,0.2)'}}>
                  <div style={{fontSize: 32, marginBottom: 12}}>📱</div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700, color: '#92400e'}}>Member App Tutorial</h4>
                  <p style={{color: '#475569', lineHeight: 1.6}}>How members can book classes and track progress</p>
                </div>
                <div style={{background: 'rgba(255,122,26,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,122,26,0.2)'}}>
                  <div style={{fontSize: 32, marginBottom: 12}}>📊</div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700, color: '#92400e'}}>Dashboard Analytics</h4>
                  <p style={{color: '#475569', lineHeight: 1.6}}>Understanding your business metrics</p>
                </div>
                <div style={{background: 'rgba(255,122,26,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,122,26,0.2)'}}>
                  <div style={{fontSize: 32, marginBottom: 12}}>🔧</div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700, color: '#92400e'}}>Advanced Configuration</h4>
                  <p style={{color: '#475569', lineHeight: 1.6}}>Customizing settings for your gym's needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>❓</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Frequently Asked Questions</h2>
            </div>
            <div>
              <div style={{display: 'grid', gap: '0'}}>
                <details style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', padding: '1rem', margin: 0}}>
                  <summary style={{fontWeight: 600, color: '#92400e', cursor: 'pointer'}}>How do I add new members?</summary>
                  <p style={{color: '#475569', lineHeight: 1.6, marginTop: '0.5rem'}}>Go to the Members section in your dashboard, click "Add Member", and fill in their details. You can also share a registration link for self-signup.</p>
                </details>
                <details style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', padding: '1rem', margin: 0}}>
                  <summary style={{fontWeight: 600, color: '#92400e', cursor: 'pointer'}}>What payment methods are supported?</summary>
                  <p style={{color: '#475569', lineHeight: 1.6, marginTop: '0.5rem'}}>We support M-Pesa, credit/debit cards, bank transfers, and cash payments. All transactions are securely processed and tracked.</p>
                </details>
                <details style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', padding: '1rem', margin: 0}}>
                  <summary style={{fontWeight: 600, color: '#92400e', cursor: 'pointer'}}>Can members book classes through the app?</summary>
                  <p style={{color: '#475569', lineHeight: 1.6, marginTop: '0.5rem'}}>Yes! Members can view available classes, book spots, and receive confirmation notifications all through the mobile app.</p>
                </details>
                <details style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', padding: '1rem', margin: 0}}>
                  <summary style={{fontWeight: 600, color: '#92400e', cursor: 'pointer'}}>How do I set up automated payments?</summary>
                  <p style={{color: '#475569', lineHeight: 1.6, marginTop: '0.5rem'}}>Navigate to Settings {'>'} Payments and connect your preferred payment methods. You can set up recurring billing for memberships.</p>
                </details>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div id="troubleshooting" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>🔧</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Troubleshooting Guide</h2>
            </div>
            <div>
              <div style={{display: 'grid', gap: '1.5rem'}}>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 700, color: '#92400e'}}>Common Issues</h4>
              <div style={{display: 'grid', gap: '0.5rem'}}>
                    <div style={{background: 'rgba(255,236,236,0.5)', border: '1px solid rgba(255,0,0,0.2)', padding: '1rem', borderRadius: '8px'}}>
                      <strong>M-Pesa payments not processing:</strong> Check your API credentials and ensure your account is verified with Safaricom.
                    </div>
                    <div style={{background: 'rgba(255,236,236,0.5)', border: '1px solid rgba(255,0,0,0.2)', padding: '1rem', borderRadius: '8px'}}>
                      <strong>Class bookings not updating:</strong> Clear your browser cache and ensure you're using the latest app version.
                    </div>
                    <div style={{background: 'rgba(255,236,236,0.5)', border: '1px solid rgba(255,0,0,0.2)', padding: '1rem', borderRadius: '8px'}}>
                      <strong>Member app login issues:</strong> Reset passwords through the admin dashboard or contact support.
                    </div>
                  </div>
                </div>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 700, color: '#92400e'}}>Contact Support</h4>
                  <p style={{color: '#475569', lineHeight: 1.6}}>
                    If you're still experiencing issues, our support team is here to help. Contact us at support@m-gym.com or call +254111014100.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}