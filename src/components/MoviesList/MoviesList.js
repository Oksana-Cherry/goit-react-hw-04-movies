import { NavLink } from 'react-router-dom';
import styles from './MoviesList.module.scss';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {title || name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
