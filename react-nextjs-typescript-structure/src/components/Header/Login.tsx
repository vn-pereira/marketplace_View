/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'

const LoginButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 25px;
  width: 300px;
  button {
    cursor: pointer;
    width: 140px;
    padding: 10px 25px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;
    transition: 0.5s;
    border: none;
  }
  .login {
    background: purple;
    color: #fff;
    &:hover {
      background: yellow;
      color: #111;
    }
  }
  .signup {
    background: #fff;
    color: purple;
    &:hover {
      background: purple;
      color: yellow;
    }
  }
`

const Login = () => {
  return (
    <LoginButtons>
      <button className="login">Login</button>
      <button className="signup">Criar conta</button>
    </LoginButtons>
  )
}

export default Login
