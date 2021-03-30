import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
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
