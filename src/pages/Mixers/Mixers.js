import classes from './business.module.scss';
import {useFetch} from "../../hooks/useFetch";
import parse from "html-react-parser";
import {Link} from "react-router-dom";

const Mixers = () => {
    const [loading, data, ] = useFetch("/content/all/mixer");
    if (loading) return null;
    return (
        <div className={"container"}>
            <h1 className={classes.title}>Business Mixers</h1>
            <div className={classes.wrapper}>
                {data.data.map(item => (
                    <Link to={item.id} className={classes.card}>
                        <div>
                            <img src={item.image} alt=""/>
                            <h2>{item.title}</h2>
                            <p className={classes.paragraph}>{parse(item.description)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Mixers;
