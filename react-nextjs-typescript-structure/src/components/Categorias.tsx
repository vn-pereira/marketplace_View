/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
const categories = [
  { name: 'Eletrônicos', image_path: '' },
  { name: 'Decoração', image_path: '' },
  { name: 'Roupas', image_path: '' },
  { name: 'Chocolates Premium', image_path: '' },
  { name: 'Coffe Shop', image_path: '' },
  { name: 'Cosméticos', image_path: '' },
  { name: 'Presentes', image_path: '' }
]

const CategoryList = styled.div`
  padding: 20px 40px;

  .categoryCard {
    cursor: pointer;
    text-align: center;
    height: 250px;
    width: 250px;
    margin: 10px;
    background: purple;
  }
  h2 {
    padding: 30px;
  }
`
const Categorias = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  }
  return (
    <CategoryList>
      <h2>Categorias</h2>
      <div className="categories">
        <Slider {...settings}>
          {categories.map((categorie, index) => {
            return (
              <div key={index}>
                <h3
                  style={{
                    color: '#fff',
                    height: 150,
                    width: 300,
                    background: 'purple',
                    padding: '20px'
                  }}
                >
                  {categorie.name}
                </h3>
              </div>
            )
          })}
        </Slider>
      </div>
    </CategoryList>
  )
}

export default Categorias
