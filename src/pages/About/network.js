import classes from "./about.module.scss";
import Work from "../../assets/images/work.png";

const AboutNetwork = () => {
  return (
    <div className="container">
      <div className={classes.aboutprezidentBlock}>
        <h1 className={classes.aboutTitletext}>GLOBAL AMCHAM NETWORK</h1>
        <div className={classes.aboutprezidentBlockInner}>
        <img src={Work} alt="img" className={classes.AboutChamberImg} />
          <p className={classes.prezidenttext}>
            AmCham is a powerful business network represented in 108 countries
            around the Globe. AmCham network represents interest of over 3 000
            000 companies worldwide. AmCham in Uzbekistan is afficilated member
            of U.S. Chamber of Commerce. The U.S. Chamber of Commerce is the
            world’s largest business organization representing the interests of
            more than 3 million businesses of all sizes, sectors, and regions.
          </p>
          <p className={classes.prezidenttext}>Find AmCham Global network here <a className={classes.aboutNetworkLink} href="http://www.amcham.be/about-us/global-amcham-network">http://www.amcham.be/about-us/global-amcham-network</a> </p>
        </div>
      </div>
    </div>
  );
};

export default AboutNetwork;
