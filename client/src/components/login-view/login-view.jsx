import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './login-view.scss';

/**
* Login view
* @function LoginView
* @param {func} props - onLoggedIn props
* @returns {LoginView}
*/
export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * username/password input request sent to /login post endpoint 
   * @function handleSubmit
   * @param {event}
   * @return {object} User information
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://myflix-apii.herokuapp.com/login', {
        Username: username,
        Password: password
      })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log('no such user');
      });
  };

  return (
    <Container className='login-container'>
      <Form>
        <br></br>
        <h2>Registered Users</h2>
        <br></br>
        <Form.Group className='login'>
          <Row>
            <Col xs='auto'>
              <Form.Label className='Label'>Username</Form.Label>
              <Form.Control
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='Control'
                type='text'
                placeholder='Enter Username'
              />
            </Col>
          </Row>
          <Row>
            <Col xs='auto'>
              <Form.Label className='Label'>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='Control2'
                type='password'
                placeholder='Enter Password'
              />
              <br></br>
              <Button type='button' variant='dark' onClick={handleSubmit}>
                Login
            </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Link to={`/register`}>
              <Button variant='link'>Not Registered?</Button>
            </Link>
          </Row>
        </Form.Group>
      </Form>
    </Container >
  );
}