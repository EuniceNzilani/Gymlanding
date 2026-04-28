'use client'

import { useState, useEffect } from 'react'

export default function Privacy() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState('data-protection')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const sections = [
    { id: 'data-protection', icon: '🛡️', label: 'Data Protection' },
    { id: 'data-collection', icon: '📋', label: 'Data Collection' },
    { id: 'data-usage', icon: '👥', label: 'Data Usage' },
    { id: 'data-sharing', icon: '🔄', label: 'Data Sharing' },
    { id: 'your-rights', icon: '👁️', label: 'Your Rights' },
    { id: 'data-retention', icon: '🗑️', label: 'Data Retention' },
    { id: 'policy-updates', icon: 'ℹ️', label: 'Policy Updates' },
  ]

  return (
    <div id="privacy" style={{ backgroundColor: '#ffd9b3', paddingTop: 0, paddingBottom: '3rem' }}>

      {/* Header Section */}
      <div style={{ backgroundColor: 'rgba(226, 232, 240, 0.7)', paddingTop: isMobile ? '2rem' : '3rem', paddingBottom: isMobile ? '2rem' : '3rem', marginBottom: '2rem', borderBottom: '1px solid #e5e7eb', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <button
              onClick={() => window.location.assign('/#home')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.5rem',
                color: '#CC5500',
                padding: '0.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(204,85,0,0.1)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'none')}
              aria-label="Go back"
            >
              ←
            </button>
            <div style={{ display: 'inline-block', backgroundColor: '#d1f4e0', padding: '0.5rem 1rem', borderRadius: '20px' }}>
              <span style={{ color: '#CC5500', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🔒 Privacy Policy
              </span>
            </div>
          </div>
          <h1 style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: 800, color: '#1e293b', margin: '1rem 0', marginTop: 0 }}>
            How M-Gym Protects and Manages Your Personal Data
          </h1>
          <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', color: '#64748b', lineHeight: 1.6, maxWidth: 700, margin: '0 auto' }}>
            This Privacy Policy outlines our commitment to protecting your personal information and explains how we collect, use, and safeguard your data when you use our services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2rem', paddingTop: isMobile ? '1.5rem' : '18rem', position: 'relative' }}>



        {/* Mobile Navigation */}
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
                  color: activeSection === section.id ? '#CC5500' : '#475569',
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

        {!isMobile && (
          <div style={{ position: 'sticky', top: '18rem', left: 'calc(50vw - 600px + 2rem)', width: '280px', zIndex: 5 }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#CC5500', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1rem' }}>
              Quick Navigation
            </h3>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  style={{
                    background: activeSection === section.id ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.6)',
                    border: activeSection === section.id ? '2px solid rgba(15, 23, 42, 0.06)' : '1px solid rgba(15, 23, 42, 0.04)',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.9rem',
                    fontWeight: activeSection === section.id ? 600 : 500,
                    color: activeSection === section.id ? '#CC5500' : '#475569',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content Area */}
        <div style={{ display: 'grid', gap: '1.5rem', marginLeft: !isMobile ? '320px' : '0' }}>

          {/* Data Protection */}
          <div id="data-protection" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>🛡️</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Data Protection</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              We implement robust security measures to protect your personal data:
            </p>
            <ul style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem' }}>
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection best practices</li>
              <li>Incident response plan for data breaches</li>
            </ul>
          </div>

          {/* Data Collection */}
          <div id="data-collection" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>📋</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Data Collection</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              We collect various types of information to provide and improve our services:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: '1.25rem', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>Personal Information</h4>
                <ul style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0, paddingLeft: '1.25rem', display: 'grid', gap: '0.5rem' }}>
                  <li>Name, email, phone number</li>
                  <li>Billing and payment details</li>
                  <li>Service usage preferences</li>
                </ul>
              </div>
              <div style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: '1.25rem', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>Technical Data</h4>
                <ul style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0, paddingLeft: '1.25rem', display: 'grid', gap: '0.5rem' }}>
                  <li>IP addresses and device information</li>
                  <li>Network performance metrics</li>
                  <li>Service usage logs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div id="data-usage" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>👥</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Data Usage</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              We use your information for the following purposes:
            </p>
            <ul style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem' }}>
              <li>To provide and improve our gym management services</li>
              <li>To process transactions and send related information</li>
              <li>To enhance service quality and performance</li>
              <li>To comply with legal obligations</li>
              <li>To personalize your experience</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div id="data-sharing" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>🔄</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Data Sharing</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              We may share your information in these limited circumstances:
            </p>
            <ul style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem' }}>
              <li>With payment processors for transaction completion</li>
              <li>With service providers who assist our operations (under confidentiality agreements)</li>
              <li>When required by law or legal process</li>
              <li>During business transfers like mergers or acquisitions</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>
          </div>

          {/* Your Rights */}
          <div id="your-rights" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>👁️</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Your Rights</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              You have the following rights regarding your personal data:
            </p>
            <ul style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem' }}>
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to request deletion of your data</li>
              <li>Right to restrict processing of your data</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div id="data-retention" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>🗑️</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Data Retention</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              We retain your personal data for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. The retention period varies depending on the type of data and our legal obligations.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7 }}>
              Once your data is no longer needed, we securely delete or anonymize it according to our data retention schedule.
            </p>
          </div>

          {/* Policy Updates */}
          <div id="policy-updates" style={{ backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem' }}>ℹ️</span>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Policy Updates</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              We reserve the right to modify this Privacy Policy at any time. Changes and clarifications will take effect immediately upon their posting to the website.
            </p>
            <div style={{ backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #CC5500', marginTop: '1rem' }}>
              <p style={{ fontSize: '0.9rem', color: '#065f46', fontWeight: 600, marginBottom: '0.5rem' }}>📧 Contact Us</p>
              <p style={{ fontSize: '0.9rem', color: '#065f46', margin: '0.25rem 0' }}>Email: support@mzalendofiber.co.ke</p>
              <p style={{ fontSize: '0.9rem', color: '#065f46', margin: '0.25rem 0' }}>Phone: +254111014100</p>
              <p style={{ fontSize: '0.9rem', color: '#065f46', margin: 0 }}>Address: Nairobi, Kenya</p>
            </div>
          </div>

        </div>{/* end Content Area */}


      </div>{/* end Main Content */}
    </div> /* end #privacy */
  )
}