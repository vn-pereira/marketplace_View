import React from 'react'
import {Form} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default function Login() {
    return (
        <div>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>E-mail</Form.Label>
    <Col md={6}>
    <Form.Control type="email" placeholder="Enter email" className=""/>
    </Col>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Col md={6}>
    <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
