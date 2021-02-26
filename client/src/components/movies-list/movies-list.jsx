import React from 'react';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

/**
* Movie list view to show all movies cards
* @function MoviesList
* @param {object} props - moviesToShow, favouriteMovies, visibilityFilter, removeFromFavourites, addToFavourites props
* @returns {MoviesList}
*/
const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.includes(visibilityFilter));
  }

  if (!movies) return <div className="main-view" />;

  return (
    <div className='movies-list'>
      <Container>
        <Row>
          <Col>
            <br></br>
            <VisibilityFilterInput visibilityFilter={visibilityFilter} />
            {filteredMovies.map((m) => (
              <MovieCard key={m._id} movie={m} />))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connect(mapStateToProps)(MoviesList);