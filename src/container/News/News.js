import {NEWS_AND_EVENTS} from "../../db";
import classes from "./News.module.scss";
import {useEffect, useState} from "react";
import {request} from "../../api";
import EventCard from "../../components/EventCard/EventCard";

const News = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        request("/content/all/news")
            .then(res => setState(res.data.data))
            .then(err => console.log(err));
    }, [])
    return (
<>
    <h2 className={classes.title}>{NEWS_AND_EVENTS.title}</h2>

    <div className={classes.News}>
        <div className="container">
            <div className={classes.wrapper}>
                {state.length > 0 && state.slice(0, 3).map((el) => (
                    <EventCard
                        title={el.title}
                        key={el.id}
                        description={el.description}
                        id={`/news/${el.id}`}
                        image={el.image}
                    />
                ))}
            </div>
        </div>
    </div>
</>

    );
};

export default News;
