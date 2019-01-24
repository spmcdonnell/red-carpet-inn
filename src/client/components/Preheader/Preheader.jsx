import React, { Component } from 'react';

// Assets
import envelope from 'images/white-email-icon.png';
import phone from 'images/white-phone-icon.png';

import clearDay from 'images/clear-day.png';
import cloudyDay from 'images/cloudy-day.png';
import rainyDay from 'images/rainy-day.png';
import stormyDay from 'images/stormy-day.png';

import clearNight from 'images/clear-night.png';
import cloudyNight from 'images/cloudy-night.png';
import rainyNight from 'images/rainy-night.png';
import stormyNight from 'images/stormy-night.png';

import snowflake from 'images/snowflake.png';

// Styles
import style from './Preheader.css';

class Preheader extends Component {
  state = {
    weatherIcon: null,
    weatherData: null
  };

  componentDidMount() {
    function load_weather_data() {
      const API_KEY = 'f2d6899155b9415e362735d3cbe36f7b';
      const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?id=4500546&APPID=${API_KEY}`;
      return fetch(ROOT_URL).then(resp => resp.json());
    }

    let weatherData = load_weather_data();

    Promise.all([weatherData]).then(values => {
      let weatherObj = values[0];
      let description = weatherObj.weather[0].description.toLowerCase();

      let weatherIcon;

      if (description === 'clear sky') {
        weatherIcon = clearDay;
      } else if (description.indexOf('cloud') !== -1) {
        weatherIcon = cloudyDay;
      } else if (description.indexOf('rain') !== -1 || description === 'mist') {
        weatherIcon = rainyDay;
      } else if (description === 'thunderstorm') {
        weatherIcon = stormyDay;
      } else if (description === 'snow') {
        weatherIcon = snowflake;
      } else {
        weatherIcon = clearDay;
      }

      this.setState({ weatherData: weatherObj });
      this.setState({ weatherIcon });
    });
  }

  render() {
    let temp;

    if (this.state.weatherData) {
      temp = Math.round(
        (this.state.weatherData.main.temp - 273.15) * (9 / 5) + 32
      );
    } else {
      temp = 'Loading temperature';
    }

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
                  <img src={this.state.weatherIcon} height="18" /> {temp} °F
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preheader;
