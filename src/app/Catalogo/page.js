import { CatalogItem } from '@/Components/CatalogItem'
import { CatalogoList } from '@/Config/Catalogo'
import styles from '@/css/Catalog.module.css'
import localFont from 'next/font/local'
const poppins = localFont({ src: '../../../public/fonts/Poppins-ExtraLight.ttf', display: 'swap' })
export default function Catalogo () {
  return (
    <>
      <div className={styles.container}>
        <h1 className={`${poppins.className} ${styles.title}`}>Beauty&Health</h1>
        <div className={styles.catalog}>
          {CatalogoList.map(item => (
            <CatalogItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}
