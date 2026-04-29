'use client'

import { useState, useEffect, useRef } from 'react'

export default function Terms() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState('usage-rights')
  const [sidebarFixed, setSidebarFixed] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const HEADER_HEIGHT = 100 // compact header height in px

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

  const sections = [
    { id: 'usage-rights', icon: '⚖️', label: 'Usage Rights' },
    { id: 'acceptable-use', icon: '✅', label: 'Acceptable Use' },
    { id: 'service-limitations', icon: '📋', label: 'Service Limitations' },
    { id: 'liability', icon: '🛡️', label: 'Liability Limitations' },
    { id: 'intellectual-property', icon: '©️', label: 'Intellectual Property' },
    { id: 'user-obligations', icon: '👤', label: 'User Obligations' },
    { id: 'termination', icon: '🔚', label: 'Termination' },
  ]

  return (
    <div id="terms" style={{ backgroundColor: '#ffd9b3', paddingTop: 0, paddingBottom: '3rem' }}>

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
                ⚖️ Terms of Service
              </span>
            </div>
          </div>

          {/* Bottom row: title + subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: 800, color: '#1e293b', margin: 0, lineHeight: 1.2, textAlign: 'center' }}>
              Terms and Conditions
            </h1>
            {!isMobile && (
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.4, textAlign: 'center' }}>
                By using M-Gym services you agree to be bound by these terms.
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

        {/* Mobile horizontal nav */}
        {isMobile && (
          <div style={{ marginBottom: '1.5rem', overflowX: 'auto', display: 'flex', gap: '0.5rem', paddingBottom: '0.5rem' }}>
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

          {/* Usage Rights */}
          <div id="usage-rights" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>⚖️</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Usage Rights</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              M-Gym grants you a limited, non-exclusive, non-transferable license to access and use our services for lawful business purposes. You may not:
            </p>
            <ul style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem' }}>
              <li>Sublicense, reproduce, or modify the service</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the service for unauthorized commercial purposes</li>
              <li>Remove any proprietary notices or labels</li>
              <li>Reverse engineer or decompile our software</li>
            </ul>
          </div>

          {/* Acceptable Use */}
          <div id="acceptable-use" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>✅</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Acceptable Use Policy</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              You agree to use M-Gym in compliance with all applicable laws and regulations:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: '1.25rem', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>Prohibited Activities</h4>
                <ul style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, display: 'grid', gap: '0.5rem', margin: 0, paddingLeft: '1.25rem' }}>
                  <li>Illegal or fraudulent activities</li>
                  <li>Harassment or discrimination</li>
                  <li>Unauthorized data access</li>
                </ul>
              </div>
              <div style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: '1.25rem', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>Required Conduct</h4>
                <ul style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, display: 'grid', gap: '0.5rem', margin: 0, paddingLeft: '1.25rem' }}>
                  <li>Use their own credentials</li>
                  <li>Maintain confidentiality</li>
                  <li>Report security issues immediately</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Limitations */}
          <div id="service-limitations" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>📋</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Service Limitations</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              M-Gym provides services on an "as-is" basis. We do not guarantee:
            </p>
            <ul style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem' }}>
              <li>Uninterrupted or error-free service operation</li>
              <li>Compatibility with all devices or systems</li>
              <li>Specific business results from using our platform</li>
              <li>Accuracy of all data processed through the service</li>
              <li>24/7 availability without maintenance windows</li>
            </ul>
          </div>

          {/* Liability Limitations */}
          <div id="liability" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>🛡️</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Liability Limitations</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              To the maximum extent permitted by law, M-Gym shall not be liable for:
            </p>
            <ul style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem' }}>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Data loss or corruption of user information</li>
              <li>Third-party claims related to service use</li>
              <li>Business interruption or lost profits</li>
              <li>Damages exceeding fees paid in the last 12 months</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div id="intellectual-property" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>©️</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Intellectual Property Rights</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              M-Gym retains all intellectual property rights to the platform, software, and materials:
            </p>
            <ul style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem' }}>
              <li>All logos, trademarks, and branding are our exclusive property</li>
              <li>Users retain rights to their own data and content</li>
              <li>No license is granted for commercial use of our materials</li>
              <li>Copyright and trademark protections remain in effect</li>
            </ul>
          </div>

          {/* User Obligations */}
          <div id="user-obligations" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>👤</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>User Obligations</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              Users are responsible for:
            </p>
            <ul style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem' }}>
              <li>Maintaining accurate account information</li>
              <li>Protecting account credentials and login information</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Reporting unauthorized account access immediately</li>
              <li>Using the service in accordance with these terms</li>
              <li>Indemnifying M-Gym from misuse or violations</li>
            </ul>
          </div>

          {/* Termination */}
          <div id="termination" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>🔚</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Termination of Service</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              Either M-Gym or the user may terminate the service relationship:
            </p>
            <ul style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <li>Users may cancel their account at any time through account settings</li>
              <li>M-Gym may suspend access for terms violations</li>
              <li>M-Gym may terminate for prolonged inactivity (90+ days)</li>
              <li>Payment subscribers may request refunds per our refund policy</li>
            </ul>
            <div style={{ backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #d97706', marginTop: '1rem' }}>
              <p style={{ fontSize: '0.9rem', color: '#78350f', fontWeight: 600, marginBottom: '0.5rem' }}>📧 Questions about these Terms?</p>
              <p style={{ fontSize: '0.9rem', color: '#78350f', margin: '0.25rem 0' }}>Email: support@mzalendofiber.co.ke</p>
              <p style={{ fontSize: '0.9rem', color: '#78350f', margin: '0.25rem 0' }}>Phone: +254111014100</p>
              <p style={{ fontSize: '0.9rem', color: '#78350f', margin: 0 }}>Address: Nairobi, Kenya</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}