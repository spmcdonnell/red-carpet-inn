import React, { Component } from 'react';
import Slider from '../Slider';

// Slider Data
import slides from '../../helpers/sliders/homeSlider';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero hero-home">
          <Slider slides={slides} />
        </section>
        <section>
          <h1>Welcome To The Red Carpet Inn</h1>
        </section>
      </div>
    );
  }
}

export default Home;
