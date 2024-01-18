import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../api";
import Loader from "../../container/Loader";
import {EXHIBITIONS_DATA} from "../../db";
import {useFetch} from "../../hooks/useFetch";
import { set_pages } from "../../redux/actions";
import classes from "./Exhibitions.module.scss";

const Exhibitions = () => {
    const [loading, data, error] = useFetch("/content/all/useful_information");
    const directors = useSelector(state => state.system.pages.filter(el => el.id === "173"))[0];
    const dispatch = useDispatch()
    useEffect(() => { 
        request("/content/all/page")
          .then((res) => dispatch(set_pages(res.data.data)))
          .catch((err) => console.warn(err));
      }, []);
    if (loading) return <Loader size={100}/>;
    if (error) return <>Error :(</>;
    return (
      <div className={classes.Exhibitions}>
        <h1 className={classes.exhibitionsTitle}>{directors.title}</h1>
        {data.data?.map((el) => (
          <div style={{ display: "flex", flexDirection: "column" }} key={el.id}>
            <img
              className={classes.exhibitionsImg}
              src={el.cover_image}
              alt=""
            />
            <a
              className={classes.exhibitionsLink}
              rel="noreferrer"
              download
              target="_blank"
              href={el.image}
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    );
};

export default Exhibitions;
