import React, { Component } from 'react';
import ApiMovies from '../../services/api-movies';
import styles from './Cast.module.scss';
import defaultImage from '../../image/default.jpg';

//const IMAGE = 'https://image.tmdb.org/t/p/w500';
class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    ApiMovies.fetchCast(movieId)
      .then(actors => this.setState({ cast: actors }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { cast } = this.state;

    return (
      <ul className={styles.castItem}>
        {cast.map(({ id, name, character, profile_path }) => {
          const url = profile_path
            ? `https://image.tmdb.org/t/p/w500/` + profile_path
            : defaultImage;

          return (
            <li key={id}>
              <img width="100" src={url} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Cast;
