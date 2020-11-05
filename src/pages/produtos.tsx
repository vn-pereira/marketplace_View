import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContainerProduto = styled.div`

  .product-item {
    width: 300px;
  }

  .fotoProduto {
    width: 300px;
  }
`

export default function produtos({products}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  }
  return (
    <ContainerProduto>
      <Header />
        <Slider {...settings}>
          {products.map(product => {
            return (
              <div key={product._id}>
                <div className="product-item">
        <figure>
          <img className="fotoProduto" src={product.images[1]} alt="" />
          <div className="pi-meta">
            <div className="pi-m-left">
              <a href={'/'+ product._id}>
              <img src="/eye.png" alt="" />
              <p>ver</p>
              </a>
            </div>
          </div>
        </figure>
        <div className="product-info">
          <h6>{product.name}</h6>
          <p>{product.price}</p>
          <a href={'/carrinho'} className="site-btn btn-line">COMPRAR</a>
        </div>
      </div>
    </div>
            )
          })}
        </Slider>
      <Footer />
  </ContainerProduto>

  )
}

export async function getStaticProps() {
  const res = await fetch(`https://limitless-cove-49173.herokuapp.com/products`)
  const products = await res.json()

  return { props: { products } }
}