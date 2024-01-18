import classes from "./Footer.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { request } from "../../api";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { set_banner } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.system.banner);
  useEffect(() => {
    request("/system/settings/all")
      .then((res) => {
        dispatch(set_banner(res.data.data));
      })
      .catch((err) => console.log(err));
  }, []);
  if (settings && settings.length > 0) {
    var favicon = settings.filter((el) => el.settings_key === "site_favicon")[0]
      .settings_value;
    var name = settings.filter((el) => el.settings_key === "site_name")[0]
      .settings_value;
    var email = settings.filter(
      (el) => el.settings_key === "administrator_email"
    )[0].settings_value;
    var phone = settings.filter((el) => el.settings_key === "phone_number")[0]
      .settings_value;
    var facebook = settings.filter((el) => el.settings_key === "social_fb")[0]
      .settings_value;
    var linkedin = settings.filter(
      (el) => el.settings_key === "social_linkedin"
    )[0].settings_value;
    var instagram = settings.filter(
      (el) => el.settings_key === "social_instagram"
    )[0].settings_value;
    var address = settings.filter(
      (el) => el.settings_key === "company_address"
    )[0].settings_value;
    var maps = settings.filter((el) => el.settings_key === "google_map")[0]
      .settings_value;
    var copyright = settings.filter(
      (el) => el.settings_key === "unavailable_message"
    )[0].settings_value;
  }

  return (
    <div className={classes.footer}>
      <Helmet>
        <link rel="icon" type="image/x-icon" href={favicon} />
        <title>{name}</title>
      </Helmet>
      <div className={classes.footerContainer}>
        <div className={classes.footerInner}>
          <div className={classes.footerInnerTop}>
            <div className={classes.footerInnerLeft}>
              <h5 className={classes.footerInnerLogotip}>Amcham Uzbekistan</h5>
              <p className={classes.footerInnerLogoText}>
                International Business United for Success
              </p>
            </div>
            <div className={classes.footerInnerMiddle}>
              <a href={`tel:${phone}`} className={classes.footerLinkBlock}>
                <span className={classes.middleLinkIcon}>
                  <BsTelephoneFill />
                </span>
                <p className={classes.footerLink}>(+998)78 140 08 77 </p>
              </a>
              <a href="mailto:test@mail.cu" className={classes.footerLinkBlock}>
                <span className={classes.middleLinkIcon}>
                  <AiOutlineMail />
                </span>
                <p className={classes.footerLink}>{email}</p>
              </a>
              <a href={maps} className={classes.footerLinkBlock}>
                <p className={classes.footerLink}>
                  <span className={classes.middleLinkIcon}>
                    <MdLocationOn />
                  </span>
                  {address} <br /> Tashkent, Uzbekistan 100060{" "}
                </p>
              </a>
            </div>
            <div className={classes.footerInnerRight}>
              <a href={facebook} className={classes.footerRightLink}>
                <span className={classes.footerSpan}>
                  <FaFacebookF />
                </span>
              </a>
              <a href={linkedin} className={classes.footerRightLink}>
                <span className={classes.footerSpan}>
                  <RiLinkedinFill />
                </span>
              </a>
              <a href={instagram} className={classes.footerRightLink}>
                <span className={classes.footerSpan}>
                  <FiInstagram />
                </span>
              </a>
            </div>
          </div>
          <div className={classes.footerInnerBottom}>
            <p className={classes.footerInnerCpoy}>{copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
