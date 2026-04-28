import Privacy from '../components/Privacy'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy - M-Gym',
}

export default function PrivacyPage() {
  return (
    <main style={{minHeight: '100vh', background: '#ffd9b3'}}>
      <Privacy />
      <Footer />
    </main>
  )
}
