import { redes } from '@/Config/RedesSociales'
import styles from '@/css/Socials.module.css'
import localFont from 'next/font/local'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export const Socials = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${poppins.className} ${styles.title}`}>¡Descubre más sobre nosotros</h1>
      <div className={styles.gridContainer}>
        <div className={styles.item}>
          <a about='facebook' title={redes.facebook} target='_blank' href={redes.facebook}>
            <i className='fa-brands fa-facebook' />
          </a>
        </div>
        <div className={styles.item}>
          <a about='instagram' title={redes.instagram} target='_blank' href={redes.instagram}>
            <i className='fa-brands fa-instagram' />
          </a>
        </div>
        {/* <div className={styles.item}>
          <a about='whatsapp' title={redes.whatsapp} target='_blank' href={redes.whatsapp}>
            <i className='fa-brands fa-whatsapp' />
          </a>
        </div> */}
      </div>
    </div>
  )
}
