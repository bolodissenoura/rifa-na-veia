import Head from 'next/head'
import NavBar from './components/NavBar'
import SectionGanhadores from './components/SectionGanhadores'

export default function Home() {
    return (
        <>
            <Head>
                <title>Rifas na veia - Ganhadores</title>
                <meta name="description" content="Rifas na veia Ganhadores" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>

            <header>
                <NavBar />
            </header>

            <main>

                <SectionGanhadores />

            </main>


        </>
    )
}
