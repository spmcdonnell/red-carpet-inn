import React, { Component } from 'react';
import companyLogo from 'images/red-carpet-inn-logo.png';
import style from './MainNav.css';

class MainNav extends Component {
  render() {
    return (
      <div className={[style['main-nav']].join(' ')}>
        <div className="wrap">
          <div className="grid-x grid-margin-x">
            <div className="logo-container">
              <img
                className="site-logo"
                src={companyLogo}
                width="135"
                height="95"
                alt="Red Carpet Inn Logo"
              />
            </div>
            <nav className="primary-nav">
              <ul className="menu">
                <li>Nav Menu</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default MainNav;
