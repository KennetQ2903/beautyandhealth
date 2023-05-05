import styles from '@/css/SecondBanner.module.css'
import localFont from 'next/font/local'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export function SecondBanner () {
  return (
    <div className={styles.wrapper}>
      <img src='https://images.pexels.com/photos/3373721/pexels-photo-3373721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='IMAGEN ILUSTRATIVA' />
      <div className={styles.content}>
        <h1 className={`${poppins.className} ${styles.title}`}>¡Hola! Soy Ana</h1>
        <p className={`${poppins.className} ${styles.info}`}>Desde que descubrí la tecnología de los dispositivos de belleza, mi piel nunca ha lucido mejor. </p>
      </div>
    </div>
  )
}
