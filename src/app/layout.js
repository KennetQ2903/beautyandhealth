import './globals.css'

export const metadata = {
  title: 'Beauty&Health',
  description: 'Beauty&Health'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
