import StaticNavbar from '@/Components/StaticNavBar'
import '../globals.css'

export const metadata = {
  title: 'Beauty&Health',
  description: 'Beauty&Health'
}

export default function CatalogLayout ({ children }) {
  return (
    <section>
      <StaticNavbar />
      {children}
    </section>
  )
}
