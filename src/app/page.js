import Navbar from '@/Components/Navbar'
import styles from './page.module.css'
import { Banner } from '@/Components/Banner'
import { Card } from '@/Components/Card'
import { ItemCarrousel } from '@/Components/ItemCarrousel'
import { SecondBanner } from '@/Components/SecondBanner'
export default function Home () {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Banner />
        <Card />
        <ItemCarrousel />
        <SecondBanner />
      </main>
    </>
  )
}
