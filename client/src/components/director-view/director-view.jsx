import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

/**
* Director information view
* @function DirectorView
* @param {string} props - directorName props
* @returns {DirectorView}
*/
export class DirectorView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movies, director } = this.props;

    if (!director) return null;

    return (
      <div className="director-view">
        <Container>
          <br></br>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>{director.Name}</Card.Title>
              <Card.Text>Director Bio: {director.Bio}</Card.Text>
              <Card.Text>Birth Year: {director.Birth}</Card.Text>
              <Card.Text>Death Year: {director.Death}</Card.Text>
              <Link to={`/`}>
                <Button variant='dark'>Back</Button>
              </Link>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}