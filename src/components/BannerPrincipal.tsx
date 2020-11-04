/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const BannerPrincipal = () => {
  return (
    <div style={{ zIndex: 0 }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/banner1.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/banner2.webp"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/banner3.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default BannerPrincipal
