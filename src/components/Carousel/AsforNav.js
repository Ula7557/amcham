import React, { Component } from "react";
import Slider from "react-slick";
import classes from './Carousel.module.scss'
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div style={{ width: "52.7%" }} className={"slider-wrapper"}>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          className={classes.Slider}
        >
          {this.props && this.props.data && this.props.data.length > 0 ? (
            this.props.data.map((el) => (
              <div key={el}>
                <img src={el} alt="" />
              </div>
            ))
          ) : (
            <></>
          )}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          className={classes.Slider}
          focusOnSelect={true}
        >
          {this.props.data && this.props.data.length > 2 ? (
            this.props.data.map((el) => (
              <div key={el}>
                <div className={classes.sublist}>
                  <img src={el} alt="" />
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </Slider>
      </div>
    );
  }
}
