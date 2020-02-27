import React, { Component } from 'react';

class About extends Component {
  componentDidMount() {
    document.body.classList.add('about');
  }

  componentWillUnmount() {
    document.body.classList.remove('about');
  }

  render() {
    return (
      <div>
        <h1>This is the About page.</h1>
      </div>
    );
  }
}

export default About;
