/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function Register() {
  const { register, handleSubmit, errors } = useForm()

  function onSubmit(data) {
    console.log('Data submitted: ', data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            ref={register({
              required: 'É necessário cadastrar seu email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid e-mail address'
              }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            ref={register({
              required: 'É necessário cadastrar uma senha',
              minLenght: {
                value: 8,
                message: 'Sua senha é muito curta, mínimo 8 caracteres'
              }
            })}
          />
        </Form.Group>
        {errors.password && <p className="error">{errors.password.message}</p>}
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>CPF</Form.Label>
        <Form.Control
          name="CPF"
          placeholder="000-000-000-00"
          ref={register({
            required: 'Enter your CPF',
            minLength: { value: 11, message: 'CPF é composto por 11 dígitos' }
          })}
        />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" placeholder="1234 Main St" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>State</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>City</Form.Label>

          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Contact</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Accept terms of use" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="btn btn-primary btn-lg btn-block"
      >
        Submit
      </Button>
    </Form>
  )
}
