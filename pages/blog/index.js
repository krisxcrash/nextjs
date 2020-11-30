import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Head>
        <title>My Blog!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div>welcome, blogger</div>
      <Link href="/">
        <a>Go home!</a>
      </Link>
    </>
  )
}

export default Home