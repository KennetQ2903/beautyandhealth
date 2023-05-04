import styles from '@/css/ItemCard.module.css'
import localFont from 'next/font/local'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export function ItemCard ({ title = '', price = 0 }) {
  return (
    <>
      <div className={styles.scrollItem}>
        <div className={styles.itemWrapper}>
          <img src='https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Descripción de la imagen' />
          <p className={`${poppins.className} ${styles.itemDescription}`}>{title}</p>
          <p className={`${poppins.className} ${styles.itemPrice}`}>Q{price}</p>
        </div>
      </div>
    </>
  )
}
