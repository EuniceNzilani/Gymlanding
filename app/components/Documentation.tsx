"use client"

import { useState, useEffect } from 'react'

export default function Documentation() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')

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
    { id: 'overview', icon: '📖', label: 'Overview' },
    { id: 'getting-started', icon: '🚀', label: 'Getting Started' },
    { id: 'features', icon: '⚙️', label: 'Features Guide' },
    { id: 'api', icon: '🔌', label: 'API Reference' },
    { id: 'tutorials', icon: '🎓', label: 'Tutorials' },
    { id: 'faq', icon: '❓', label: 'FAQ' },
    { id: 'troubleshooting', icon: '🔧', label: 'Troubleshooting' }
  ]

  return (
    <div id="documentation" style={{backgroundColor: '#ffd9b3', paddingTop: isMobile ? '1.5rem' : '3rem', paddingBottom: '3rem'}}>
      {/* Header Section */}
      <div style={{backgroundColor: 'rgba(226,232,240,0.7)', paddingTop: isMobile ? '2rem' : '3rem', paddingBottom: isMobile ? '2rem' : '3rem', marginBottom: '2rem', borderBottom: '1px solid #e5e7eb'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2rem', textAlign: 'center'}}>
          <div style={{display: 'inline-block', backgroundColor: '#fef3c7', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: '1rem'}}>
            <span style={{color: '#d97706', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              📚 Documentation
            </span>
          </div>
          <h1 style={{fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: 800, color: '#1e293b', margin: '1rem 0', marginTop: 0}}>
            M-Gym Documentation
          </h1>
          <p style={{fontSize: isMobile ? '0.9rem' : '1rem', color: '#64748b', lineHeight: 1.6, maxWidth: 700, margin: '0 auto'}}>
            Comprehensive guides and resources to help you maximize your gym management platform
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
                      background: activeSection === section.id ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.6)',
                      border: activeSection === section.id ? '2px solid rgba(15,23,42,0.06)' : '1px solid rgba(15,23,42,0.04)',
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

        {/* Content Area */}
        <div style={{display: 'grid', gap: '1.5rem'}}>

          {/* Overview */}
          <div id="overview" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>📖</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Welcome to M-Gym Documentation</h2>
            </div>
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

          {/* Getting Started */}
          <div id="getting-started" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>🚀</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Getting Started with M-Gym</h2>
            </div>
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

          {/* Features Guide */}
          <div id="features" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>⚙️</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Features Guide</h2>
            </div>
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

          {/* API Reference */}
          <div id="api" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>🔌</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>API Reference</h2>
            </div>
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
                <div style={{display: 'grid', gap: '0.5rem'}}>
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

          {/* Tutorials */}
          <div id="tutorials" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>🎓</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Video Tutorials & Guides</h2>
            </div>
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

          {/* FAQ */}
          <div id="faq" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>❓</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Frequently Asked Questions</h2>
            </div>
            <div style={{display: 'grid', gap: '1rem'}}>
              <details style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', padding: '1rem'}}>
                <summary style={{fontWeight: 600, color: '#92400e', cursor: 'pointer'}}>How do I add new members?</summary>
                <p style={{color: '#475569', lineHeight: 1.6, marginTop: '0.5rem'}}>Go to the Members section in your dashboard, click "Add Member", and fill in their details. You can also share a registration link for self-signup.</p>
              </details>
              <details style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', padding: '1rem'}}>
                <summary style={{fontWeight: 600, color: '#92400e', cursor: 'pointer'}}>What payment methods are supported?</summary>
                <p style={{color: '#475569', lineHeight: 1.6, marginTop: '0.5rem'}}>We support M-Pesa, credit/debit cards, bank transfers, and cash payments. All transactions are securely processed and tracked.</p>
              </details>
              <details style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', padding: '1rem'}}>
                <summary style={{fontWeight: 600, color: '#92400e', cursor: 'pointer'}}>Can members book classes through the app?</summary>
                <p style={{color: '#475569', lineHeight: 1.6, marginTop: '0.5rem'}}>Yes! Members can view available classes, book spots, and receive confirmation notifications all through the mobile app.</p>
              </details>
              <details style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', padding: '1rem'}}>
                <summary style={{fontWeight: 600, color: '#92400e', cursor: 'pointer'}}>How do I set up automated payments?</summary>
                <p style={{color: '#475569', lineHeight: 1.6, marginTop: '0.5rem'}}>Navigate to Settings {'>'} Payments and connect your preferred payment methods. You can set up recurring billing for memberships.</p>
              </details>
            </div>
          </div>

          {/* Troubleshooting */}
          <div id="troubleshooting" style={{backgroundColor: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', scrollMarginTop: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem'}}>
              <span style={{fontSize: '1.75rem'}}>🔧</span>
              <h2 style={{fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#1e293b', margin: 0}}>Troubleshooting Guide</h2>
            </div>
            <div style={{display: 'grid', gap: '1.5rem'}}>
              <div>
                <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 700, color: '#92400e'}}>Common Issues</h4>
                <div style={{display: 'grid', gap: '1rem'}}>
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
  )
}
