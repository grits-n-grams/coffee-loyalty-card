import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Customer from '../components/customer'
import CustomerForm from '../components/form'
import useSWR from 'swr'

export default function Home() {
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR('/api/getAll', fetcher, {
    refreshInterval: 1000,
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Loyalty Card</title>
        <meta name="Yurie's Loyalty Card" content="Yurie's coffee card app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <table>
          {data &&
            data.map(({ id, firstName, lastName, email, balance, loyalty }) => (
              <Customer
                key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
                email={email}
                balance={balance}
                loyalty={loyalty}
              />
            ))}
        </table>
        <CustomerForm />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
