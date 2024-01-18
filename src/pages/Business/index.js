import classes from './Business.module.scss'
import {useFetch} from "../../hooks/useFetch";
import {useEffect, useState} from "react";
import {request} from "../../api";
import parse from "html-react-parser";

const Business = () => {
    const [loading, data, error] = useFetch("/content/all/page?id=159");
    const [state, setState] = useState({});
    useEffect(() => {
        request("/content/all/strategy")
            .then(res => setState(res.data))
            .catch(err => console.log(err));
    }, [])
     if (loading) return null;
    const {description, image, title, extra_desc} = data.data[0]
    return (
        <div className={'containerS'}>
            <h1 className={classes.title}>{title}</h1>
            <img src={image} className={classes.banner} alt=""/>
            <p className={classes.plainText}>
                {extra_desc}

            </p>
            <div className={classes.mission}>
                {parse(description)}
            </div>

            <div className={classes.stepsWrapper}>
                {
                    state.data && state.data.map((el, index) => (
                        <div className={classes.step} key={index}>
                            <h3 className={classes.stepTitle}>{el.title}</h3>
                            <p className={classes.stepSubtitle}>{el.link}</p>
                            {parse(el.description)}
                        </div>

                    ))
                }
            </div>
        </div>
    );
}
export default Business
