/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import LoginPages from './LoginPages'

const categories = [
  { name: 'Eletrônicos', image_path: '' },
  { name: 'Decoração', image_path: '' },
  { name: 'Roupas', image_path: '' },
  { name: 'Chocolates Premium', image_path: '' },
  { name: 'Coffe Shop', image_path: '' }
  // { name: 'Cosméticos', image_path: '' },
  // { name: 'Presentes', image_path: '' }
]

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  .categoryCard {
    cursor: pointer;
    text-align: center;
    height: 250px;
    width: 250px;
    margin: 10px;
    background: purple;
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
  }
`
const Categorias = () => {
  return (
    <CategoryList>
      <h2>Categorias</h2>
      <div className="categories">
        {categories.map(category => {
          return (
            <div className="categoryCard">
              <h3>{category.name}</h3>
            </div>
          )
        })}
      </div>
      <LoginPages/>
    </CategoryList>
  )
}

export default Categorias
