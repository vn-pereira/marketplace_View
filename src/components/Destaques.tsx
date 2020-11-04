/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'

const destaques = [
  { name: 'Produto 1', image_path: '' },
  { name: 'Produto 2', image_path: '' },
  { name: 'Produto 3', image_path: '' }
]

const DestaquesList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;

  .destaqueCard {
    cursor: pointer;
    text-align: center;
    height: 250px;
    width: calc(80vw / 3);
    margin: 10px;
    background: purple;
  }
  .destaques {
    display: flex;
    flex-wrap: wrap;
  }
`
export default function Destaques() {
  return (
    <DestaquesList>
      <h2>Destaques</h2>
      <div className="destaques">
        {destaques.map(destaque => {
          return (
            <div className="destaqueCard">
              <h3>{destaque.name}</h3>
            </div>
          )
        })}
      </div>
    </DestaquesList>
  )
}
