import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './profile-view.scss';

/**
* Profile information view with edit option
* @function ProfileView
* @param {func} props - username, email, birthday, onProfileUpdate props
* @returns {ProfileView}
*/
export class ProfileView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      email: null,
      birthday: null,
      favoriteMovies: [],
      movies: [],
    };
  }

  componentDidMount() {

    const accessToken = localStorage.getItem('token');
    this.getUser(accessToken);
  }

  getUser(token) {
    const username = localStorage.getItem('user');

    axios
      .get(`https://myflix-apii.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        this.setState({
          Username: res.data.Username,
          Password: res.data.Password,
          Email: res.data.Email,
          Birthday: res.data.Birthday,
          FavoriteMovies: res.data.FavoriteMovies,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  deleteFavoriteMovie(movieId) {
    console.log(this.props.movies);
    axios
      .delete(
        `https://myflix-apii.herokuapp.com/users/${localStorage.getItem(
          'user'
        )}/Movies/${movieId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      .then((res) => {
        alert('Removed movie from favorites');
      })
      .catch((e) => {
        alert('error removing movie' + e);
      });
  }

  deleteUser(e) {
    axios
      .delete(
        `https://myflix-apii.herokuapp.com/users/${localStorage.getItem('user')}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      .then((response) => {
        alert('Account deleted');
        localStorage.removeItem('token', 'user');
        window.open('/');
      })
      .catch((event) => {
        alert('failed to delete user');
      });
  }

  render() {
    const { movies } = this.props;
    const favoriteMovieList = movies.filter((movie) =>
      this.state.favoriteMovies.includes(movie._id)
    );
    return (
      <div>
        <Container>
          <br></br>
          <h1>Profile</h1>
          <br></br>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Text><b>Username:</b> {this.state.Username}</Card.Text>
              <Card.Text><b>Password:</b> xxxxxx</Card.Text>
              <Card.Text><b>Email:</b> {this.state.Email}</Card.Text>
              <Card.Text><b>Birthday</b> {this.state.Birthday}</Card.Text>
              Favorite Movies:
              {favoriteMovieList.map((movie) => (
                <div key={movie._id} className='fav-movies-button'>
                  <Link to={`/movies/${movie._id}`}>
                    <Button variant='link'>{movie.Title}</Button>
                  </Link>
                  <Button
                    variant='dark'
                    onClick={(e) => this.deleteFavoriteMovie(movie._id)}
                  >
                    Remove Favorite
                  </Button>
                </div>
              ))}
              <br></br>
              <br></br>
              <Row>
                <Link to={'/user/update'}>
                  <Button className='Buttonz' variant='dark'>Update Profile</Button>
                </Link>
                <Button className='Buttonz' variant='dark' onClick={() => this.deleteUser()}>
                  Delete User
                </Button>
              </Row>
              <br></br>
              <Row>
                <Link to={`/`}>
                  <Button className='Buttonz' variant='dark'>Back</Button>
                </Link>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
