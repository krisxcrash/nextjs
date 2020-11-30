import Head from 'next/head'

function Pokemon({ pokemon }) {
  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div>
        Welcome, {pokemon?.name}!
        <img src={pokemon?.sprites.front_default} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  // this is for dynamic routes
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151') //some api
  const pokemon = await res.json()

  let paths = pokemon.results.map((p) => {
    return `/pokemon/${p.name}`
  })

  return {
    paths,
    fallback: false //all undefined will 404
    // when fallback is true, this is no longer statically rendered. Use next-on-netlify package -> this reqs server side rendering
  }
}

export async function getStaticProps({ params }) {
  // this runs APIs at build time 
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`) //some api
  const pokemon = await res.json()

  return {
    props: {
      pokemon
    }
  }
}

export default Pokemon