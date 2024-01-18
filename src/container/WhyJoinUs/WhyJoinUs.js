import classes from "./WhyJoinUs.module.scss";
import Loader from "../Loader";
import {useFetch} from "../../hooks/useFetch";
import LazyImage from "../../components/LazyImage";
import parse from "html-react-parser";

const WhyJoinUs = () => {
    const [loading, data, error] = useFetch("/content/all/why_join_us?sortby=sort&sort=asc");
    if (loading) return <Loader size={60}/>;
    if (error) return <>Error :(</>;
    return (
      <div className={classes.joinUsWrapper}>
        <div className="container">
          <h2 className={classes.title}>{`WHY JOIN US`}</h2>
          <div className={classes.dFlex}>
            {data.data.slice(0, 4).map((el) => (
                <div className={classes.column} key={el.id}>
                    <LazyImage image={el.image} classname={classes.image}/>
                    <a href={el.link} className={classes.link}>
                        {el.title}
                    </a>
                    <div className={classes.text}>{parse(el.description)}</div>
                </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default WhyJoinUs;
