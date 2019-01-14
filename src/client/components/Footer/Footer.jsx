import React, { Component } from 'react';
import style from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className={style['site-footer']}>
        <div className="wrap">
          <p>FOOTER</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
