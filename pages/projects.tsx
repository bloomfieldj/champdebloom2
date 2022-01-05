import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Get to know Jonathon Bloomfield</title>
        <meta name="description" content="Jonathon Bloomfield's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className={styles.title}>
          Welcome to My Projects
        </h1>

        <Link href="/">
          <a> Home </a>
        </Link>
      </Layout>

    </div >
  )
}

export default Projects
