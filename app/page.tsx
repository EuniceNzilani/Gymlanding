'use client'
import Home from './components/Home'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function Page() {
	return (
		<main style={{paddingTop: '0px', paddingBottom: '0px', margin: '0px'}}>
			<Home />

			<Pricing />

			<ContactUs />

			<Testimonials />

			<Partners />

			<Footer />
		</main>
	)
}
