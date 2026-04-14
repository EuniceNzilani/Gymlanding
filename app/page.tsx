export default function Page() {
	return (
		<main>
			<section
				id="home"
				style={{
					backgroundImage: "url('/background.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					'::before': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'rgba(255,255,255,0.85)',
						zIndex: 1
					}
				}}
			>
				<div style={{width: '100%', maxWidth: 1200, padding: '4rem 1.5rem', position: 'relative', zIndex: 2}}>
					<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', justifyContent: 'center'}}>
						<div style={{maxWidth: 900, background: 'rgba(255,255,255,0.95)', padding: '4rem', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.1)'}}>
							<div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
								<div style={{width: 64, height: 64, borderRadius: 14, background: 'linear-gradient(180deg,#ff8a00,#ff5e00)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(255,130,0,0.25)'}}>
									<span style={{fontSize: 28}}>💪</span>
								</div>
							</div>

							<div style={{fontSize: '0.85rem', fontWeight: 700, color: '#ff8a00', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Expo Gym 💪</div>

							<h1 style={{fontSize: '2.75rem', margin: '1.25rem 0 0.75rem', lineHeight: 1.2, color: '#0f172a', fontWeight: 900}}>
								Transform Your Gym Into a Money-Making Machine
							</h1>

							<div style={{color: '#334155', fontSize: '0.95rem', marginTop: '1.75rem', maxWidth: 600, lineHeight: 1.8}}>
								<div style={{fontWeight: 700, marginBottom: '1rem', color: '#0f172a'}}>Stop Losing Money &amp; Members Because Of:</div>
								<ul style={{listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem'}}>
									<li style={{display: 'flex', gap: '0.75rem'}}>
										<span style={{color: '#ff8a00', fontWeight: 600}}>❌</span>
										<span>Members forgetting to pay (costing you thousands monthly)</span>
									</li>
									<li style={{display: 'flex', gap: '0.75rem'}}>
										<span style={{color: '#ff8a00', fontWeight: 600}}>❌</span>
										<span>Empty classes because nobody knows the schedule</span>
									</li>
									<li style={{display: 'flex', gap: '0.75rem'}}>
										<span style={{color: '#ff8a00', fontWeight: 600}}>❌</span>
										<span>Spending hours on paperwork instead of growing your business</span>
									</li>
									<li style={{display: 'flex', gap: '0.75rem'}}>
										<span style={{color: '#ff8a00', fontWeight: 600}}>❌</span>
										<span>Members quitting because they see no progress</span>
									</li>
									<li style={{display: 'flex', gap: '0.75rem'}}>
										<span style={{color: '#ff8a00', fontWeight: 600}}>❌</span>
										<span>Staff confusion and miscommunication</span>
									</li>
								</ul>
							</div>

							<p style={{color: '#475569', fontSize: '1rem', marginTop: '1.75rem', maxWidth: 600, lineHeight: 1.6, fontWeight: 500}}>
								Get instant access on our powerful Android app. Manage your gym from anywhere, anytime.
							</p>

							<button style={{marginTop: '2.5rem', padding: '1rem 2.5rem', background: 'linear-gradient(135deg,#ff8a00,#ff5e00)', color: '#fff', border: 'none', borderRadius: 10, fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 12px 32px rgba(255,130,0,0.35)', transition: 'all 0.3s ease', hover: {transform: 'translateY(-2px)', boxShadow: '0 16px 40px rgba(255,130,0,0.45)'}}}>
								Start Free Trial
							</button>
						</div>
					</div>
				</div>
			</section>

				<section id="features" style={{background: '#fff7ed', padding: '5rem 1.5rem'}}>
					<div style={{width: '100%', maxWidth: 1200, margin: '0 auto'}}>
						<h2 style={{fontSize: '2rem', margin: 0, color: '#0f172a', fontWeight: 800}}>Features</h2>
						<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.75rem', alignItems: 'center'}}>
							{/* Left: image (use public/file.svg or replace with your image filename) */}
							<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
								<img src="/Features.png" alt="Gym Owners diagram" style={{width: '100%', maxWidth: 480, borderRadius: 12}} />
							</div>

							{/* Right: features content */}
							<div>
								<div style={{background: '#fff', padding: '1rem 1.25rem', borderRadius: 12, boxShadow: '0 8px 24px rgba(2,6,23,0.06)'}}>
									<h3 style={{margin: 0, fontSize: '1.125rem', color: '#0f172a'}}>For Gym Owners</h3>
									<ul style={{marginTop: '0.75rem', padding: 0, listStyle: 'none', color: '#334155', lineHeight: 1.6}}>
										<li>📈 <strong>Dashboard</strong> - Track revenue and growth with charts</li>
										<li>💰 <strong>Payment Tracking</strong> - Never chase payments again</li>
										<li>👔 <strong>Staff Control</strong> - Add staff, set permissions, track performance</li>
										<li>📋 <strong>Plans & Pricing</strong> - Create custom membership plans</li>
										<li>🏃 <strong>Workouts & Diet</strong> - Create programs and meal plans</li>
										<li>📝 <strong>Activity Log</strong> - Track all gym activities automatically</li>
										<li>📣 <strong>Announcements</strong> - Schedule and send messages</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

			{/* FAQs Section */}
			<section id="faq" style={{background: '#fed7aa', padding: '5rem 1.5rem'}}>
				<div style={{width: '100%', maxWidth: 900, margin: '0 auto'}}>
					<h2 style={{fontSize: '2rem', margin: '0 0 1rem 0', color: '#0f172a', fontWeight: 800, textAlign: 'center'}}>Frequently Asked Questions</h2>
					<p style={{textAlign: 'center', color: '#64748b', marginBottom: '3rem', fontSize: '1.05rem'}}>Find answers to common questions about our platform</p>

					<div style={{display: 'grid', gap: '1.5rem'}}>
						<details style={{background: '#fff', padding: '1.5rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(2,6,23,0.04)', cursor: 'pointer'}}>
							<summary style={{fontWeight: 600, color: '#0f172a', fontSize: '1.05rem', outline: 'none'}}>
								How long does it take to set up?
							</summary>
							<p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6}}>
								Most gyms are fully operational within 24 hours. Our team provides onboarding support, and we have detailed documentation to guide you through every step.
							</p>
						</details>

						<details style={{background: '#fff', padding: '1.5rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(2,6,23,0.04)', cursor: 'pointer'}}>
							<summary style={{fontWeight: 600, color: '#0f172a', fontSize: '1.05rem', outline: 'none'}}>
								What payment methods do you accept?
							</summary>
							<p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6}}>
								We accept all major credit cards, bank transfers, and multiple payment gateways. Your members can pay via card, UPI, wallet, or recurring billing options.
							</p>
						</details>

						<details style={{background: '#fff', padding: '1.5rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(2,6,23,0.04)', cursor: 'pointer'}}>
							<summary style={{fontWeight: 600, color: '#0f172a', fontSize: '1.05rem', outline: 'none'}}>
								Is my data secure?
							</summary>
							<p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6}}>
								Yes, we use bank-level encryption (AES-256), comply with GDPR and local regulations, and perform regular security audits. Your member data is fully protected.
							</p>
						</details>

						<details style={{background: '#fff', padding: '1.5rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(2,6,23,0.04)', cursor: 'pointer'}}>
							<summary style={{fontWeight: 600, color: '#0f172a', fontSize: '1.05rem', outline: 'none'}}>
								Can I import my existing member data?
							</summary>
							<p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6}}>
								Absolutely! We support bulk import from Excel, CSV, and other gym management systems. Our support team can help with data migration at no extra cost.
							</p>
						</details>

						<details style={{background: '#fff', padding: '1.5rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(2,6,23,0.04)', cursor: 'pointer'}}>
							<summary style={{fontWeight: 600, color: '#0f172a', fontSize: '1.05rem', outline: 'none'}}>
								What support do you provide?
							</summary>
							<p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6}}>
								We offer email support, live chat during business hours, and a comprehensive knowledge base. Premium plans include phone support and a dedicated account manager.
							</p>
						</details>

						<details style={{background: '#fff', padding: '1.5rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(2,6,23,0.04)', cursor: 'pointer'}}>
							<summary style={{fontWeight: 600, color: '#0f172a', fontSize: '1.05rem', outline: 'none'}}>
								Can I cancel anytime?
							</summary>
							<p style={{color: '#64748b', marginTop: '1rem', lineHeight: 1.6}}>
								Yes, there are no long-term contracts. You can cancel your subscription anytime. We also offer a 30-day money-back guarantee so you can try risk-free.
							</p>
						</details>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer style={{background: '#0f172a', color: '#e2e8f0', padding: '3rem 1.5rem'}}>
				<div style={{width: '100%', maxWidth: 1200, margin: '0 auto'}}>
					<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #334155'}}>
						<div>
							<h4 style={{color: '#fff', fontWeight: 700, marginBottom: '1rem', margin: '0 0 1rem 0'}}>Gym</h4>
							<p style={{color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, margin: 0}}>
								Transform your gym business with powerful management tools designed for modern fitness studios.
							</p>
						</div>
						<div>
							<h4 style={{color: '#fff', fontWeight: 700, margin: '0 0 1rem 0'}}>Product</h4>
							<ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem'}}>
								<li><a href="#features" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>Features</a></li>
								<li><a href="#faq" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>FAQ</a></li>
								<li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>Pricing</a></li>
							</ul>
						</div>
						<div>
							<h4 style={{color: '#fff', fontWeight: 700, margin: '0 0 1rem 0'}}>Support</h4>
							<ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem'}}>
								<li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>Help Center</a></li>
								<li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>Documentation</a></li>
								<li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>Contact Support</a></li>
								<li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>Community</a></li>
							</ul>
						</div>
						<div>
							<h4 style={{color: '#fff', fontWeight: 700, margin: '0 0 1rem 0'}}>Legal</h4>
							<ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem'}}>
								<li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>Privacy</a></li>
								<li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>Terms</a></li>
								<li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>Security</a></li>
								<li><a href="#" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem'}}>Compliance</a></li>
							</ul>
						</div>
					</div>
					<div style={{textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #334155'}}>
						<p style={{color: '#94a3b8', fontSize: '0.9rem', margin: 0}}>
							© 2026 Gym Management Platform. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</main>
	)
}
