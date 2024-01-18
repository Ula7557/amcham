import classes from "./InnerMembership.module.scss";
import {
  GlobeIcon,
  MapTilerIcon,
  MessageIcon,
  PhoneIcon,
} from "../../assets/icons";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../container/Loader";
import { request } from "../../api";
import { useEffect, useState } from "react";

const InnerMembership = () => {
  const params = useParams();
  const [loading, data] = useFetch(`/company/all/company?id=${params.id}`);
  const [comittet, setCommittet] = useState([]);
  if (!loading && data.data[0]) {
    var {
      title,
      information,
      logo_of_company,
      committee_list_group,
      membership_cat,
      email,
      address,
      telephone,
      website,
      staff,
      full_name_head,
      postal_code,
      contact_person,
      amcham_member_since,
      fax,
    } = data.data[0];
    if (staff !== "undefined") {
      staff = JSON.parse(staff);
    }
  }
  useEffect(() => {
    if (!loading) {
      Promise.all([
        request(`/committee/one/commit?id=${committee_list_group[0]}`),
        request(`/content/all/membership_category?id=${membership_cat}`),
      ])
        .then((res) => {
          const results = res.map((e) => e.data.data);
          setCommittet(results);
        })
        .catch((err) => console.log(err));
    }
  }, [committee_list_group, loading]);
  if (loading) return <Loader size={100} />;

  return (
    <div className={classes.InnerMembership}>
      <div className={classes.hero}>
        <div className="container">
          <h1 className={classes.title}>{title}</h1>
        </div>
      </div>
      <div className="container">
        <div className={classes.row}>
          <div className={classes.extra}>
            <a
              href={
                website !== null && website.includes("http")
                  ? website
                  : `https://${website}`
              }
              target={"_blank"}
              className={classes.image}
              rel="noreferrer"
            >
              <img src={logo_of_company} alt="" />
            </a>
            <div className={classes.user_info}>
              <div className={classes.name}>
                <b>Amcham member since: </b>
                {/* <img src={Calendar} alt="" /> */}
                <span>{amcham_member_since}</span>
              </div>

              <div className={classes.name}>
                {/* <img src={Company} alt="" /> */}
                <b>Head of the company:</b>
                <span>{full_name_head}</span>
              </div>

              <div className={classes.name}>
                <b>Contact person: </b>
                {/* <img src={User} alt="" /> */}
                <span>{contact_person}</span>
              </div>

              <div className={classes.name}>
                <b>Postal code:</b>
                {/* <img src={Post} alt="" /> */}
                <span>{postal_code}</span>
              </div>

              <div className={classes.name}>
                <b>Tax ID: </b>
                {/* <img src={Printer} alt="" /> */}
                <span>{fax}</span>
              </div>
            </div>
          </div>
          <div className={classes.w70}>
            <p className={classes.type}>
              <img src={comittet[0] && comittet[0].image} alt="" />
              {comittet[0] && comittet[0].title}
            </p>
            <p className={classes.description}>{information}</p>

            <div className={classes.status}>
              <div className={classes.status_info}>
                <span
                  className={
                    comittet[1] &&
                    comittet[1][0].title.toLowerCase() + "-coin membership-coin"
                  }
                />
                <p>{comittet[1] && comittet[1][0].title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={classes.FlexBetween}>
          {staff &&
            staff !== "undefined" &&
            staff.map((el) =>
              Object.keys(el).length !== 0 && el.name.length !== 0 ? (
                <div style={staff.length <= 2 ? {width: '30%'} : {}} className={classes.innerCard}>
                  <div className={classes.cardRow}>
                    <b>{el.name}</b>
                    <span>Position: {el.position}</span>
                  </div>
                  <div className={classes.cardRow}>
                    <a href={`tel:${el.telephone}`}>
                      <b>{el.telephone}</b>
                    </a>
                  </div>
                  <div className={classes.cardRow}>
                    <a href={`mailto:${el.email}`}>
                      <b>{el.email}</b>
                    </a>
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
        </div>
      </div>
      <div className={classes.banner}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href={
              website !== null && website.includes("http")
                ? website
                : `https://${website}`
            }
          >
            <GlobeIcon />
            <p>{website}</p>
          </a>
          <a href={`tel:+${telephone}`}>
            <PhoneIcon />
            <p>{telephone}</p>
          </a>
          <a href={`mailto:${email}`}>
            <MessageIcon />
            <p>{email}</p>
          </a>
          <p style={{ padding: 0 }}>
            <MapTilerIcon />
            <span style={{ marginLeft: "15px" }}>{address}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InnerMembership;
