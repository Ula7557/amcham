import classes from "./about.module.scss";
import ChamberUl from "../../components/Dropdown/about-chamber-li/chamber-ol";
import Image from '../../assets/images/uzb-amerika.jpg'

const AboutChamber = () => {
  return (
    <div className="container">
      <div className={classes.aboutprezidentBlock}>
      <h1 className={classes.aboutTitletext}>ABOUT THE CHAMBER</h1>
      <img src={Image} alt="img" className={classes.AboutChamberImg} />
      <p className={classes.prezidenttext}>
        Organized in 1997 by members of foreign business community resident in
        Uzbekistan, the AmCham Uzbekistan is a voluntary, independent
        association of businesspersons and entities that unites mostly foreign
        companies originating from US, Europe and South Pacific Asia.
      </p>
      <p className={classes.prezidenttext}>
        AmCham’s membership is diverse, representing all types and sizes of
        businesses and their interests. Currently there are over 100 members of
        our organization. AmCham is an affiliate and a fully accredited member
        of the Chamber of Commerce of the United States, and as such, is
        eligible to use that organization’s informational and other facilities.
      </p>
      <div className={classes.AboutChamberBlock}>
        <h2 className={classes.AboutChamberBlueText}>Our Mission</h2>
        <p className={classes.AboutChamberBlueInfo}>
          “Be partners for success of the business community in Uzbekistan while
          promoting the global competitiveness of the country”
        </p>
        <h2 className={classes.AboutChamberBlueText}>Vision</h2>
        <p className={classes.AboutChamberBlueInfo}>
        “Driving economic prosperity of Uzbekistan through business”
        </p>
      </div>
      <ChamberUl
          title={'Business to Business'}
          description={'“Be partners for success of the business community in Uzbekistan while promoting the global competitiveness of the country'}
          list={'Monthly events featuring government officials, heads of IFIs and diplomats'}
      />
       <ChamberUl
          title={'Business to Business'}
          description={'“Be partners for success of the business community in Uzbekistan while promoting the global competitiveness of the country'}
          list={'Monthly events featuring government officials, heads of IFIs and diplomats'}
      />
       <ChamberUl
          title={'Business to Business'}
          description={'“Be partners for success of the business community in Uzbekistan while promoting the global competitiveness of the country'}
          list={'Monthly events featuring government officials, heads of IFIs and diplomats'}
      />
       <ChamberUl
          title={'Business to Business'}
          description={'“Be partners for success of the business community in Uzbekistan while promoting the global competitiveness of the country'}
          list={'Monthly events featuring government officials, heads of IFIs and diplomats'}
      />
    </div>
    </div>
  );
};

export default AboutChamber;
