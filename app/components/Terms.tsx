'use client'

import { useState, useEffect } from 'react'

export default function Terms() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState('usage-rights')

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
    { id: 'usage-rights', icon: '⚖️', label: 'Usage Rights' },
    { id: 'acceptable-use', icon: '✅', label: 'Acceptable Use' },
    { id: 'service-limitations', icon: '📋', label: 'Service Limitations' },
    { id: 'liability', icon: '🛡️', label: 'Liability Limitations' },
    { id: 'intellectual-property', icon: '©️', label: 'Intellectual Property' },
    { id: 'user-obligations', icon: '👤', label: 'User Obligations' },
    { id: 'termination', icon: '🔚', label: 'Termination' },
  ]

  return (
    <div id="terms" style={{backgroundColor: '#ffd9b3', paddingTop: isMobile ? '1.5rem' : '3rem', paddingBottom: '3rem'}}>
      {/* Header Section */}
      <div style={{backgroundColor: '#ffffff', paddingTop: isMobile ? '2rem' : '3rem', paddingBottom: isMobile ? '2rem' : '3rem', marginBottom: '2rem', borderBottom: '1px solid #e5e7eb'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2rem', textAlign: 'center'}}>
          <div style={{display: 'inline-block', backgroundColor: '#fef3c7', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: '1rem'}}>
            <span style={{color: '#d97706', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              ⚖️ Terms of Service
            </span>
          </div>
          <h1 style={{fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: 800, color: '#1e293b', margin: '1rem 0', marginTop: 0}}>
            Terms and Conditions
          </h1>
          <p style={{fontSize: isMobile ? '0.9rem' : '1rem', color: '#64748b', lineHeight: 1.6, maxWidth: 700, margin: '0 auto'}}>
            Please read these terms and conditions carefully before using M-Gym services. By accessing or using our platform, you agree to be bound by these terms.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2rem', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '280px 1fr', gap: isMobile ? '1.5rem' : '2rem'}}>
        
        {/* Sidebar Navigation */}
        {!isMobile && (
          <div>
            <div style={{position: 'sticky', top: '2rem'}}>
              <h3 style={{fontSize: '0.85rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1rem'}}>
                Quick Navigation
              </h3>
              <div style={{display: 'grid', gap: '0.75rem'}}>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    style={{
                      background: activeSection === section.id ? '#fef3c7' : '#ffffff',
                      border: activeSection === section.id ? '2px solid #d97706' : '1px solid #e5e7eb',
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
                      color: activeSection === section.id ? '#d97706' : '#475569',
                    }}
                  >
                    <span style={{fontSize: '1.1rem'}}>{section.icon}</span>
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <div style={{marginBottom: '1.5rem', overflowX: 'auto', display: 'flex', gap: '0.5rem', paddingBottom: '0.5rem'}}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  background: activeSection === section.id ? '#d97706' : '#ffffff',
                  border: '1px solid #e5e7eb',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: activeSection === section.id ? 600 : 500,
                  color: activeSection === section.id ? '#ffffff' : '#475569',
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

        {/* Content Area */}
        <div style={{display: 'grid', gap: '1.5rem'}}>
          {/* Usage Rights */}
          <div id="usage-rights" style={{backgroundColor: '#ffffff', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>⚖️</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Usage Rights</h2>
            </div>
            <p style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem'}}>
              M-Gym grants you a limited, non-exclusive, non-transferable license to access and use our services for lawful business purposes. You may not:
            </p>
            <ul style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem'}}>
              <li>Sublicense, reproduce, or modify the service</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the service for unauthorized commercial purposes</li>
              <li>Remove any proprietary notices or labels</li>
              <li>Reverse engineer or decompile our software</li>
            </ul>
          </div>

          {/* Acceptable Use */}
          <div id="acceptable-use" style={{backgroundColor: '#ffffff', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>✅</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Acceptable Use Policy</h2>
            </div>
            <p style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem'}}>
              You agree to use M-Gym in compliance with all applicable laws and regulations:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem'}}>
              <div style={{backgroundColor: '#f9fafb', padding: '1.25rem', borderRadius: '8px'}}>
                <h4 style={{fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem'}}>Prohibited Activities</h4>
                <ul style={{fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginLeft: '1.25rem', display: 'grid', gap: '0.5rem', margin: 0, paddingLeft: '1.25rem'}}>
                  <li>Illegal or fraudulent activities</li>
                  <li>Harassment or discrimination</li>
                  <li>Unauthorized data access</li>
                </ul>
              </div>
              <div style={{backgroundColor: '#f9fafb', padding: '1.25rem', borderRadius: '8px'}}>
                <h4 style={{fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem'}}>Required Conduct</h4>
                <ul style={{fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginLeft: '1.25rem', display: 'grid', gap: '0.5rem', margin: 0, paddingLeft: '1.25rem'}}>
                  <li>Use their own credentials</li>
                  <li>Maintain confidentiality</li>
                  <li>Report security issues immediately</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Limitations */}
          <div id="service-limitations" style={{backgroundColor: '#ffffff', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>📋</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Service Limitations</h2>
            </div>
            <p style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem'}}>
              M-Gym provides services on an "as-is" basis. We do not guarantee:
            </p>
            <ul style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem'}}>
              <li>Uninterrupted or error-free service operation</li>
              <li>Compatibility with all devices or systems</li>
              <li>Specific business results from using our platform</li>
              <li>Accuracy of all data processed through the service</li>
              <li>24/7 availability without maintenance windows</li>
            </ul>
          </div>

          {/* Liability Limitations */}
          <div id="liability" style={{backgroundColor: '#ffffff', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>🛡️</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Liability Limitations</h2>
            </div>
            <p style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem'}}>
              To the maximum extent permitted by law, M-Gym shall not be liable for:
            </p>
            <ul style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem'}}>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Data loss or corruption of user information</li>
              <li>Third-party claims related to service use</li>
              <li>Business interruption or lost profits</li>
              <li>Damages exceeding fees paid in the last 12 months</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div id="intellectual-property" style={{backgroundColor: '#ffffff', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>©️</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Intellectual Property Rights</h2>
            </div>
            <p style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem'}}>
              M-Gym retains all intellectual property rights to the platform, software, and materials:
            </p>
            <ul style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem'}}>
              <li>All logos, trademarks, and branding are our exclusive property</li>
              <li>Users retain rights to their own data and content</li>
              <li>No license is granted for commercial use of our materials</li>
              <li>Copyright and trademark protections remain in effect</li>
            </ul>
          </div>

          {/* User Obligations */}
          <div id="user-obligations" style={{backgroundColor: '#ffffff', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>👤</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>User Obligations</h2>
            </div>
            <p style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem'}}>
              Users are responsible for:
            </p>
            <ul style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem'}}>
              <li>Maintaining accurate account information</li>
              <li>Protecting account credentials and login information</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Reporting unauthorized account access immediately</li>
              <li>Using the service in accordance with these terms</li>
              <li>Indemnifying M-Gym from misuse or violations</li>
            </ul>
          </div>

          {/* Termination */}
          <div id="termination" style={{backgroundColor: '#ffffff', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>🔚</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Termination of Service</h2>
            </div>
            <p style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem'}}>
              Either M-Gym or the user may terminate the service relationship:
            </p>
            <ul style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginLeft: '1.5rem', display: 'grid', gap: '0.75rem', marginBottom: '1.5rem'}}>
              <li>Users may cancel their account at any time through account settings</li>
              <li>M-Gym may suspend access for terms violations</li>
              <li>M-Gym may terminate for prolonged inactivity (90+ days)</li>
              <li>Payment subscribers may request refunds per our refund policy</li>
            </ul>
            <div style={{backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #d97706', marginTop: '1rem'}}>
              <p style={{fontSize: '0.9rem', color: '#78350f', fontWeight: 600, marginBottom: '0.5rem'}}>📧 Questions about these Terms?</p>
              <p style={{fontSize: '0.9rem', color: '#78350f', margin: '0.25rem 0'}}>Email: support@mzalendofiber.co.ke</p>
              <p style={{fontSize: '0.9rem', color: '#78350f', margin: '0.25rem 0'}}>Phone: +254111014100</p>
              <p style={{fontSize: '0.9rem', color: '#78350f', margin: 0}}>Address: Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
