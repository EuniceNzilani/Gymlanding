"use client"

export default function Features() {
  return (
    <section id="features" style={{padding: '3.5rem 1rem', width: '100%', boxSizing: 'border-box', background: '#ffd4a3'}}>
      <div style={{maxWidth: 1100, margin: '0 auto', padding: '2rem'}}>
        {/* Header */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 28}}>
          <div>
            <h2 style={{margin: 0, fontSize: '1.8rem', fontWeight: 900, color: '#0f172a'}}>Powerful Features 💪</h2>
            <p style={{marginTop: 8, color: '#64748b', maxWidth: 600, lineHeight: 1.5}}>Everything you need to run a thriving gym business</p>
          </div>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16}}>
          {/* Card 1 */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', padding: 20, borderRadius: 12, boxShadow: '0 15px 35px rgba(2,6,23,0.12)', border: '1px solid rgba(255,255,255,0.16)', color: '#0f172a'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>📈</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Dashboard</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Track revenue and growth with charts. Monitor your gym performance in real-time from anywhere.</p>
          </div>

          {/* Card 2 */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>💰</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Payment Tracking</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Never chase payments again. M-Pesa, cash, card, and bank transfers all in one place.</p>
          </div>

          {/* Card 3 */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>👔</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Staff Control</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Add staff, set permissions, and track performance. Manage your team efficiently with role-based access.</p>
          </div>

          {/* Card 4 */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>📋</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Plans & Pricing</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Create custom membership plans. Flexible pricing that works for your gym and your members.</p>
          </div>

          {/* Card 5 */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>🏃</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Workouts & Diet</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Create programs and meal plans for your members. Help them achieve their fitness goals faster.</p>
          </div>

          {/* Card 6 */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>📝</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Activity Log</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Track all gym activities automatically. Keep records of member attendance and engagement.</p>
          </div>

          {/* Card 7 */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>📣</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Announcements</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Schedule and send messages to your members. Keep them engaged and informed about events.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
