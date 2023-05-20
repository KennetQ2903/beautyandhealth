import { CatalogoList } from '@/Config/Catalogo'
import styles from '@/css/ProductView.module.css'
import localFont from 'next/font/local'
const poppins = localFont({ src: '../../../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export default function ProductView ({ params }) {
  const item = CatalogoList.find(item => Number(item.id) === Number(params.id))
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={item.src} alt={item.title} />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <div className={styles.descriptionTitle}>
            <span className={`${poppins.className} ${styles.title}`}>{item.title}</span>
            <span className={`${poppins.className} ${styles.price}`}>Q{item.price.toLocaleString('en-US')}</span>
          </div>
          <div className={styles.descriptionP}>
            <p className={`${poppins.className} ${styles.descriptionItem}`}>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
