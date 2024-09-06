import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const JoinPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
  });

  const fields = [
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      placeholder: 'Enter your name',
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      placeholder: 'Enter your email',
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      placeholder: 'Enter your password',
    },
    {
      label: 'Confirm Password',
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'Confirm your password',
    },
    {
      label: 'Phone',
      type: 'tel',
      name: 'phone',
      placeholder: 'Enter your phone number',
    },
    {
      label: 'Address',
      type: 'text',
      name: 'address',
      placeholder: 'Enter your address',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(setFormData)
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Join Our Community</h2>
          <Form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
              <Form.Group key={index} controlId={`form${field.name}`}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                />
              </Form.Group>
            ))}
            <Button variant="primary" type="submit">
              Join
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinPage;