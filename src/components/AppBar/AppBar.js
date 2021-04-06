import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AppBar.module.scss';
const AppBar = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.header_item}>
        <li>
          <NavLink
            exact
            to={routes.home} //"/"
            className="navLink"
            activeClassName="navLink__active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies} //"/movies"
            className="navLink"
            activeClassName="navLink__active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default AppBar;
