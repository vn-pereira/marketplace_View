/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const NovidadesList = styled.div`
  padding: 20px 40px;
  text-align: center;
  h2 {
    padding: 30px;
  }
  .product-item {
    width: 300px;
  }
  .fotoProduto {
    width: 300px;
  }
`
export default function Novidades({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  }
  return (
    <NovidadesList>
      <h2>Novidades</h2>
      <Slider {...settings}>
        {products.map(product => {
          return (
            <a href={'/' + product._id} key={product._id}>
              <div className="product-item">
                <figure>
                  <img
                    className="fotoProduto p-3 bg-white"
                    src={product.images[0]}
                    alt=""
                  />
                  <div className="pi-meta">
                    <div className="pi-m-left">
                      <img src="/eye.png" alt="" />
                      <p>ver</p>
                    </div>
                  </div>
                </figure>
                <div className="product-info">
                  <h6>{product.name}</h6>
                  <p>{product.price}</p>
                  <a href={'/carrinho'} className="site-btn btn-line">
                    COMPRAR
                  </a>
                </div>
              </div>
            </a>
          )
        })}
      </Slider>
    </NovidadesList>
  )
}
