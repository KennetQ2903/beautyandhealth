'use client'
import { colors } from '@/Config/theme'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// const inter = Inter({ subsets: ['latin'] })
const navBarScrolled = {
  backgroundColor: colors.white,
  borderBottomColor: colors.black,
  borderBottomWidth: 1,
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 999,
  transition: 'all 0.2s'
}
const navBarNormal = {
  position: 'fixed',
  borderBottomColor: 'rgba(0,0,0,0.0)',
  borderBottomWidth: 1,
  top: 0,
  width: '100%',
  zIndex: 999,
  transition: 'all 0.2s'
}

export default function Navbar () {
  const [navStyles, setNavStyles] = useState(navBarNormal)
  const [logoStyle, setLogoStyle] = useState('WHITE')
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setNavStyles(navBarScrolled)
        setLogoStyle('BLACK')
      } else {
        setNavStyles(navBarNormal)
        setLogoStyle('WHITE')
      }
    })
  }, [])
  return (
    <>
      <nav style={navStyles}>
        <div className='grid gap-4 grid-cols-3 justify-between justify-items-center content-center'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <Image
              className={{ position: 'relative' }}
              src={`/LOGO_${logoStyle}.svg`}
              alt='Beauty&Health Logo'
              width={180}
              height={180}
              priority
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          />
        </div>
      </nav>
    </>
  )
}
