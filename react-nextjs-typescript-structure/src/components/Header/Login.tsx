/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import styled from 'styled-components'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import SignUp from './SignUp'
import LoginPages from '../LoginPages'

const LoginButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  button {
    cursor: pointer;
    width: 140px;
    padding: 5px 25px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;
    transition: 0.5s;
    border: none;
  }
  .login {
    background: purple;
    color: #fff;
    margin-right: 10px;
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
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div style={{ display: 'flex', width: 300 }}>
      <LoginButtons>
        <button className="login" onClick={handleShow}>
          Login
        </button>
      </LoginButtons>
      <SignUp />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <LoginPages />{' '}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Login
