import Loader from "../../container/Loader";
import { useFetch } from "../../hooks/useFetch";
import parse from "html-react-parser";
import classes from "./UsefulInformation.module.scss";
const UsefulInformations = () => {
  const [loading, data, error] = useFetch("/content/all/useful_information");
  if (loading) return <Loader size={100} />;
  if(error) return <>Error :(</>
  return (
    <div className="container">
      <h2 className={classes.InformationTitle}>
        Useful Information for the Members
      </h2>
      <div className={classes.content}>
        {data.data.map((el) => (
          <div className={classes.information} key={el.id}>
            <img src={el.cover_image} alt="" />
            <div className={classes.cardContent}>
              <h3 className="title">{el.title}</h3>
              <h3 className={classes.subtitle}>{parse(el.description)}</h3>
              <a href={el.image} download={true}>
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsefulInformations;
