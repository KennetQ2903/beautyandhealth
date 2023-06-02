import Navbar from '@/Components/Navbar'
import styles from './page.module.css'
import { Banner } from '@/Components/Banner'
import { Card } from '@/Components/Card'
import { ItemCarrousel } from '@/Components/ItemCarrousel'
import { SecondBanner } from '@/Components/SecondBanner'
import { Socials } from '@/Components/Socials'
import Script from 'next/script'
export default function Home () {
  return (
    <>
      <Script
        rel='preload'
        as='script'
        src='https://kit.fontawesome.com/33052647f9.js'
        crossorigin='anonymous'
      />
      <Navbar />
      <main className={styles.main}>
        <Banner />
        <Card />
        <ItemCarrousel />
        <SecondBanner />
      </main>
      <Socials />
    </>
  )
}
