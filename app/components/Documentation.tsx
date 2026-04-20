"use client"

export default function Documentation() {
  return (
    <section style={{padding: '3.5rem 1rem', maxWidth: 1200, margin: '0 auto', background: 'transparent'}}>
      <div style={{maxWidth: 1100, margin: '0 auto', padding: '2rem'}}>
        {/* Header */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 28}}>
          <div>
            <h2 style={{margin: 0, fontSize: '1.8rem', fontWeight: 900, color: '#92400e'}}>Expo Gym 💪</h2>
            <p style={{marginTop: 8, color: '#7a3513', maxWidth: 600, lineHeight: 1.5}}>Transform Your Gym Into a Money-Making Machine While Your Members Get Fitter Than Ever</p>
          </div>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16}}>
          {/* Card 1 - Highlighted */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', padding: 20, borderRadius: 12, boxShadow: '0 15px 35px rgba(2,6,23,0.12)', border: '1px solid rgba(255,255,255,0.16)', color: '#0f172a'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>💳</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Automated Payments</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Never chase payments again. M-Pesa, cash, card, bank transfer. Members forgetting to pay costs you thousands monthly—stop it.</p>
            {/* button removed */}
          </div>

          {/* Card 2 */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>🏋️</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Class Booking</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Find and book classes in 2 taps. Empty classes because nobody knows the schedule? Real-time scheduling and alerts solve this.</p>
            {/* button removed */}
          </div>

          {/* Card 3 */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>🎯</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Progress Tracking</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Log weight, measurements, see real results. Members quit when they see no progress. Track and celebrate wins together.</p>
            {/* button removed */}
          </div>

          {/* Card 4 */}
          <div style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}>
            <div style={{fontSize: 32, marginBottom: 12}}>📊</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Business Dashboard</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Track revenue, active members, payment status at a glance. Manage from anywhere. Staff coordination and real-time insights.</p>
            {/* button removed */}
          </div>
        </div>

        {/* Bottom CTA removed per request */}
      </div>
    </section>
  )
}
