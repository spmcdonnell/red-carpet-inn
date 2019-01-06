import React, { Component } from 'react';
import style from './Preheader.css';

class Preheader extends Component {
  render() {
    return (
      <div className={[style.preheader].join(' ')}>
        <div className="grid-x">
          <div className="cell small-12 medium-4">
            <h1>PREHEADER</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Preheader;
