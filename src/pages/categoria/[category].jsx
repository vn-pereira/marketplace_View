/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Destaques from '../../components/Destaques'
import Header from '../../components/Header'

const category = ({ products }) => {
  return (
    <div>
      <Header />
      <Destaques products={products} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch('https://limitless-cove-49173.herokuapp.com/products')
  const response = await res.json()
  const products = response.filter(product => {
    return product.category === params.category
  })
  return { props: { products } }
}

export async function getStaticPaths() {
  const res = await fetch('https://limitless-cove-49173.herokuapp.com/products')
  const products = await res.json()

  const paths = products.map(product => ({
    params: { category: product.category }
  }))

  return { paths, fallback: false }
}

export default category
