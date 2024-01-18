import classes from "../../container/News/News.module.scss";
import {Link} from "react-router-dom";
import LazyImage from "../LazyImage";

const EventCard = ({image, title, description, id}) => {
    return (
        <Link className={classes.Card} to={id}>
            <LazyImage classname={classes.cardImage} image={image}/>
            <div className={classes.content}>
                <h2>{title}</h2>
                <p>{description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            </div>
        </Link>
    );
}
export default EventCard
