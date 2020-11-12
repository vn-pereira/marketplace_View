/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

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
    text-align: center;
  }
`
const Categorias = ({ data }) => {
  const getAllCategories = data => {
    const allCategories = data.map(category => {
      return category.category
    })
    const uniqueCategories = allCategories.filter(function (item, next) {
      return allCategories.indexOf(item) === next
    })
    return uniqueCategories
  }
  const categories = getAllCategories(data)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }
  return (
    <CategoryList>
      <h2>Categorias</h2>
      <div className="categories">
        <Slider {...settings}>
          {categories.map((categorie, index) => {
            return (
              <a href={`/categoria/${categorie}`} key={index}>
                <div>
                  <h3
                    style={{
                      color: '#fff',
                      height: 150,
                      width: 300,
                      background: '#69779b',
                      padding: '20px'
                    }}
                  >
                    {categorie.replace(/-/g, ' ')}
                  </h3>
                </div>
              </a>
            )
          })}
        </Slider>
      </div>
    </CategoryList>
  )
}

export default Categorias
