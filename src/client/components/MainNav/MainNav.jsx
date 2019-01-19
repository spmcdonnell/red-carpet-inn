import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Assets
import companyLogo from 'images/red-carpet-inn-logo.png';

// Styles
import style from './MainNav.css';

class MainNav extends Component {
  render() {
    return (
      <div className={[style['main-nav']].join(' ')}>
        <div className="wrap">
          <div className="grid-x grid-margin-x">
            <div className="logo-container cell small-12 medium-2">
              <Link to="/">
                <img
                  className="site-logo"
                  src={companyLogo}
                  width="135"
                  height="95"
                  alt="Red Carpet Inn Logo"
                />
              </Link>
            </div>
            <nav className="primary-nav cell small-12 medium-10">
              <ul className={[style.menu, 'menu'].join(' ')}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/rooms">Rooms/Rates</Link>
                </li>
                <li>
                  <Link to="/attractions">Attractions</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default MainNav;
