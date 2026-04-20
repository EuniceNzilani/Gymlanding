"use client"

import { useEffect, useState } from 'react'
import { AnimatedSection, AnimatedItem } from './AnimatedSection'

export default function Faqs() {
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
    <section id="faq" style={{background: '#ffd4a3', padding: isMobile ? '2rem 1rem' : '4rem 2rem', width: '100%', boxSizing: 'border-box'}}>
      <div style={{width: '100%', maxWidth: 900, margin: '0 auto'}}>
        <AnimatedSection direction="up" delay={0}>
          <div style={{marginBottom: '3rem', textAlign: 'center'}}>
            <h2 style={{fontSize: isMobile ? 'clamp(1.75rem, 6vw, 2.5rem)' : '2.5rem', margin: '0 0 1rem 0', color: '#0f172a', fontWeight: 900}}>Frequently Asked Questions</h2>
            <p style={{color: '#64748b', margin: 0, fontSize: isMobile ? '0.95rem' : '1.05rem'}}>Find answers to common questions about our platform</p>
          </div>
        </AnimatedSection>

        <div style={{display: 'grid', gap: '1.25rem'}}>
          <AnimatedItem delay={0.1}>
            <details style={{background: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.25rem' : '1.75rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'pointer', border: '1px solid #f1f5f9', transition: 'all 0.3s'}} open>
              <summary style={{fontWeight: 600, color: '#0f172a', fontSize: isMobile ? '0.95rem' : '1.05rem', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#ff8a00'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}>
                <span>How long does it take to set up?</span>
                <span style={{fontSize: isMobile ? '1rem' : '1.3rem', marginLeft: '1rem', flexShrink: 0}}>+</span>
              </summary>
              <p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6, marginBottom: 0, fontSize: isMobile ? '0.9rem' : '1rem'}}>
                Most gyms are fully operational within 24 hours. Our team provides onboarding support, and we have detailed documentation to guide you through every step.
              </p>
            </details>
          </AnimatedItem>

          <AnimatedItem delay={0.2}>
            <details style={{background: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.25rem' : '1.75rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'pointer', border: '1px solid #f1f5f9', transition: 'all 0.3s'}}>
              <summary style={{fontWeight: 600, color: '#0f172a', fontSize: isMobile ? '0.95rem' : '1.05rem', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#ff8a00'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}>
              <span>What payment methods do you accept?</span>
              <span style={{fontSize: isMobile ? '1rem' : '1.3rem', marginLeft: '1rem', flexShrink: 0}}>+</span>
            </summary>
            <p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6, marginBottom: 0, fontSize: isMobile ? '0.9rem' : '1rem'}}>
              We accept all major credit cards, bank transfers, and multiple payment gateways. Your members can pay via card, UPI, wallet, or recurring billing options.
            </p>
          </details>
          </AnimatedItem>

          <AnimatedItem delay={0.3}>
          <details style={{background: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.25rem' : '1.75rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'pointer', border: '1px solid #f1f5f9', transition: 'all 0.3s'}}>
            <summary style={{fontWeight: 600, color: '#0f172a', fontSize: isMobile ? '0.95rem' : '1.05rem', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#ff8a00'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}>
              <span>Is my data secure?</span>
              <span style={{fontSize: isMobile ? '1rem' : '1.3rem', marginLeft: '1rem', flexShrink: 0}}>+</span>
            </summary>
            <p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6, marginBottom: 0, fontSize: isMobile ? '0.9rem' : '1rem'}}>
              Yes, we use bank-level encryption (AES-256), comply with GDPR and local regulations, and perform regular security audits. Your member data is fully protected.
            </p>
          </details>
          </AnimatedItem>

          <AnimatedItem delay={0.4}>
          <details style={{background: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.25rem' : '1.75rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'pointer', border: '1px solid #f1f5f9', transition: 'all 0.3s'}}>
            <summary style={{fontWeight: 600, color: '#0f172a', fontSize: isMobile ? '0.95rem' : '1.05rem', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#ff8a00'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}>
              <span>Can I import my existing member data?</span>
              <span style={{fontSize: isMobile ? '1rem' : '1.3rem', marginLeft: '1rem', flexShrink: 0}}>+</span>
            </summary>
            <p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6, marginBottom: 0, fontSize: isMobile ? '0.9rem' : '1rem'}}>
              Absolutely! We support bulk import from Excel, CSV, and other gym management systems. Our support team can help with data migration at no extra cost.
            </p>
          </details>
          </AnimatedItem>

          <AnimatedItem delay={0.5}>
          <details style={{background: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.25rem' : '1.75rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'pointer', border: '1px solid #f1f5f9', transition: 'all 0.3s'}}>
            <summary style={{fontWeight: 600, color: '#0f172a', fontSize: isMobile ? '0.95rem' : '1.05rem', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#ff8a00'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}>
              <span>What support do you provide?</span>
              <span style={{fontSize: isMobile ? '1rem' : '1.3rem', marginLeft: '1rem', flexShrink: 0}}>+</span>
            </summary>
            <p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6, marginBottom: 0, fontSize: isMobile ? '0.9rem' : '1rem'}}>
              We offer email support, live chat during business hours, and a comprehensive knowledge base. Premium plans include phone support and a dedicated account manager.
            </p>
          </details>
          </AnimatedItem>

          <AnimatedItem delay={0.6}>
          <details style={{background: 'rgba(226,232,240,0.7)', padding: isMobile ? '1.25rem' : '1.75rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'pointer', border: '1px solid #f1f5f9', transition: 'all 0.3s'}}>
            <summary style={{fontWeight: 600, color: '#0f172a', fontSize: isMobile ? '0.95rem' : '1.05rem', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#ff8a00'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}>
              <span>Can I cancel anytime?</span>
              <span style={{fontSize: isMobile ? '1rem' : '1.3rem', marginLeft: '1rem', flexShrink: 0}}>+</span>
            </summary>
            <p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6, marginBottom: 0, fontSize: isMobile ? '0.9rem' : '1rem'}}>
              Yes, there are no long-term contracts. You can cancel your subscription anytime. We also offer a 30-day money-back guarantee so you can try risk-free.
            </p>
          </details>
          </AnimatedItem>
        </div>
      </div>
    </section>
  )
}
