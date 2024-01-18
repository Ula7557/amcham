import classes from './about.module.scss'
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import parse from "html-react-parser";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../api';
import { set_pages } from "../../redux/actions";

const SingleBoard = () => {
    const params = useParams();
    const [loading, data, error] = useFetch(`/content/one/president_note?id=${params.id}`);
    const directors = useSelector(state => state.system.pages.filter(el => el.id === "170"))[0];
    const dispatch = useDispatch()
    useEffect(() => { 
        request("/content/all/page")
          .then((res) => dispatch(set_pages(res.data.data)))
          .catch((err) => console.warn(err));
      }, []);
    if (loading) return null;
    const {image, description,title} = data.data;
    return (
        <div className="container">
            {
                data.status !== 0 ? (
                    <div className={classes.aboutprezidentBlock} style={{minHeight: "60vh"}}>
                        <h1 className={classes.aboutTitletext}>{directors.title}</h1>
                        <div className={classes.aboutprezidentBlockInner}>
                            <img className={classes.prezidentImg} src={image} alt=""/>
                            {parse(description)}
                        </div>
                    </div>
                ) : (
                    <h1>data.message</h1>
                )
            }

        </div>
    );
}

export default SingleBoard;
