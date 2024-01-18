
import React, {Component} from "react";
import classes from './Carousel.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
      <div className="slider-wrapper">

            <div className={classes.Slider}
                 style={{
                     marginBottom: 30,
                     width: this.props.width ? this.props.width + "%" : "100%"
                 }}
            >
                <h3 className={classes.title}>{this.props.title}</h3>
                <Slider
                    className={classes.Slider}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    {
                        this.props?.data && this.props.data.length > 0 ? (
                            this.props.data.map(el => (
                                <div key={el}>
                                    <img src={el} alt=""/>
                                </div>
                            ))
                        ) : (
                            <></>
                        )
                    }
                </Slider>
                {
                    this.props.data.length > 1 && <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        {
                            this.props.data && this.props.data.length > 2 ? (
                                this.props.data.map(el => (
                                    <div key={el}>
                                        <div className={classes.sublist}>
                                            <img src={el} alt=""/>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <></>

                            )
                        }
                    </Slider>
                }
            </div>
            </div>
        );
    }
}
