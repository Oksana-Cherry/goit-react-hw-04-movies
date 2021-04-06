import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
const CastReviewsNav = ({ children, match }) => {
  const { id } = match;
  return (
    <section className="add_section ">
      {children}
      <ul>
        <li>
          <NavLink to={{ pathname: `/movies/${id}/cast` }}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/movies/${id}/reviews` }}>Reviews</NavLink>
        </li>
      </ul>
    </section>
  );
};
export default withRouter(CastReviewsNav);
