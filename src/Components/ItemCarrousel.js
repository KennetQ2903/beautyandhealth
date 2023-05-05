import { ItemCard } from '@/Components/ItemCard'
import styles from '@/css/ItemCarrousel.module.css'
export function ItemCarrousel () {
  return (
    <div className={styles.container}>
      <ItemCard
        title='Tensor de contorno de ojos'
        price={20.34}
      />
      <ItemCard
        title='Terapia frio/caliente'
        price={20.34}
      />
      <ItemCard
        title='Frecuencia galvánica'
        price={20.34}
      />
      <ItemCard
        title='Electroporador'
        price={20.34}
      />
      <ItemCard
        title='Gimnasia pasiva'
        price={20.34}
      />
      <ItemCard
        title='Cavitacion con radiofrecuencia'
        price={20.34}
      />
      <ItemCard
        title='Vaporizador de limpieza profunda'
        price={20.34}
      />
    </div>
  )
}
