import React, { Component } from 'react';
import Preheader from '../Preheader';
import MainNav from '../MainNav';
import style from './Header.css';

class Header extends Component {
  render() {
    return (
      <header className={style.site_header}>
        <Preheader />
        <MainNav />
      </header>
    );
  }
}

export default Header;
