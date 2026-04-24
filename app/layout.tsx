import './globals.css'
import Nav from './components/Nav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body style={{paddingTop: 60, margin: 0, overflow: 'visible', scrollBehavior: 'smooth', scrollPaddingTop: 60}}>
				<div style={{minHeight: '100vh', overflowY: 'auto', overflowX: 'hidden'}}>
					<Nav />
					{children}
				</div>
			</body>
		</html>
	)
}

