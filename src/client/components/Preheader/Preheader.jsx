import React, { Component } from 'react';
import style from './Preheader.css';

class Preheader extends Component {
  render() {
    return (
      <div className={[style.preheader].join(' ')}>
        <div className="wrap">
          <div className="grid-x">
            <div className="cell small-12 medium-4">
              <p>preheader</p>
            </div>
            <div className={[style.cell, 'small-12', 'medium-8'].join(' ')}>
              <ul className="menu">
                <li>Email: something@something.com</li>
                <li>Tel: 555-555-5555</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preheader;
