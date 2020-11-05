/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import BannerPrincipal from '../components/BannerPrincipal'
import Categorias from '../components/Categorias'
import Destaques from '../components/Destaques'
import Novidades from '../components/Novidades'

import { Container } from '../styles/pages/Home'

const Home: React.FC<{ data: JSON }> = ({ data }) => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <BannerPrincipal />
      <Categorias />
      <Destaques products={data} />
      <Novidades products={data} />
    </Container>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://limitless-cove-49173.herokuapp.com/products')
  const data = await res.json()
  console.log(data)
  return {
    props: {
      data
    }
  }
}

export default Home
