import React, { Component } from 'react';
import Slide from '../Slide';

// Styles
import style from './Slider.css';

class Slider extends Component {
  state = {
    autoScroll: true,
    activeSlideIndex: 0
  };

  componentDidMount() {}

  goToPrevSlide = () => {
    if (this.state.activeSlideIndex > 0) {
      this.setState(prevState => ({
        activeSlideIndex: prevState.activeSlideIndex - 1
      }));
    } else {
      this.setState({ activeSlideIndex: this.props.slides.length - 1 });
    }
  };

  goToNextSlide = () => {
    if (this.state.activeSlideIndex === this.props.slides.length - 1) {
      this.setState({ activeSlideIndex: 0 });
    } else {
      this.setState(prevState => ({
        activeSlideIndex: prevState.activeSlideIndex + 1
      }));
    }
  };

  render() {
    const { slides } = this.props;

    return (
      <div className={style.slider}>
        {slides.map((slide, index) => {
          const active = index === this.state.activeSlideIndex ? true : false;
          return <Slide key={slide.image} slide={slide} active={active} />;
        })}
        <button
          className={[style['slider-navigation'], style.prev].join(' ')}
          onClick={this.goToPrevSlide}
        >
          Previous Slide
        </button>
        <button
          className={[style['slider-navigation'], style.next].join(' ')}
          onClick={this.goToNextSlide}
        >
          Next Slide
        </button>
      </div>
    );
  }
}

export default Slider;
