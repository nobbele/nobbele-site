import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import Navbar from './_navbar'

export default function Projects() {
  return (
    <>
      <Head>
          <title>Projects</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main>
          <p>Hello World</p>
      </main>
    </>
  )
}
