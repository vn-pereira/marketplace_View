/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  transition: all 1s;
  width: 35px;
  height: 30px;
  background: white;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 5px;

  input {
    width: 100%;
    height: 22.5px;
    line-height: 22.5px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
  }

  .fa {
    box-sizing: border-box;
    padding: 4px;
    width: 25.5px;
    height: 25.5px;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1em;
    transition: all 1s;
  }

  &:hover {
    width: 200px;
    cursor: pointer;
  }

  &:hover input {
    display: block;
  }

  &:hover .fa {
    background: #07051a;
    color: white;
    transform: translate(650%, -100%);
  }
`

const SearchBar = () => {
  const teste = () => {
    console.log('teste')
  }

  return (
    <Form action="">
      <input type="search" />
      <i className="fa fa-search" onClick={teste} />
    </Form>
  )
}

export default SearchBar
