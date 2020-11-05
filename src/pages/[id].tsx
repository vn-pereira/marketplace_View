import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContainerItem = styled.div `
  .pt img {
    max-height: 150px;
    max-width: 150px;
    object-position: 0 -20px;
  }

  .product-thumbs {
    overflow: hidden;
}
`


const item = ({product}) => {
  return (
    <ContainerItem>
    <Header />
    <div className="page-area product-page spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <figure>
              <img className="product-big-img" src={product[0].images[0]} />
            </figure>
            <div className="product-thumbs">
              <div className="product-thumbs-track">
                <div className="pt" data-imgbigurl="img/product/1.jpg"><img src={product[0].images[0]} /></div>
                <div className="pt" data-imgbigurl="img/product/2.jpg"><img src={product[0].images[1]} /></div>
                <div className="pt" data-imgbigurl="img/product/3.jpg"><img src={product[0].images[2]} /></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-content">
              <h2>{product[0].name}</h2>
              <div className="pc-meta">
                <h4 className="price">{product[0].price}</h4>
                <div className="review">
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star is-fade" />
                  </div>
                  <span>(6 reviews)</span>
                </div>
              </div>
              <p>{product[0].description}</p>
              <a href={'/carrinho'} className="site-btn btn-line">COMPRAR</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </ContainerItem>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://limitless-cove-49173.herokuapp.com/products`)
  const products = await res.json()
  const product = products.filter((product)=> { return product._id == params.id})
  return { props: { product } }
}

export async function getStaticPaths() {
  const res = await fetch('https://limitless-cove-49173.herokuapp.com/products')
  const products = await res.json()

  const paths = products.map((product) => ({
    params: {id: product._id},
  }))

  return { paths, fallback: false }
}

export default item


