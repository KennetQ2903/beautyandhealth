'use client'
import styles from '@/css/ItemCard.module.css'
import localFont from 'next/font/local'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export function ItemCard ({ title = '', price = 0, src = '' }) {
  const handleItem = () => {
    console.log('Ir a la descripcion')
  }
  return (
    <>
      <div className={styles.scrollItem} onClick={handleItem}>
        <div className={styles.itemWrapper}>
          <img src={src} alt={title} />
          <p className={`${poppins.className} ${styles.itemDescription}`}>{title}</p>
          <p className={`${poppins.className} ${styles.itemPrice}`}>Q{price.toLocaleString('en-US')}</p>
        </div>
      </div>
    </>
  )
}
