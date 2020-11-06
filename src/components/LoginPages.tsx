import React from 'react'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import {Modal} from 'react-bootstrap';
import {useState} from 'react';
import Register from './Register';


export default function LoginPages() {
  const { register, handleSubmit, errors } = useForm();
  function onSubmit(data) {
    console.log("Data submitted: ", data);
  }

  const [show, setShow] = useState(false);

  const handleClose2 = () => setShow(false);
  const handleShow2 = () => setShow(true);

    return (
        <div>
<div className="box-parent-login">
  <div className="well bg-white box-login">
    <form role="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <fieldset>
        <div className="form-group ls-login-user">
          <label htmlFor="userLogin">Usuário</label>
          <input className="form-control ls-login-bg-user input-lg" id="userLogin" type="email" 
          aria-label="Usuário" placeholder="darth@vader.com" ref={register({
            required: "Enter your e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })} />
           {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="form-group ls-login-password">
          <label htmlFor="userPassword">Senha</label>
          <input className="form-control ls-login-bg-password input-lg" id="userPassword" type="password" 
          aria-label="Senha" placeholder="123456" ref={register({ required: "Enter your password" })}/>
         {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <a href="#" className="ls-login-forgot"></a>
        <input type="submit" defaultValue="Entrar" className="btn btn-primary btn-lg btn-block" />
        <p className="txt-center ls-login-signup">Não possui um usuário na CoolStuff?
          <Link href=""><a onClick={handleShow2}>Cadastre-se agora</a></Link>
        </p>
      </fieldset>
    </form>
        <Modal show={show} onHide={handleClose2}>
          <Modal.Header closeButton>
          <Modal.Title>Cadastro</Modal.Title>
          </Modal.Header>
          <Modal.Body> <Register/> </Modal.Body>
        </Modal>
  </div>
</div>
   </div>
    )
}
