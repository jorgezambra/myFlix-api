import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

/**
* Movie card to show movie information view
* @class MovieCard
* @param {object} props - movie, addToFavourites, isFavourite, removeFromFavourites props
* @returns {MovieCard}
*/
export class MovieCard extends React.Component {
  render() {

    const { movie } = this.props;

    return (
      <Container>
        <br></br>
        <Row>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Img variant="top" src={movie.ImagePath} />
              <br></br>
              <br></br>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <br></br>
              <Link to={`/movies/${movie._id}`}>
                <Button variant="danger">+Info</Button>
              </Link>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

/*MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
*/