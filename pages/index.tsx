import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Get to know Jonathon Bloomfield</title>
        <meta name="description" content="Jonathon Bloomfield's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className={styles.title}>
          Hi, I'm Jonathon!
        </h1>


        <Link href="/projects">
          <a> Projects </a>
        </Link>
      </Layout>




    </div>
  )
}

export default Home
