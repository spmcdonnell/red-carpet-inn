import React, { Component } from 'react';
import Slider from '../Slider';

// Styles
import style from './Home.css';

// Slider Data
import slides from '../../helpers/sliders/homeSlider';

class Home extends Component {
  render() {
    return (
      <div className={['main-content', style['main-content-home']].join(' ')}>
        <section className="hero hero-home">
          <Slider slides={slides} />
        </section>
        <section className="site-intro">
          <div className="wrap">
            <h1>Welcome To The Red Carpet Inn</h1>
            <h2>Some tagline</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>
        </section>
        <section className={style['room-types']}>
          <div className="wrap">
            <h2>Choose Your Room</h2>
            <div className="grid-x grid-margin-x">
              <div className="cell small-12 medium-4">
                <h3>Room Type 1</h3>
                <p>**IMAGE HERE**</p>
              </div>
              <div className="cell small-12 medium-4">
                <h3>Room Type 2</h3>
                <p>**IMAGE HERE**</p>
              </div>
              <div className="cell small-12 medium-4">
                <h3>Room Type 3</h3>
                <p>**IMAGE HERE**</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrap">
            <h2>Testimonials</h2>
            <p>**TESTIMONIALS COMPONENT HERE**</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
