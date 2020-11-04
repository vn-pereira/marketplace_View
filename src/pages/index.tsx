// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import BannerPrincipal from '../components/BannerPrincipal'
import Categorias from '../components/Categorias'
import Destaques from '../components/Destaques'
import Novidades from '../components/Novidades'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <BannerPrincipal />
      <Categorias />
      <Destaques />
      <Novidades />
    </Container>
  )
}

export default Home
