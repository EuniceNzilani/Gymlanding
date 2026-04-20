'use client'
import Home from './components/Home'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Faqs from './components/Faqs'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function Page() {
	return (
		<main style={{paddingTop: '0px', paddingBottom: '0px', margin: '0px'}}>
			<Home />

			<Features />

			<Pricing />

			<Faqs />

			<Testimonials />

			<ContactUs />

			<Partners />

			<Footer />
		</main>
	)
}
