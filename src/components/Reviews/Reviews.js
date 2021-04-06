import React, { Component } from 'react';
import ApiMovies from '../../services/api-movies';

class MoviesReviews extends Component {
  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    ApiMovies.fetchReviews(movieId)
      .then(reviews => this.setState({ reviews }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any review for this movie</p>
        )}
      </>
    );
  }
}

export default MoviesReviews;
