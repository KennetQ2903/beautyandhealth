'use client'
import localFont from 'next/font/local'
import styles from '@/css/Button.module.css'
import { useRouter } from 'next/navigation'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export function Button ({ title = '', onClick = () => {}, mode = 'white', route = '' }) {
  const router = useRouter()
  const handleClick = () => router.push(route)
  const modeBG = mode === 'white' ? 'bg-white text-black' : 'bg-black text-white'
  return (
    <>
      <button
        className={`${styles.container} ${modeBG}`}
        onClick={handleClick}
      >
        <p className={`${poppins.className} ${styles.title}`}>{title}</p>
      </button>
    </>
  )
}
