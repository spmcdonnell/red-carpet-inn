import React, { Component } from 'react';

class Rooms extends Component {
  componentDidMount() {
    document.body.classList.add('rooms');
  }

  componentWillUnmount() {
    document.body.classList.remove('rooms');
  }

  render() {
    return (
      <div>
        <h1>This is the Rooms/Rates page.</h1>
      </div>
    );
  }
}

export default Rooms;
