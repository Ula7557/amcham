import classes from "./about.module.scss";
import BoardCards from "../../components/Dropdown/about/about-boars-card";
import {useFetch} from "../../hooks/useFetch";
import parse from "html-react-parser";
import {useSelector} from "react-redux";
import { useEffect } from "react";
import { request } from "../../api";
import { set_pages } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Boards = () => {
    const [loading, data, error] = useFetch(
      "/content/all/board_directors?sortby=sort&sort=asc"
    );
    const directors = useSelector(state => state.system.pages.filter(el => el.id === "160"))[0];
   const dispatch = useDispatch()
        useEffect(() => {
          request("/content/all/page")
            .then((res) => dispatch(set_pages(res.data.data)))
            .catch((err) => console.warn(err));
        }, []);
    if (loading) return null
    if (error) return null
    return (
        <div className="container">
            <div className={classes.aboutprezidentBlock}>
                <h1 className={classes.aboutTitletext}>{directors.title}</h1>
                <img src={directors.image} alt="img" className={classes.AboutChamberImg}/>
                <p className={classes.prezidenttext}>
                    {parse(directors.description)}
                </p>

                    <div className={classes.wrapper}>
                        {
                            data.data.map(el => (
                                    <BoardCards
                                        id={el.id}
                                        key={el.id}
                                        title={el.title}
                                        link={"PROFILE"}
                                        image={el.image}
                                    />
                                )
                            )
                        }
                    </div>
            </div>
        </div>
    );
};

export default Boards;
