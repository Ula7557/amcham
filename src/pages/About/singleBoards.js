import classes from './about.module.scss'
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import parse from "html-react-parser";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { request } from '../../api';
import { set_pages } from "../../redux/actions";

const SingleBoard = () => {
    const params = useParams();
    const [loading, data, error] = useFetch(`/content/all/board_directors?id=${params.id}`);
    const dispatch = useDispatch()
    useEffect(() => {
      request("/content/all/page")
        .then((res) => dispatch(set_pages(res.data.data)))
        .catch((err) => console.warn(err));
    }, []);
    if (loading) return null;
    const { image, description, position } = data.data[0];
    return (
        <div className="container">
            {
                data.status !== 0 ? (
                    <div style={{minHeight: "60vh"}} className={classes.aboutprezidentBlock}>
                        <h1 className={classes.aboutTitletext}>{position}</h1>
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
