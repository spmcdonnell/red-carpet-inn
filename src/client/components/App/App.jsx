import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Common components
import Preheader from '../Preheader';
import Header from '../Header';
import Footer from '../Footer';

// Routes
import Home from '../pages/Home';
import About from '../pages/About';
import Rooms from '../pages/Rooms';
import Attractions from '../pages/Attractions';
import Contact from '../pages/Contact';

// Styles
import normalize from './Global.scss';
import style from './App.css';

// Favicon
import favicon from 'images/favicon.ico';

// 404
const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  state = {
    mounted: null
  };
  componentDidMount() {
    this.setState({ mounted: 'component-mounted' });
  }

  render() {
    return (
      <BrowserRouter>
        <div
          className={[style['app-wrap'], style[this.state.mounted]].join(' ')}
          style={{ opacity: 0 }}
        >
          <Header />
          <main className={style['main-container']}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/rooms" component={Rooms} />
              <Route path="/attractions" component={Attractions} />
              <Route path="/contact" component={Contact} />
              <Route component={FourOhFour} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
