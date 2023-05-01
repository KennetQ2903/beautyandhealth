import localFont from 'next/font/local'
import styles from '@/css/Button.module.css'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export function Button ({ title = '', onClick = () => {}, mode = 'white' }) {
  const modeBG = mode === 'white' ? 'bg-white text-black' : 'bg-black text-white'
  return (
    <>
      <button
        className={`${styles.container} ${modeBG}`}
      >
        <p className={`${poppins.className} ${styles.title}`}>{title}</p>
      </button>
    </>
  )
}
