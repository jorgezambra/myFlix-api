import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export function UpdateProfile(props) {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [email, updateEmail] = useState('');
  const [birthday, updateBirthday] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log();
    // send a request to the server for authentication
    axios
      .put(
        `https://myflix-apii.herokuapp.com/users/${localStorage.getItem('user')}`,
        {
          Username: username,
          Password: password,
          Birthday: birthday,
          Email: email,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
        alert('Profile updated');
        window.open('/');
      })
      .catch((e) => {
        console.log(username);
        alert('error updating user');
      });
  };

  return (
    <Container className='UpdateContainer'>
      <br></br>
      <Form style={{ width: '20rem' }}>
        <Form.Group controlId='formBasicUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter New Username'
            value={username}
            onChange={(e) => updateUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter newPassword'
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter new email'
            value={email}
            onChange={(e) => updateEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicDob'>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type='date'
            placeholder='01/01/1985'
            value={birthday}
            onChange={(e) => updateBirthday(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Button
                className='update-btn'
                variant='dark'
                type='submit'
                onClick={handleUpdate}
              >
                Update profile
        </Button>
            </Col>
            <Col>
              <Link to={`/user`}>
                <Button className='back-btn' variant='dark'>
                  Back
          </Button>
              </Link>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}