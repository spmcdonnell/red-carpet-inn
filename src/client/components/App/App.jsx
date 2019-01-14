import React, { Component } from 'react';

import Preheader from '../Preheader';
import Header from '../Header';
import Footer from '../Footer';

import normalize from './Global.scss';
import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <Header />
        <main className="main-container">
          <div className="wrap">
            <h1>Main content area</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
