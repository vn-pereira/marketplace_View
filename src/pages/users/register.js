import React from 'react'
import {Form} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default function Register() {
    return (
        <div>
            <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>CPF</Form.Label>
    <Form.Control placeholder="000-000-000-00" />
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

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </div>
    )
}
