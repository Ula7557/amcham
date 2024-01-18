import classes from "./News.module.scss";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../../container/Loader";
import {Pagination} from "antd";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import NextIcon from "../../assets/images/nextIcon.svg";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import { request } from "../../api";
import { set_pages } from "../../redux/actions";

const News = () => {
    const [page, setPage] = useState(1)
    const [loading, data, error] = useFetch(`/content/all/news?page=${page}`, page);
    const news = useSelector(state => state.system.pages.filter(el => el.id === `171`))[0];
    const dispatch = useDispatch()
    useEffect(() => { 
      request("/content/all/page")
        .then((res) => dispatch(set_pages(res.data.data)))
        .catch((err) => console.warn(err));
    }, []);
    if (loading) return <Loader size={100}/>;
    if (error) return <Loader size={100}/>;
    return (
        <div className={`container ${classes.newsBlock}`}>
            <h1 className={classes.newsBlockTitle}>{news.title}</h1>
            <Helmet>
                <title>{news.title}</title>
            </Helmet>
            <div className={classes.newsCardBlock}>
                {data.data ? (
                    data.data.map((item, index) => (
                        <div key={index} className={classes.newsCard}>
                            <img src={item.image} alt="img" className={classes.newsCardImg}/>
                            {/* <p className={classes.newsCardData}>
                                {
                                    String(new Date(item.created_on.replace(/ /g,"T")).toLocaleString("default", {month: "short"}))
                                }{" "}
                                {
                                    String(new Date(item.created_on.replace(/ /g,"T")).getDate()).padStart(2, '0')
                                }{" "}
                                {
                                    String(new Date(item.created_on.replace(/ /g,"T")).getFullYear())
                                }
                            </p> */}
                            <p className={classes.newsCardDescription}>{item.title}</p>
                            <Link to={`/news/${item.id}`} className={classes.newsCardUrl}>
                                <img src={NextIcon} alt="" className={classes.newsCardUrlIcon}/>
                            </Link>
                            <div className={classes.cardShadov}></div>
                        </div>
                    ))
                ) : (
                    <h1 style={{
                        fontWeight: "600",
                        fontSize: "30px",
                        lineHeight: 5,
                        textAlign: "center",
                        width: "100%"
                    }}>Result not
                        found</h1>
                )}
            </div>
            <div className={classes.paginationNewsBlock}>
                <Pagination defaultCurrent={1} onChange={e => setPage(e)} total={data.data.length}/>
            </div>
        </div>
    );
};

export default News;
