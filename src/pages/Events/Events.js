import classes from './Events.module.scss'
import {useFetch} from "../../hooks/useFetch";
import Loader from "../../container/Loader";
import EventCard from "../../components/EventCard/EventCard";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import { useEffect } from 'react';
import { request } from '../../api';
import { set_pages } from '../../redux/actions';

const Events = () => {
    const [loading, data, error] = useFetch("/event/all")
    const events = useSelector(state => state.system.pages.filter(el => el.id === "169"))[0];
    const dispatch = useDispatch()
    useEffect(() => {
          request("/content/all/page")
            .then((res) => dispatch(set_pages(res.data.data)))
            .catch((err) => console.warn(err));
    }, [])
    if (loading) return <Loader size={60}/>
    if (error) return <>Error :(</>;
    return (
      <div className={"container"}>
        <Helmet>
          <title>{events.title}</title>
        </Helmet>
        <div className={classes.banner}>
          <h1 className={classes.bannerTitle}>{events.title}</h1>
        </div>
        <div style={{ margin: "0 auto", width: "100%" }}>
          <div className={classes.main_wrapper}>
            <div className={classes.wrapper}>
              {data.data.map((element) => (
                <EventCard
                  title={element.title}
                  id={element.id}
                  description={element.description}
                  image={element.image}
                  key={element.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
export default Events
