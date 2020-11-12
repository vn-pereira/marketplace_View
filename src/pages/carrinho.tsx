import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Header from '../components/Header'

export default function carrinho({ product }) {
  return (
    <>
      <Header />
      <div className="page-area cart-page spad">
        <div className="container">
          <form className="checkout-form">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="checkout-title">Endereço de entrega</h4>
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Nome *" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Sobrenome *" />
                  </div>
                  <div className="col-md-12">
                    <select>
                      <option>Estado *</option>
                      <option>Acre</option>
                      <option>Alagoas</option>
                      <option>Amapá</option>
                      <option>Amazonas</option>
                      <option>Bahia</option>
                      <option>Ceará</option>
                      <option>Distrito Federal</option>
                      <option>Espírito Santo</option>
                      <option>Goiás</option>
                      <option>Maranhão</option>
                      <option>Mato Grosso</option>
                      <option>Mato Grosso do Sul</option>
                      <option>Minas Gerais</option>
                      <option>Pará</option>
                      <option>Paraíba</option>
                      <option>Paraná</option>
                      <option>Pernambuco</option>
                      <option>Piauí</option>
                      <option>Rio de Janeiro</option>
                      <option>Rio Grande do Norte</option>
                      <option>Rio Grande do Sul</option>
                      <option>Rondônia</option>
                      <option>Roraima</option>
                      <option>Santa Catarina</option>
                      <option>São Paulo</option>
                      <option>Sergipe</option>
                      <option>Tocantins</option>
                    </select>
                    <input type="text" placeholder="Cidade *" />
                    <input type="text" placeholder="CEP *" />
                    <input type="text" placeholder="Endereço *" />
                    <input type="text" placeholder="Telefone *" />
                    <input type="email" placeholder="E-mail *" />
                    <div className="checkbox-items">
                      <div className="ci-item">
                        <input type="checkbox" name="a" id="tandc" />
                        <label htmlFor="tandc">
                          Salvar este endereço para as próximas compras
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="order-card">
                  <div className="order-details">
                    <div className="od-warp">
                      <h4 className="checkout-title">Seu pedido</h4>
                      <table className="order-table">
                        <thead>
                          <tr>
                            <th>Produto</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>CHOCOLATE ECLAIRS</td>
                            <td>{product.price}</td>
                          </tr>

                          <tr className="cart-subtotal">
                            <td>Frete</td>
                            <td>Grátis</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="order-total">
                            <th>Total</th>
                            <th>$68,53</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div className="payment-method">
                      <div className="pm-item">
                        <input type="radio" name="pm" id="one" />
                        <label htmlFor="one">Boleto bancário</label>
                      </div>
                      <div className="pm-item">
                        <input type="radio" name="pm" id="two" />
                        <label htmlFor="two">Cartão de crédito</label>
                      </div>
                      <div className="pm-item">
                        <input type="radio" name="pm" id="three" />
                        <label htmlFor="three">Transferência bancária</label>
                      </div>
                    </div>
                  </div>
                  <Link href="/confirmacao">
                    <button className="site-btn btn-full">Fechar pedido</button>
                  </Link>
                  <Link href="/">
                    <button className="site-btn btn-full">Voltar</button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(params) {
  const res = await fetch(`https://limitless-cove-49173.herokuapp.com/products`)
  const products = await res.json()
  const product = products.filter(product => {
    return product._id === params.id
  })
  return { props: { product } }
}
