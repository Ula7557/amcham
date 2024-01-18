import {Link, useParams} from "react-router-dom";
import Carousel from "../../components/Carousel";
import classes from "./New.module.scss";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../../container/Loader";
import {useEffect, useState} from "react";
import {request} from "../../api";
import parse from "html-react-parser";
import { useDispatch } from "react-redux";
import { set_pages } from "../../redux/actions";

const New = ({match}) => {
    const [related, setRelated] = useState([])
    const params = useParams();
    const dispatch = useDispatch()
    const [loading, data,] = useFetch(`/content/all/news?id=${params.id}`);
    useEffect(() => {
        request("/content/all/news").then(res => setRelated(res.data)).catch(err => console.warn(err));
          request("/content/all/page")
            .then((res) => dispatch(set_pages(res.data.data)))
            .catch((err) => console.warn(err));
    }, [])
    if (loading) return <Loader size={100}/>;

    const {title, description, file, image} = data.data && data.data[0];
    const parser = () => {
        let parsed_array = [];
        const parsed_images = JSON.parse(file);
        for (let [, value] of Object.entries(parsed_images)) {
            parsed_array.push(value);
        }

        return parsed_array;
    }
    return (
        <div className={classes.New}>
            <div className={classes.heading}>
                {/* <LazyImage image={cover_image ? cover_image : img} classname={classes.img} style={{minHeight: 300}}/> */}
                <div className="container">
                    {/* <span className={classes.date}>{created_on}</span> */}
                    <h1 className={classes.title}>{title}</h1>
                </div>
            </div>
            <div className="container">
                <div className={classes.content}>
                    <div className={classes.main}>
                        <div>
                            <img src={image} style={{marginRight: "16px", maxWidth: 600}} alt=""/>
                        </div>
                        <p className={classes.textContent}>{parse(description)}</p>
                        {
                            file && parser() ? (
                                <Carousel title={"Images"} data={file && parser()}/>
                            ) : (<></>)
                        }
                    </div>
                    <aside className={classes.aside}>
                        <h3 className={classes.readAlso}>Read Also</h3>
                        {related.data && related.data.slice(0, 3).map((el) => (
                            <Link to={`/news/${el.id}`} key={el.id} className={classes.card}>
                                <img src={el.image} className={classes.relatedImg} alt=""/>
                                <h2 className={classes.relatedTitle}>{el.title}</h2>
                            </Link>
                        ))}
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default New;
