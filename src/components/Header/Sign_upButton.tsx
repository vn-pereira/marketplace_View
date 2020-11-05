import React from 'react';
import styled from 'styled-components';
import {Modal} from 'react-bootstrap';
import {useState} from 'react';
import Register from '../Register';

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
  .signup {
    background: #fff;
    color: purple;
    &:hover {
      background: purple;
      color: yellow;
    }
  }
`

export default function Sign_upButton() {        
    const [show, setShow] = useState(false);

    const handleClose2 = () => setShow(false);
    const handleShow2 = () => setShow(true);
return (
<div>
<LoginButtons>
  <button className="signUp" onClick={handleShow2}>Sign Up</button>
</LoginButtons>
 
  <Modal show={show} onHide={handleClose2}>
    <Modal.Header closeButton>
      <Modal.Title>Cadastro</Modal.Title>
    </Modal.Header>
    <Modal.Body> <Register/> </Modal.Body>
  </Modal>
</div>
)
}
   
