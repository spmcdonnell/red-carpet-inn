import React, { Component } from 'react';
import style from './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleInput}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={this.handleInput}
        />
        <br />
        <textarea
          name="message"
          placeholder="Your Message"
          value={this.state.message}
          onChange={this.handleInput}
        />
        <br />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default ContactForm;
