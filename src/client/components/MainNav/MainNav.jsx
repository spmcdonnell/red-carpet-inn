import React, { Component } from 'react';
import style from './MainNav.css';

class MainNav extends Component {
  render() {
    return (
      <div className={style.main_nav}>
        <p>MainNav</p>
        <div className="logo-container">
          <img className="site-logo" src="#" />
        </div>
        <nav className="primary-nav">
          <ul>
            <li>Nav Menu</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainNav;
