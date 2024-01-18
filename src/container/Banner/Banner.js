import {BANNER_CONFIG} from "../../db";
import classes from "./Banner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../Loader";
import {useFetch} from "../../hooks/useFetch";

const Banner = () => {
    const [loading, data, error] = useFetch("/content/all/banner?sortby=sort&sort=asc");
    if (loading) return <Loader size={100}/>;
    if (error) return <>Error :(</>;
    return (
        <div className={classes.Banner}>
            <Slider {...BANNER_CONFIG}>
                {data.data.map((el) => (
                    <div key={el.id}>
                        <div className={classes.Slide}>
                            {el.image.includes("mp4") ? (
                                <div>
                                    <video
                                        muted={true}
                                        loop={true}
                                        autoPlay={true}
                                        src={el.image}
                                        alt=""
                                        className={classes.bannerImg}
                                    />
                                </div>
                            ) : (
                                <div>
                                    <img alt={""} src={el.image} className={classes.bannerImg}/>
                                </div>
                            )}
                            <div className={classes.content}>
                                <h1>{el.title}</h1>
                                <p>{el.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                                <a href={el.link}>Learn more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default Banner;

/*
<img src={el.image} alt="" className={classes.bannerImg} />
*/
