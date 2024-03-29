'use client'
import styles from '@/css/ItemCard.module.css'
import localFont from 'next/font/local'
import { useRouter } from 'next/navigation'
const poppins = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export function ItemCard ({ title = '', price = 0, src = '', id }) {
  const router = useRouter()
  const handleItem = () => {
    console.log('Ir a la descripcion')
    router.push(`/Catalogo/${id}`)
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
