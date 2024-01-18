import classes from "./Member2Member.module.scss";
import parse from "html-react-parser";
import { useFetchSorted } from "../../hooks/useFetch";
import Loader from "../../container/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { request } from "../../api";
import { set_pages } from "../../redux/actions";

const Member2Member = () => {
  const [loading, data] = useFetchSorted(`/member/all/member`, "discount");
  const dispatch = useDispatch()
  useEffect(() => { 
    request("/content/all/page")
      .then((res) => dispatch(set_pages(res.data.data)))
      .catch((err) => console.warn(err));
  }, []);
  const membership = useSelector((state) =>
    state.system.pages.filter((el) => el.id === "57")
  )[0];
  if (loading) return <Loader size={100} />;
  return (
    <div className={classes.Wrapper}>
      <Helmet>
        <title>{membership.title}</title>
      </Helmet>
      <div className={classes.banner}>
        <h1 className={classes.title}>{membership.title}</h1>
      </div>
      <div className={classes.info}>
        <div className={classes.image}>
          <img src={membership.image} alt="" />
        </div>
        <div className={classes.content}>
          <p>{parse(membership.description)}</p>
        </div>
      </div>
      <div className={classes.contentWrapper}>
        {!loading &&
          data.data.map((el) => (
            <div className={classes.card} key={el.id}>
              <div className={classes.imageHolder}>
                <img src={el.image} alt="" />
              </div>
              <div className={classes.cardContent}>
                <div style={{ display: "flex" }}>
                  <h2 className={classes.cardTitle}>{el.title}</h2>
                  <span
                    className={`${classes.discount} ${classes.ribbonTopRight}`}
                  >
                    <span>{el.discount}</span>
                  </span>
                </div>
                <ul>
                  <h3 className={classes.listGourpName}>{el.description}</h3>
                  <li className={classes.listItem}>{el.valid_date}</li>
                </ul>
                <div className={classes.contactInfos}>
                  <p>{el.person}</p>
                  <p>
                    <b>Telephone: </b>
                    {el.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Member2Member;
