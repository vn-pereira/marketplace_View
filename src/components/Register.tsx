import React from 'react'
import {Form} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";

export default function Register() {
    const { register, handleSubmit, errors } = useForm();
  
    function onSubmit(data) {
      console.log("Data submitted: ", data);
    }
  
    return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Digite seu email" name="email" ref={register({
            required: "Entre com o seu e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Digite um endereço de e-mail válido",
            }, 
          })}/>
          {errors.email && <p className="error">{errors.email.message}</p>}
          {console.log(handleSubmit)}
    </Form.Group>
    

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" ref={register({ 
        required: "Entre com a sua senha", 
        minLength:{value:6, message:"Tamanho mínimo de 6 caracteres"} })}/>
    </Form.Group>
     {errors.password && <p className="error">{errors.password.message}</p>}
    </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>CPF</Form.Label>
    <Form.Control type="number" placeholder="000-000-000-00" onKeyUp={(event)=>{
          if(!(event.key=='Backspace' || event.key=='Delete' || event.which == 8)){
          if(event.target.value.length==2 || event.target.value.length==6 ){
            event.target.value += "."
        } else if (event.target.value.length== 10){
            event.target.value += "-"
        }
    }
    }}/>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>State</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>City</Form.Label>
      
      <Form.Control/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Contact</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Accept terms of use"/>
  </Form.Group>

  <Button variant="primary" type="submit" className="btn btn-primary btn-lg btn-block">
    Submit
  </Button>
 </Form>
     );
  }
