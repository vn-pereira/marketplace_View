/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const DestaquesList = styled.div`
  padding: 20px 40px;
  text-align: center;

  h2 {
    padding: 30px;
  }
`

export default function Destaques(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  }
  return (
    <DestaquesList>
      <h2>Destaques</h2>

      <div>
        <Slider {...settings}>
          {props.data.map(product => {
            return (
              <div key={product._id}>
                <h3
                  style={{
                    color: '#fff',
                    height: 150,
                    width: 300,
                    background: 'purple',
                    padding: '20px'
                  }}
                >
                  {product.name}
                </h3>
              </div>
            )
          })}
        </Slider>
      </div>
    </DestaquesList>
  )
}
