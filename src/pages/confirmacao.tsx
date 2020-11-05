import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const Container = styled.div`
  .txt {
    text-align: center;
    margin: 5%;
  }
  .btn {
    background: transparent;
    border: 2px solid #414141;
    font-size: 20px;
    color: #414141;
    padding: 12px 35px;
    margin: 2%;
  }
  .btn:hover {
    background: #b09d81;
    border: 2px solid #b09d81;
    color: #fff;
  }
`

const Confirmacao = () => {
  return (
    <Container>
      <Header />
      <div className="txt">
        <h2 className="titulo">Sua compra foi efetuada com sucesso!</h2>
        <a href="/" className="btn">
          Voltar
        </a>
      </div>
    </Container>
  )
}

export default Confirmacao
