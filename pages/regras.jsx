import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from './components/NavBar'
import SectionContato from './components/SectionContato'
import SectionRegras from './components/SectionRegras'

export default function Contato() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rifas na veia - Regras</title>
        <meta name="description" content="Rifas na veia contato" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>

      <header>
        <NavBar />
      </header>

      <main>

      <SectionRegras/>

      </main>


    </div>
  )
}
