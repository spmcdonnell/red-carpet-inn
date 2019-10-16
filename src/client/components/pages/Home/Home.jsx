import React, { Component } from 'react';
import Slider from 'components/Slider';
import LocationMap from 'components/LocationMap';
import ContactForm from 'components/ContactForm';

// Assets
import envelope from 'images/white-email-icon.png';
import phone from 'images/white-phone-icon.png';

// Styles
import style from './Home.css';

// Slider Data
import slides from 'helpers/sliders/homeSlider';

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
          </div>
        </section>
        <section className={style.callout}>
          <div className="wrap">
            <h2>Tentative Callout Section</h2>
          </div>
        </section>
        <section className={[style['contact-info'], 'no-padding'].join(' ')}>
          <div className={[style['grid-x'], 'grid-x'].join(' ')}>
            <div
              className={[style.cell, 'cell', 'small-12', 'medium-6'].join(' ')}
            >
              {/* <LocationMap /> */}
            </div>
            <div
              className={[style.cell, 'cell', 'small-12', 'medium-6'].join(' ')}
            >
              <h2>Get In Touch!</h2>
              <h3>For Booking and Availability</h3>
              <ul>
                <li>
                  <address>
                    <p>
                      206 E White Horse Pike
                      <br />
                      Galloway, NJ 08205
                    </p>
                  </address>
                </li>
                <li>
                  <a href="mailto:info@redcarpetinnnj.com">
                    <img
                      src={envelope}
                      width="24"
                      height="18"
                      alt="Mail Envelope Icon"
                    />
                    : info@redcarpetinnnj.com
                  </a>
                </li>
                <li>
                  <a href="tel:6096523322">
                    <img
                      src={phone}
                      width="17"
                      height="18"
                      alt="Telephone Icon"
                    />
                    : 609-652-3322
                  </a>
                </li>
              </ul>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
