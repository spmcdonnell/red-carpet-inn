import React, { Component } from 'react';
import axios from 'axios';

// Assets
import envelope from 'images/white-email-icon.png';
import phone from 'images/white-phone-icon.png';
import clearDay from 'images/clear-day.png';
import cloudyDay from 'images/cloudy-day.png';
import rainyDay from 'images/rainy-day.png';
import stormyDay from 'images/stormy-day.png';
import snowflake from 'images/snowflake.png';

// Styles
import style from './Preheader.css';

class Preheader extends Component {
  state = {
    weatherIcon: null,
    weatherData: null
  };

  componentDidMount() {
    const API_KEY = 'f2d6899155b9415e362735d3cbe36f7b';
    const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?id=4500546&APPID=${API_KEY}`;

    axios.get(ROOT_URL).then(res => {
      const weatherObj = res.data;
      const description = weatherObj.weather[0].description.toLowerCase();

      let weatherIcon;

      if (description === 'clear sky') {
        weatherIcon = clearDay;
      } else if (description.indexOf('cloud') !== -1 || description === 'mist') {
        weatherIcon = cloudyDay;
      } else if (description.indexOf('rain') !== -1) {
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
    }).catch(err => {
      console.log(`There was an error: ${err}`);
    });
  }

  kelvinToFahrenheit = kelvinTemp => {
    return Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
  };

  render() {
    const temp = this.state.weatherData ? this.kelvinToFahrenheit(this.state.weatherData.main.temp) : 'Loading temperature';

    return (
      <div className={style.preheader}>
        <div className="wrap">
          <div className="grid-x">
            <div className="cell small-12 medium-6">
              <p>COME SEE WHAT NJ HAS TO OFFER THIS HOLIDAY WEEKEND!</p>
            </div>
            <div className={`${style.cell} small-12 medium-6`}>
              <ul className={`${style.menu} menu`}>
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
