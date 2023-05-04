import Navbar from '@/Components/Navbar'
import styles from './page.module.css'
import { Banner } from '@/Components/Banner'
import { Card } from '@/Components/Card'
import { ItemCarrousel } from '@/Components/ItemCarrousell'
export default function Home () {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Banner />
        <Card />
        <ItemCarrousel />
      </main>
    </>
  )
}
