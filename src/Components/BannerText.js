import localFont from 'next/font/local'
import { Button } from './Button'
import styles from '@/css/BannerText.module.css'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export function BannerText () {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInfo}>
          <h1 className={`${poppins.className} ${styles.title}`}>
            Que la belleza sea <br /> consecuencia de tu salud
          </h1>
          <h1 className={`${poppins.className} ${styles.subTitle}`}>
            La vida es bella, pero tu piel, manicura y cabello lo son más.
          </h1>
        </div>
        <Button title='Ver Catalogo' mode='white' />
      </div>
    </>
  )
}
