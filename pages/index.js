import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Customer from '../components/customer'
import CustomerForm from '../components/form'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Loyalty Card</title>
        <meta name="Yurie's Loyalty Card" content="Yurie's coffee card app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Customer
          firstName="Tim"
          lastName="Dustow"
          email="timdustow@gmail.com"
          balance={4.5}
        />
        <CustomerForm />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
