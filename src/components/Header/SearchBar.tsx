/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  position: absolute;
  top: 1.8rem;
  left: 25%;
  transform: translate(-50%, -50%);
  transition: all 1s;
  width: 50px;
  height: 50px;
  background: white;
  box-sizing: border-box;
  border-radius: 25px;
  border: 4px solid white;
  padding: 5px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
  }

  .fa {
    box-sizing: border-box;
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
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
  }
`

const SearchBar = () => {
  return (
    <Form action="">
      <input type="search" />
      <i className="fa fa-search" />
    </Form>
  )
}

export default SearchBar