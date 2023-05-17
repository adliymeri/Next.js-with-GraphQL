
import Head from "next/head"
import HomePage from '@/pages/home-page'
import styles from '@/styles/Home.module.scss'


function Home() {
    return (
        <div>
            <Head>
                <title>UDV</title>
                <link rel="icon" href="/photos/Group 3.png"/>
            </Head>
            <HomePage/> 
        </div>
    )
}

export default Home