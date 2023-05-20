'use client'
import { colors } from '@/Config/theme'
import Image from 'next/image'

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

export default function StaticNavbar () {
  return (
    <>
      <nav style={navBarScrolled}>
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
              src='/LOGO_BLACK.svg'
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
          >
            {/* <p className={inter.className}>Disfruta de una belleza inigualable</p> */}
          </div>
        </div>
      </nav>
    </>
  )
}
