import React, { Component } from 'react';

class Contact extends Component {
  componentDidMount() {
    document.body.classList.add('contact');
  }

  componentWillUnmount() {
    document.body.classList.remove('contact');
  }

  render() {
    return (
      <div>
        <h1>This is the Contact page.</h1>
      </div>
    );
  }
}

export default Contact;
