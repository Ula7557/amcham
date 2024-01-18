import Banner from "../../container/Banner";
import News from "../../container/News/News";
import WhyJoinUs from "../../container/WhyJoinUs/WhyJoinUs";

import {BANNER_CONFIG, RESPONSIVE_CONFIG,} from "../../db";
import classes from "./Home.module.scss";
import Calendar from "../../container/Calendar";
import Carousel from "../../components/Slider";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../../container/Loader";
import Slider from "react-slick";
import {useEffect, useState} from "react";
import {request} from "../../api";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {set_pages} from "../../redux/actions";
import parse from "html-react-parser";

const Home = () => {
    const [slider, setSlider] = useState([]);
    const dispatch = useDispatch();
    const [loading, data, error] = useFetch("/content/all/voting_members");
    const [ploading, partners, perror] = useFetch("/content/all/our_partners");
    const [pLoading = loading, pData = data, pError = error] = useFetch(
      "/content/one/president_note?id=20"
    );
    useEffect(() => {
      request("/content/all/page")
        .then((res) => dispatch(set_pages(res.data.data)))
        .catch((err) => console.warn(err));
      request("/content/all/slider")
        .then((res) => setSlider(res.data.data))
        .catch((er) => console.log(er));
    }, []);

    if (pError || error) return <>Error :(</>;

    return (
      <div className={classes.home}>
        <Banner />
        <WhyJoinUs />
        {pLoading ? (
          <Loader size={20} />
        ) : (
          <div className={`container ${classes.presidentNote}`}>
            <h2 className={classes.prezidentTitle}>{pData.data.title}</h2>
            <div className={classes.content}>
              <img
                alt={""}
                className={classes.presidentImage}
                src={pData.data.image}
              />
              <div className={classes.presidentInfo}>
                <p className={classes.preview_text}>
                  {parse(pData.data.description)[0].props.children}{" "}
                  {parse(pData.data.description)[2].props.children}{" "}
                  <Link to={`/president/${pData.data.id}`}>Read More</Link>
                </p>
                <p className={classes.presidentName}>
                  {pData.data.extra_text.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>
                <p className={classes.presidentPosition}>
                  {pData.data.meta.meta_title.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>
                <p className={classes.presidenBranch}>
                  {pData.data.meta.focus_keyboard}
                </p>
              </div>
            </div>
          </div>
        )}
        <News />
        <Calendar />
        <Carousel
          loading={loading}
          title={"VOTING MEMBERS"}
          data={data}
          config={RESPONSIVE_CONFIG}
        />
        <Slider {...BANNER_CONFIG}>
          {slider?.map((el, index) => (
            <a key={index} rel="noreferrer" target={"_blank"} href={el.link}>
              <img
                style={{ objectFit: "cover", width: "100%" }}
                src={el.image}
                alt={el.title}
              />
            </a>
          ))}
        </Slider>
        <Carousel
          loading={loading}
          data={partners}
          title={"OUR PARTNERS"}
          config={RESPONSIVE_CONFIG}
        />
      </div>
    );
};

export default Home;
