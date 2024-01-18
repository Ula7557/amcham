import "slick-carousel/slick/slick.css";
import classes from "./Carousel.module.scss";
import Slider from "react-slick";
import Loader from "../../container/Loader";

const Carousel = ({config, data, loading, title}) => {
    if (loading) return <Loader size={20}/>
    console.log(config);
    return (
        <div className={classes.Slider}>
          <h2 className={classes.title}>{title}</h2>
          <Slider {...config}>
            {data.data &&
              data.data.map((el) => (
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={el.link}
                  key={el.id}
                  className={classes.slide}
                >
                  <img src={el.image} alt="" />
                </a>
              ))}
          </Slider>
        </div>
    );
};

export default Carousel;
