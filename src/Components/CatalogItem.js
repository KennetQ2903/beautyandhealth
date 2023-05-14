import styles from '@/css/CatalogItem.module.css'
import localFont from 'next/font/local'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export const CatalogItem = ({ item }) => {
  const { src = '', price = 0, title = '' } = item
  return (
    <article className={styles.item}>
      <div className={styles.itemWrapper}>
        <img src={src} alt={title} />
        <div>
          <p className={`${poppins.className} ${styles.itemDescription}`}>{title}</p>
          <p className={`${poppins.className} ${styles.itemPrice}`}>Q{price.toLocaleString('en-US')}</p>
        </div>
      </div>
    </article>
  )
}
