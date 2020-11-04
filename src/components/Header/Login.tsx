/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useState} from 'react';
import Sign_upButton from './Sign_upButton';
import LoginPages from '../LoginPages';

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
`

const Login = () => {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div>
    <LoginButtons>
      <button className="login" onClick={handleShow}>Login</button>
    </LoginButtons>
    <Sign_upButton/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body> <LoginPages/> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}

export default Login

