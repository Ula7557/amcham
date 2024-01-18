import {Link} from "react-router-dom";
import classes from "./Committees.module.scss";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useFetch} from "../../hooks/useFetch";
import {useDispatch, useSelector} from "react-redux";
import parse from "html-react-parser";
import {Helmet} from "react-helmet";
import { useEffect } from "react";
import { request } from "../../api";
import { set_pages } from "../../redux/actions";

const Committees = () => {
    const [loading, data,] = useFetch("/committee/all/commit")
    const committees = useSelector(state => state.system.pages.filter(el => el.id === "166"))[0];
    const dispatch = useDispatch()
    useEffect(() => { 
      request("/content/all/page")
        .then((res) => dispatch(set_pages(res.data.data)))
        .catch((err) => console.warn(err));
    }, []);
    if (loading) return null;
    return (
        <div className={classes.Committees}>
            <Helmet>
                <title>
                    {committees.title}
                </title>
            </Helmet>
            <div className={classes.Heading}>
                <h1 className={classes.title}>{committees.title}</h1>
                <p className={classes.describtion}>{parse(`${committees.description}`)}</p>
            </div>
            <div className={classes.content}>
                <h2 className={classes.subtitle}>{"AmCham Uzbekistan currently has following committeess:"}</h2>
                <div className={classes.wrapper}>
                    {data.data.map((el) => (
                        <div className={classes.card} key={el.id}>
                            <img className={classes.cardImg} src={el.image} alt=""/>
                            <h3 className={classes.cardTitle}>{el.title}</h3>
                            <p className={classes.cardDescribtion}>{parse(el.description)}</p>
                            <Link className={classes.link} to={el.id}>
                                <AiOutlineArrowRight/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Committees;
