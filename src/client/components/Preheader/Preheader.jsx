import React, { Component } from 'react';

// Assets
import envelope from 'images/white-email-icon.png';
import phone from 'images/white-phone-icon.png';

// Styles
import style from './Preheader.css';

class Preheader extends Component {
  render() {
    return (
      <div className={[style.preheader].join(' ')}>
        <div className="wrap">
          <div className="grid-x">
            <div className="cell small-12 medium-6">
              <p>COME SEE WHAT NJ HAS TO OFFER THIS HOLIDAY WEEKEND!</p>
            </div>
            <div className={[style.cell, 'small-12', 'medium-6'].join(' ')}>
              <ul className={[style.menu, 'menu'].join(' ')}>
                <li>
                  <a href="mailto:info@redcarpetinnnj.com">
                    <img src={envelope} width="24" height="18" />:
                    info@redcarpetinnnj.com
                  </a>
                </li>
                <li>
                  <a href="tel:6096523322">
                    <img src={phone} width="17" height="18" />: 609-652-3322
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preheader;
