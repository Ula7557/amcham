import classes from "./SectorMembership.module.scss";
import {useEffect, useState} from "react";
import {request} from "../../api";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import { set_pages } from "../../redux/actions";

const SectorMembership = () => {
    const [state, setState] = useState([]);
    const [company, setCompany] = useState([]);
    const membership = useSelector(state => state.system.pages.filter(el => el.id === "164"))[0];
    const dispatch = useDispatch()
    useEffect(() => {
        request("/content/all/page")
            .then((res) => dispatch(set_pages(res.data.data)))
            .catch((err) => console.warn(err));
        request("/content/all/industry")
            .then(async (res) => await setState(res.data))
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        if (state.data) {
            const promises = [];
            state.data.forEach((el) => {
                promises.push(request(`/company/all/company?industry=${el.id}`));
            });
            Promise.all(promises)
                .then((responses) => {
                    const names = responses.map((response) => response.data);
                    setCompany(names);
                })
                .catch((err) => console.log(err));
        }
    }, [state]);
    return (
        <div>
            <Helmet>
                <title>{membership.title}</title>
            </Helmet>
            <div className={classes.banner}>
                <h1 className={classes.title}>{membership.title}</h1>
            </div>
            <div className={` ${classes.content}`}>
                {state.data &&
                state.data.map((el, index) => (
                    <div className={classes.card} key={el.id}>
                        <div className={classes.row}>
                            <div className={classes.header}>
                                <img src={el.image} alt=""/>
                                <h3 className={classes.cardTitle}>{el.title}</h3>
                            </div>
                            <div className={classes.innerContent}>
                                {company[index] && company[index].data ? (
                                    company[index].data.map((link) => (
                                        <Link
                                            className={classes.sectorName}
                                            to={`/membership/${link.id}`}
                                            key={link.id}
                                        >
                                            {link.title}
                                        </Link>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectorMembership;
