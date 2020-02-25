import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import style from './Slide.css';

class Slide extends Component {
  render() {
    const {
      image,
      heading,
      subtitle,
      buttonText,
      buttonLink
    } = this.props.slide;

    const bgImageStyle = {
      backgroundImage: `url(${image})`
    };

    const activeClass = this.props.active ? 'active' : '';

    return (
      <div
        className={`${style.slide} ${style[activeClass]}`}
        style={bgImageStyle}
      >
        <div className={style.content}>
          <h2>{heading}</h2>
          <h3>{subtitle}</h3>
          <Link to={buttonLink}>{buttonText}</Link>
        </div>
      </div>
    );
  }
}

export default Slide;
