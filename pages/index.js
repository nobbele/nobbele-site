import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './_navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main>
        <h1>
          About me
        </h1>
        <p>
          I'm <strong>nobbele</strong>, a <strong>Desktop, Game and Web Developer</strong>.<br/>
          I started programming when I was around 9-10 years old using Scratch, Construct 2 and other "easy" game engines.<br/>
          Now I am 17 and I have learnt many languages and frameworks in software development journey.<br/>
        </p>
      </main>
    </>
  )
}
