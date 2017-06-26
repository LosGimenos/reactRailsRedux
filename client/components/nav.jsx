import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
      </div>
      <ul className="nav__ul">
        <Link to="/">
          <li className="nav__li">
            <p>Search</p>
          </li>
        </Link>
        <Link to="/favorites">
          <li className="nav__li">
            <p>Favorites</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
