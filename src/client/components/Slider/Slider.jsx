import React, { Component } from 'react';
import Slide from '../Slide';

// Styles
import style from './Slider.css';

class Slider extends Component {
  state = {
    activeSlideIndex: 0,
    autoChange: null
  };

  componentDidMount() {
    this.cycleSlides();
  }

  componentWillUnmount() {
    clearInterval(this.state.autoChange);
  }

  cycleSlides = () => {
    let autoChange = setInterval(() => {
      this.goToNextSlide();
    }, 8000);
    this.setState({ autoChange: autoChange });
  };

  goToPrevSlide = () => {
    // Check if active slide is first slide or not
    if (this.state.activeSlideIndex > 0) {
      this.setState(prevState => ({
        activeSlideIndex: prevState.activeSlideIndex - 1
      }));
    } else {
      this.setState({ activeSlideIndex: this.props.slides.length - 1 });
    }

    // Stop and restart the slides auto-cycling
    clearInterval(this.state.autoChange);
    this.cycleSlides();
  };

  goToNextSlide = () => {
    // Check if active slide is last slide or not
    if (this.state.activeSlideIndex === this.props.slides.length - 1) {
      this.setState({ activeSlideIndex: 0 });
    } else {
      this.setState(prevState => ({
        activeSlideIndex: prevState.activeSlideIndex + 1
      }));
    }

    // Stop and restart the slides auto-cycling
    clearInterval(this.state.autoChange);
    this.cycleSlides();
  };

  render() {
    const { slides } = this.props;

    return (
      <div className={style.slider}>
        {slides.map((slide, index) => {
          const active = index === this.state.activeSlideIndex;
          return <Slide key={index} slide={slide} active={active} />;
        })}
        <button
          className={`${style['slider-navigation']} ${style.prev}`}
          onClick={this.goToPrevSlide}
        >
          Previous Slide
        </button>
        <button
          className={`${style['slider-navigation']} ${style.next}`}
          onClick={this.goToNextSlide}
        >
          Next Slide
        </button>
      </div>
    );
  }
}

export default Slider;
