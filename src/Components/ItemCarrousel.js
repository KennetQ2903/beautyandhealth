import { ItemCard } from '@/Components/ItemCard'
import { Catalogo } from '@/Config/Catalogo'
import styles from '@/css/ItemCarrousel.module.css'
export function ItemCarrousel () {
  return (
    <div className={styles.container}>
      {Catalogo.map((item) => (
        <ItemCard
          key={item.title}
          title={item.title}
          price={20.34}
          src={item.src}
        />
      ))}
    </div>
  )
}
