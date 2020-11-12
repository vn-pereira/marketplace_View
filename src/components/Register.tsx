import React from 'react'
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit, errors } = useForm();
  
  function onSubmit(data) {
    console.log("Data submitted: ", data);
  }

  return (
  <Form onSubmit={handleSubmit(onSubmit)} noValidate>
  
  <Form.Group controlId="formGridName">
    <Form.Label>Nome</Form.Label>
    <Form.Control type="text" placeholder="Darth" name="username" ref={register({ 
      required: true, 
      maxLength:{value:20, message:"Tamanho máximo de 20 caracteres"}})}/>
  </Form.Group>
    {errors.username && <p className="error">{errors.username.message}</p>}
        
  <Form.Group controlId="formGridName">
    <Form.Label>Sobrenome</Form.Label>
    <Form.Control type="text" placeholder="Vader" name="fullName" ref={register({ 
      pattern:{
        value: /^[A-Za-z]+$/i, 
        message: "Digite somente letras"}, 
        })}/>
    </Form.Group>
    {errors.fullName && <p className="error">{errors.fullName.message}</p>}

<Form.Group controlId="formGridAddress2">
  <Form.Label>Endereço</Form.Label>
  <Form.Control type="text" placeholder="Rua exemplo, 1234" />
</Form.Group>
  
  <Form.Group controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="darth@vader.com" name="email" ref={register({
          required: "Entre com o seu e-mail",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Digite um endereço de e-mail válido",
          }, 
        })}/>
        {errors.email && <p className="error">{errors.email.message}</p>}
        {console.log(handleSubmit)}
  </Form.Group>

  <Form.Group controlId="formGridPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="123456" name="password" ref={register({ 
      required: "Entre com a sua senha", 
      minLength:{value:6, message:"Tamanho mínimo de 6 caracteres"}})}/>
  </Form.Group>
    {errors.password && <p className="error">{errors.password.message}</p>}
    
<Form.Group controlId="formGridAddress1">
  <Form.Label>CPF</Form.Label>
  <Form.Control 
    type="text" 
    placeholder="000-000-000-00" 
    name="CPF" 
      ref={register({ required: true, 
        maxLength:{value:14, message:"Tamanho máximo de 11 caracteres"}})}
        onKeyUp={(event)=>{
          if(!(event.key=='Backspace' || event.key=='Delete' || event.which == 8)){
          if(event.target.value.length==2 || event.target.value.length==6 ){
            event.target.value += "."
            } else if (event.target.value.length== 10){
            event.target.value += "-"
          }
    }
  }} />
</Form.Group>
{errors.CPF && <p className="error">{errors.CPF.message}</p>}

  <Form.Group controlId="formGridZip">
    <Form.Label>Contato</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  
<Form.Group id="formGridCheckbox">
  <Form.Check type="checkbox" label="Aceita os termos de uso"/>
</Form.Group>

<Button 
variant="primary" 
type="submit" 
className="btn btn-primary btn-lg btn-block"
style={{background: "#69779b"}}> Submit</Button>

</Form>
     );
  }
