import Link from 'next/link'

export default function Nav() {
	const navHeight = 64
	return (
		<nav style={{position: 'fixed', top: 0, left: 0, right: 0, height: navHeight, background: 'white', boxShadow: '0 1px 6px rgba(0,0,0,0.08)', zIndex: 1000}}>
			<div style={{maxWidth: 1200, height: '100%', margin: '0 auto', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
				<div style={{fontWeight: 700}}>Gym</div>
				<div style={{display: 'flex', gap: '1rem'}}>
					<Link href="#home" style={{textDecoration: 'none', color: 'inherit'}}>Home</Link>
					<Link href="#features" style={{textDecoration: 'none', color: 'inherit'}}>Features</Link>
					<Link href="#faq" style={{textDecoration: 'none', color: 'inherit'}}>FAQ</Link>
					<Link href="#contact" style={{textDecoration: 'none', color: 'inherit'}}>Contact Us</Link>
				</div>
			</div>
		</nav>
	)
}
