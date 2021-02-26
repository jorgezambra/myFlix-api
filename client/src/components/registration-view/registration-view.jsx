import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Container, Button, Col, Row } from 'react-bootstrap';
import './registration-view.scss';

/**
* Login view
* @function LoginView
* @param {func} props - onLoggedIn props
* @returns {LoginView}
*/
export function RegistrationView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdUser = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    axios
      .post('https://myflix-apii.herokuapp.com/users', createdUser)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        alert('User created successfully');
        window.open('/', '_self');
      })
      .catch((e) => {
        console.log(e.response);
        alert('Error processing request');
      });
  };

  return (
    <Container>
      <br></br>
      <Form style={{ width: '20rem' }}>
        <Form.Group align='center' controlId='formBasicUsername'>
          <Form.Label><h5>Username</h5></Form.Label>
          <Form.Control
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text align='left' className='text-muted'>
            *min. 5 characters
          </Form.Text>
        </Form.Group>

        <Form.Group align='center' controlId='formBasicPassword'>
          <Form.Label><h5>Password</h5></Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group align='center' controlId='formBasicEmail'>
          <Form.Label><h5>Email address</h5></Form.Label>
          <Form.Control
            type='email'
            value={email}
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group align='center' controlId='formBasicDate'>
          <Form.Label><h5>Date of Birth</h5></Form.Label>
          <Form.Control
            type='date'
            value={birthday}
            placeholder='12/31/1986'
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>

        <Form.Group align='center'>
          <Row>
            <Col>
              <Button variant='dark' type='submit' onClick={handleSubmit}>
                Submit
        </Button>
            </Col>
            <Col>
              <Link to={`/`}>
                <Button variant='dark link' type='submit'>
                  Cancel
          </Button>
              </Link>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container >
  );
}