/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'

const novidades = [
  { name: 'Novidade 1', image_path: '' },
  { name: 'Novidade 2', image_path: '' },
  { name: 'Novidade 3', image_path: '' }
]

const NovidadesList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;

  .novidadeCard {
    cursor: pointer;
    text-align: center;
    height: 250px;
    width: calc(80vw / 3);
    margin: 10px;
    background: purple;
  }
  .novidades {
    display: flex;
    flex-wrap: wrap;
  }
`
export default function Novidades() {
  return (
    <NovidadesList>
      <h2>Novidades</h2>
      <div className="novidades">
        {novidades.map(novidade => {
          return (
            <div className="novidadeCard">
              <h3>{novidade.name}</h3>
            </div>
          )
        })}
      </div>
    </NovidadesList>
  )
}
