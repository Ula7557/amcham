import { SINGE_COMMITTEES } from "../../db";
import CalendarIcon from "../../assets/icons/Calendar-icon.svg";
import classes from "./SingleCommittees.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  BsChevronCompactDown,
  BsChevronCompactRight,
  BsChevronCompactUp,
} from "react-icons/bs";

import { useEffect, useState } from "react";
import Modal from "../../container/Modal";
import { Link, useParams } from "react-router-dom";
import CustomCalendar from "../../components/CustomCalendar";
import { request } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../container/Loader";
import parse from "html-react-parser";

const SingleCommittees = () => {
  const modalHandler = (id) => {
    setOpenModal(id);
  };
  const params = useParams();
  const [selectedEvents, setSelectedEvents] = useState({
    data: [],
    loading: false,
  });
  const [selectedDay, setSelectedDay] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date(),
  });
  const [openModal, setOpenModal] = useState(false);
  const [news, setNews] = useState(false);
  const [collapseState, setCollapseState] = useState(false);

  const [loading, data] = useFetch(`/committee/one/commit?id=${params.id}`);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    request(`/profile/get-profile?committee_id=${params.id}`)
      .then((res) => {
        if (res.data.status === 0) {
          setProfile([]);
        } else {
          setProfile(res.data.data);
        }
      })
      .catch((err) => console.log(err));
    request(
      `/event/all?y=${selectedDay.year}&d=${selectedDay.day}&m=${selectedDay.month}`
    )
      .then((response) =>
        setSelectedEvents({ data: response.data, loading: true })
      )
      .catch((err) => console.warn(err));
    request(`/content/all/news?committee_id=${params.id}`)
      .then((response) => setNews(response.data))
      .catch((err) => console.warn(err));
  }, [selectedDay]);
  if (loading) return <Loader size={100} />;
  const { title, description, our_mission } = data.data;
  return (
    <>
      <div className={classes.CommitteeWrapper}>
        <div className={classes.container}>
          <div className={classes.Main}>
            <h1 className={classes.mainTitle}>{title}</h1>
            <div className={classes.Dflex}>
              <div className={classes.wrapper}>
                <p>{parse(description)}</p>
                <div
                  className={classes.collapse}
                  onClick={() => setCollapseState(!collapseState)}
                >
                  <div className={classes.innerCollapse}>
                    <p className={classes.CollapseTitle}>{"Our Mission"}</p>
                    <button className={classes.collapseIcon}>
                      {collapseState ? (
                        <BsChevronCompactUp />
                      ) : (
                        <BsChevronCompactDown />
                      )}
                    </button>
                  </div>
                  <div
                    className={classes.collapseContent}
                    style={{
                      height: collapseState ? "max-content" : "0",
                      padding: collapseState ? "8px 15px" : "0 15px",
                    }}
                  >
                    <p>{parse(String(our_mission))}</p>
                  </div>
                </div>
                <h3 className={classes.subtitle}>{title} news</h3>
                <div className={classes.cardsWrapper}>
                  {news.data &&
                    news.data.map((el) => (
                      <div className={classes.card} key={el.id}>
                        <img
                          src={el.cover_image}
                          alt=""
                          className={classes.cardImage}
                        />
                        <div className={classes.cardContent}>
                          <span className={classes.date}>
                            <img src={CalendarIcon} alt="" />
                            {new Date(el.created_on).getFullYear()}-
                            {new Date(el.created_on).getMonth()}-
                            {new Date(el.created_on).getDay()}
                          </span>
                          <h2 className={classes.cardTitle}>{el.title}</h2>
                          <p className={classes.cardText}>
                            {parse(`${el.description}`)}
                          </p>
                          <Link to={`/news/${el.id}`}>
                            <button className={classes.CardButton}>
                              <AiOutlineArrowRight />
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <aside className={classes.aside}>
                <div className={classes.Redirect}>
                  <h2 className={classes.redirectTitle}>{title}</h2>
                  <p className={classes.redirectDescribtion}>
                    {/*{modal.description}*/}
                  </p>
                  {profile.length !== 0 && (
                    <button
                      onClick={modalHandler}
                      className={classes.redirectButton}
                    >
                      {"See committee chair profile"}
                      <span>
                        <BsChevronCompactRight />
                      </span>
                    </button>
                  )}
                </div>
                <div className="calendar" style={{ marginTop: "1rem" }}>
                  <CustomCalendar
                    state={state}
                    setState={setState}
                    setSelectedDay={setSelectedDay}
                  />

                  <div className={classes.content}>
                    <h2>Events</h2>
                    <div className={classes.events}>
                      {selectedEvents.loading && selectedEvents.data.data ? (
                        selectedEvents.data.data.map((el) => (
                          <Link
                            to={`/events/${el.id}`}
                            className={classes.event}
                            key={el.id}
                          >
                            <div className={classes.eventDate}>
                              <p>Jan. 25,2022</p>
                              <b>10:00AM</b>
                            </div>
                            <div className={classes.eventInfo}>
                              <span>Today</span>
                              <h3 className={classes.eventName}>{el.title}</h3>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <>NO EVENTS SORRY </>
                      )}{" "}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>{" "}
      {openModal ? (
        <Modal
          opened={openModal}
          data={data.data}
          user={profile}
          setOpenModal={setOpenModal}
        />
      ) : null}
    </>
  );
};

export default SingleCommittees;
