import React, { Component } from 'react';

class Attractions extends Component {
  componentDidMount() {
    document.body.classList.add('attractions');
  }

  componentWillUnmount() {
    document.body.classList.remove('attractions');
  }

  render() {
    return (
      <div>
        <h1>This is the Attractions page.</h1>
      </div>
    );
  }
}

export default Attractions;
