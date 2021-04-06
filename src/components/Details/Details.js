import React from 'react';
import styles from './Details.module.scss';

const Details = ({
  imageUrl,
  title,
  name,
  Year,
  userScore,
  overview,
  Genres,
}) => (
  <div className={styles.movieDetails}>
    <img src={imageUrl} alt={title || name} width="200" />
    <div className={styles.movieDetailsText}>
      <h1>
        {title || name} {Year}
      </h1>
      <p>User Score: {userScore}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{Genres}.</p>
    </div>
  </div>
);
export default Details;
