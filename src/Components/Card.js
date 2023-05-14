import { Button } from './Button'
import styles from '@/css/Card.module.css'
import localFont from 'next/font/local'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export function Card () {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardInfo}>
          <p className={`${styles.info} ${poppins.className}`}>Nuestra mejor recompensa es verte feliz y satisfecho con nuestro trabajo.</p>
          <p className={`${styles.info} ${poppins.className}`}>Cuida bien de tu cuerpo, es tu lugar perfecto.</p>
          <p className={`${styles.info} ${poppins.className}`}>Trabajamos para resaltar tu belleza.</p>
        </div>
        <Button title='Empieza a Comprar' mode='black' route='/Catalogo' />
      </div>
    </>
  )
}
