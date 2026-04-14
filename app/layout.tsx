import './globals.css'
import Nav from '../components/Nav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body style={{paddingTop: 64}}>
				<Nav />
				{children}
			</body>
		</html>
	)
}

