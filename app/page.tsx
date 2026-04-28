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
		<main className="pt-0 pb-0 m-0">
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
