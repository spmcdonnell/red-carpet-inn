import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class LocationMap extends Component {
  static defaultProps = {
    center: { lat: 38.449775, lng: -74.534485 },
    zoom: 16
  };

  render() {
    return (
      <div style={{ width: '100%', height: '400px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBsHuNan-jR-qVAKtw-kao_sib5kmBvACo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default LocationMap;
