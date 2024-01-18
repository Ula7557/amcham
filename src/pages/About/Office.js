import classes from "./about.module.scss";
import {Image} from "antd";
import "antd/dist/antd.css";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../../container/Loader";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import { request } from "../../api";
import { set_pages } from "../../redux/actions";

const AboutOffice = () => {
    const [loading, data, error] = useFetch("/content/all/staff");
    const dispatch = useDispatch()
    useEffect(() => { 
      request("/content/all/page")
        .then((res) => dispatch(set_pages(res.data.data)))
        .catch((err) => console.warn(err));
    }, []);
    if (loading) return <Loader size={80}/>;
  if (error) return <>Error :(</>;

    return (
      <div className="container">
        <div className={classes.aboutprezidentBlock}>
          <h1 className={classes.aboutTitletext}>AMCHAM OFFICE</h1>
          <div className={classes.aboutOfficeCardBlock}>
            {data.data.map((el) => (
              <div key={el.id} className={classes.aboutOfficeCard}>
                <img alt={el.title} src={el.image} />
                <h4 className={classes.aboutOfficeCardTitle}>{el.title}</h4>
                <h5 className={classes.aboutOfficeCardDescription}>
                  {el.extra_text}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default AboutOffice;
