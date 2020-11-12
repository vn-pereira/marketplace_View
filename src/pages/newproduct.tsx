/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useForm } from 'react-hook-form'
import Axios from 'axios'

const FormContainer = styled.div`
  form {
    max-width: 500px;
    margin: 0 auto;
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: white;
    font-size: 14px;
    font-weight: 200;
  }
  button[type='submit']:hover,
  input[type='submit']:hover {
    background: #bf1650;
  }
  button[type='submit'],
  input[type='submit'] {
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
  }
`
export default function newproduct() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    Axios.post('/api/create-product', {
      providerID: '5f924a880d486000177b9b68',
      name: data.name,
      price: data.price,
      stock: data.stock,
      description: data.description,
      category: data.category,
      rating: data.rating,
      images: data.images.split(',')
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <>
      <Header />
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nome</label>
          <input
            name="name"
            ref={register({ required: true, maxLength: 255 })}
          />
          {errors.exampleRequired && <p>This field is required</p>}
          <label>Descrição</label>
          <input
            name="description"
            ref={register({ required: true, maxLength: 255 })}
          />
          {errors.exampleRequired && <p>This field is required</p>}
          <label>Categoria</label>
          <select ref={register({ required: true })} name="category">
            <option value="celular">Celulares</option>
            <option value="eletroportateis">Eletroportáteis</option>
            <option value="eletrodomesticos">Eletrodomésticos</option>
            <option value="tv-e-audio">TV e Áudio</option>
            <option value="moveis">Móveis</option>
            <option value="cama-mesa-e-banho">Cama, mesa e banho</option>
          </select>
          {errors.exampleRequired && <p>This field is required</p>}
          <label>Preço</label>
          <input
            name="price"
            ref={register({ required: true, maxLength: 255 })}
          />
          {errors.exampleRequired && <p>This field is required</p>}
          <label>Estoque</label>
          <input
            name="stock"
            ref={register({ required: true, maxLength: 255 })}
          />
          {errors.exampleRequired && <p>This field is required</p>}
          <label>Imagens</label>
          <input
            name="images"
            placeholder="Insira as urls das imagens separadas por vírgula"
            ref={register({ required: true, maxLength: 255 })}
          />
          {errors.exampleRequired && <p>This field is required</p>}
          <input type="submit" />
        </form>
      </FormContainer>
    </>
  )
}
