import { ItemCard } from '@/Components/ItemCard'
import { CatalogoList } from '@/Config/Catalogo'
import styles from '@/css/ItemCarrousel.module.css'
export function ItemCarrousel () {
  return (
    <div className={styles.container}>
      {CatalogoList.map((item) => (
        <ItemCard
          key={item.title}
          title={item.title}
          price={item.price}
          src={item.src}
          id={item.id}
        />
      ))}
    </div>
  )
}
