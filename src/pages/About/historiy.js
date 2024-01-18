import classes from "./about.module.scss";
import HistoriyImg from "../../assets/images/historiy.png";

const AmchamHistoriy = () => {
  return (
    <div className="container">
      <div className={classes.aboutprezidentBlock}>
      <h1 className={classes.aboutTitletext}>Historiy</h1>
      <p className={classes.prezidenttext}>
        AmCham in Uzbekistan can trace its roots to the early 1990’s when a
        group of primarily US companies started the “American Business Council”
        in Tashkent. Eventually, the group saw value in forming an independent
        legal entity in Uzbekistan that could represent foreign business
        interests on a national level and help facilitate greater trust and
        business relations between Uzbekistan and the USA. In 1996, their vision
        became a reality.
      </p>
      <p className={classes.prezidenttext}>
        While AmCham began as an association comprised primarily of US-based
        companies and organizations, it has since transformed into a group with
        members from all over the world. The organization is currently at its
        highest membership total since its founding, at well over 100, and
        remains the only registered independent business association in
        Uzbekistan.
      </p>
      <h5 className={classes.aboutHistoriyMiniText}>AmCham Timeline:</h5>
      <img
        src={HistoriyImg}
        className={classes.aboutHistoriyImg}
        alt="historiy images"
      />
    </div>
    </div>
  );
};

export default AmchamHistoriy;
