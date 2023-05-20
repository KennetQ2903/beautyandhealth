import { CatalogItem } from '@/Components/CatalogItem'
import { CatalogoList } from '@/Config/Catalogo'
import styles from '@/css/Catalog.module.css'
export default function Catalogo () {
  return (
    <>
      <div className={styles.container}>
        {/* <h1 className={`${poppins.className} ${styles.title}`}> </h1> */}
        <div className={styles.catalog}>
          {CatalogoList.map(item => (
            <CatalogItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}
