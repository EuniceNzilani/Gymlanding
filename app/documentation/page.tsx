import Documentation from '../components/Documentation'

export const metadata = {
  title: 'Documentation - M-Gym',
}

export default function DocPage() {
  return (
    <main style={{minHeight: '100vh', background: '#ffd9b3'}}>
      <Documentation />
    </main>
  )
}
