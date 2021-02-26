import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

/**
* Movie information view with genre, direction links and delete movie from favourite link
* @class MovieView
* @param {string} props - movie, addToFavourites, isFavourite, removeFromFavourites props
* @returns {MovieView}
*/
export class MovieView extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movie } = this.props;

    if (!movie) return null;

    return (
      <Container>
        <br></br>
        <div className="movie-view" style={{ width: "660px" }}>
          <img className="movie-poster" src={movie.ImagePath} />
          <div className="movie-title">
            <br></br>
            <span className="label">Title: </span>
            <span className="value">{movie.Title}</span>
          </div>
          <br></br>
          <div className="movie-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Description}</span>
          </div>
          <br></br>
          <div className="movie-genre">
            <span className="label">Genre: </span>
            <Link to={`/genres/${movie.Genre.Name}`}>
              <Button variant="link"><b>{movie.Genre.Name}</b></Button>
            </Link>
          </div>
          <br></br>
          <div className="movie-director">
            <span className="label">Director: </span>
            <Link to={`/directors/${movie.Director.Name}`}>
              <Button variant="link"><b>{movie.Director.Name}</b></Button>
            </Link>
          </div>
          <br></br>
          <Link to={`/`}>
            <Button variant="danger">Back</Button>
          </Link>
        </div>
        <br></br>
      </Container>
    );
  }
}