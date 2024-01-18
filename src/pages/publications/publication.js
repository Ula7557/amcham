import classes from "./publications.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const Publication = () => {
  const [loading, data, error] = useFetch("/content/all/publication");
  const publication = useSelector((state) =>
    state.system.pages.filter((el) => el.id === "172")
  )[0];
  if (loading) return null;
  if (error) return <>Error :(</>;
  return (
    <div className="container">
      <Helmet>
        <title>{publication.title}</title>
      </Helmet>
      <div className={classes.publicationBlock}>
        <h1 className={classes.publicationTitle}>{publication.title}</h1>
        <div className={classes.publicationBlockInner}>
          {data?.data?.map((item, index) => (
            <a
              key={index}
              rel="noreferrer"
              target="_blank"
              href={item.image}
              className={classes.publicationBlockCardLink}
            >
              <div className={classes.publicationBlockCard}>
                <img
                  src={item.cover_image}
                  alt=""
                  className={classes.publicationBlockCardImg}
                />
                {item.title}
              </div>
            </a>
          ))}
          {data.status === 0 ? (
            <h1 style={{ textAlign: "center", width: "100%" }}>
              No publications yet
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Publication;
