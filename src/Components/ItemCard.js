import styles from '@/css/ItemCard.module.css'
import localFont from 'next/font/local'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export function ItemCard ({ title = '', price = 0, src = '' }) {
  return (
    <>
      <div className={styles.scrollItem}>
        <div className={styles.itemWrapper}>
          <img src={src} alt={title} />
          <p className={`${poppins.className} ${styles.itemDescription}`}>{title}</p>
          <p className={`${poppins.className} ${styles.itemPrice}`}>Q{price}</p>
        </div>
      </div>
    </>
  )
}
