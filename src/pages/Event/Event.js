import { EVENT_DATAS } from "../../db";
import classes from "./Event.module.scss";
import { Link, useParams } from "react-router-dom";
import { AiOutlineClockCircle, AiOutlinePlayCircle, BsCalendarWeek, IoLocationOutline, } from "react-icons/all";
import { useFetch } from "../../hooks/useFetch";
import Carousel from "../../components/Carousel/Carousel";
import { formatAMPM } from "../../utils";
import LazyImage from "../../components/LazyImage";
import { useEffect, useState } from "react";
import { request } from "../../api";
import Gold from '../../assets/icons/GoldMine.png'
import Platinum from '../../assets/icons/PlatinumMine.png'
import Silver from '../../assets/icons/SilverMine.png'
import Bronze from '../../assets/icons/BronzeMine.png'
import parse from "html-react-parser";
import { youtubeIdGenerator } from "../../utils/youtube_id_obtainer";
import { generate_date } from "../../utils/generate_date";

const Event = () => {
  const params = useParams()
  const [loading, data,] = useFetch(`/event/all?id=${params.id}`);
  const [others, setOthers] = useState([]);
  useEffect(() => {
    if (!loading || data.status !== 0) {
      request(
        `/event/all?committee_id=${data.data && data.data[0].committee_id}`
      )
        .then((res) => {
          let currentIndex = res.data.data.findIndex(
            (i) => i.id === data.data[0].id
          );
          const modifiend = res.data.data;
          modifiend.splice(currentIndex, 1);
          if (modifiend.length > 3) {
            modifiend.splice(0, modifiend.length - 3);
          }
          setOthers(modifiend);
        })

        .catch((er) => console.log(er));
    }
  }, [loading]);
  if (loading || data.status === 0) return null;
  console.log(data);
  const {
    title,
    description,
    speakers,
    gallery,
    place,
    begin_date_time,
    url,
    image,
    agenda,
    video_url,
    platinum,
    gold,
    bronza,
    silver
  } = data?.data[0];
  return (
    <div className={classes.Events}>
      <div className="container">
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.eventDatas}>
          <div className={classes.eventDatasInner}>
            <BsCalendarWeek />
            <span className={classes.eventSpan}>Data:</span>
            <p className={classes.eventText}>
              {String(
                new Date(begin_date_time.replace(/ /g, "T")).toLocaleString(
                  "default",
                  { month: "short" }
                )
              )}{" "}
              {String(
                new Date(begin_date_time.replace(/ /g, "T")).getDate()
              ).padStart(2, "0")}{" "}
              {String(
                new Date(begin_date_time.replace(/ /g, "T")).getFullYear()
              )}
            </p>
          </div>
          <div className={classes.eventDatasInner}>
            <AiOutlineClockCircle />
            <span className={classes.eventSpan}>Time:</span>
            <p className={classes.eventText}>
              {formatAMPM(new Date(begin_date_time))}
            </p>
          </div>
          <div className={classes.eventDatasInner}>
            <IoLocationOutline />
            <span className={classes.eventSpan}>Place:</span>
            <p className={classes.eventTextRed}>{place}</p>
          </div>
          <div className={classes.eventDatasInner}>
            <AiOutlinePlayCircle />
            <span className={classes.eventSpan}>Start:</span>
            <p className={classes.eventTextRed}>
              {formatAMPM(new Date(begin_date_time))}
            </p>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.main}>
            <div style={{ minHeight: '400px' }}>
              <div style={{ float: "left", paddingRight: 20 }}>
                <img
                  src={image}
                  style={{
                    display: "block",
                    marginBottom: "20px",
                    maxHeight: 400,
                  }}
                  width={"500px"}
                  alt=""
                />
              </div>
              <p style={{ display: "inline" }}>{parse(description)}</p>
            </div>
            <br />
            {speakers && speakers[0].name.length !== 0 ? (
              <h2 className={classes.extraTitle}>{"Speakers"}</h2>
            ) : null}
            <div className={classes.speacerBlock}>
              {speakers &&
                speakers.map(
                  (item, index) =>
                    item &&
                    item.name.length !== 0 && (
                      <div className={classes.mainCard} key={index}>
                        <div className={classes.mainCardImgBlock}>
                          <img
                            src={item.avatar}
                            className={classes.img}
                            alt=""
                          />
                        </div>
                        <p className={classes.personName}>{item.name}</p>
                        <p className={classes.personLink}>{item.position}</p>
                      </div>
                    )
                )}
            </div>
            {agenda && agenda[0].begin_time.length !== 0 ? (
              <h2 className={classes.extraTitle}>{"Agenda"}</h2>
            ) : null}
            <div className={classes.agendaWrapper}>
              {agenda &&
                agenda.map(
                  (element, index) =>
                    element &&
                    element.begin_time.length !== 0 && (
                      <div className={classes.agenda} key={index}>
                        <span>{index + 1}</span>
                        <div>
                          <p>
                            {generate_date(
                              element.begin_time.replace(/ /g, "T")
                            )}{" "}
                            --{" "}
                            {generate_date(
                              element.end_time.replace(/ /g, "T")
                            )}
                          </p>
                          {element.extra_desc && parse(element.extra_desc)}
                        </div>
                      </div>
                    )
                )}
            </div>
            <div className={classes.linkBlock}>
              {url.length !== 0 && (
                <a href={url} className={classes.linkUrl}>
                  Register here
                </a>
              )}
            </div>

            {gold.length !== 0 ||
              silver.length !== 0 ||
              platinum.length !== 0 ||
              (bronza.length !== 0 && (
                <div className={classes.tariffs}>
                  <div className={classes.tarifItem}>
                    <h4>Number of participants from members:</h4>
                    <span>
                      Platinum: <b>{platinum.length === 0 ? 0 : platinum}</b>
                    </span>
                    <img
                      width={"120px"}
                      height={"120px"}
                      src={Platinum}
                      alt=""
                    />
                  </div>
                  <div className={classes.tarifItem}>
                    <h4>Number of participants from members:</h4>
                    <span>
                      Gold: <b>{gold.length === 0 ? 0 : gold}</b>
                    </span>
                    <img width={"120px"} height={"120px"} src={Gold} alt="" />
                  </div>
                  <div className={classes.tarifItem}>
                    <h4>Number of participants from members:</h4>
                    <span>
                      Silver: <b>{silver.length === 0 ? 0 : silver}</b>
                    </span>
                    <img
                      width={"120px"}
                      height={"120px"}
                      src={Silver}
                      alt=""
                    />
                  </div>
                  <div className={classes.tarifItem}>
                    <h4>Number of participants from members:</h4>
                    <span>
                      Bronze: <b>{bronza.length === 0 ? 0 : silver}</b>
                    </span>
                    <img
                      width={"120px"}
                      height={"120px"}
                      src={Bronze}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            {gallery ? (
              <Carousel title={"Amcham event pictures"} data={gallery} />
            ) : (
              <></>
            )}
            {video_url ? (
              <div className={classes.video}>
                <h3>Amcham event videos</h3>
                <iframe
                  width="100%"
                  height={"600"}
                  src={`https://www.youtube.com/embed/${youtubeIdGenerator(
                    video_url
                  )}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={classes.aside}>
            <h4 className={classes.otherNewsTitle}>Other Events</h4>
            {others &&
              others.map((item, index) => (
                <Link
                  to={`/events/${item.id}`}
                  key={index}
                  className={classes.otherNewsCard}
                >
                  <span className={classes.otherNewsCardData}>
                    {String(
                      new Date(
                        item.begin_date_time.replace(/ /g, "T")
                      ).toLocaleString("default", { month: "short" })
                    )}{" "}
                    {String(
                      new Date(
                        item.begin_date_time.replace(/ /g, "T")
                      ).getDate()
                    ).padStart(2, "0")}{" "}
                    {String(
                      new Date(
                        item.begin_date_time.replace(/ /g, "T")
                      ).getFullYear()
                    )}
                  </span>
                  <p className={classes.otherNewsCardDesctription}>
                    {item.title}
                  </p>
                  <div className={classes.otherNewsCardInner}>
                    <IoLocationOutline />
                    <span className={classes.eventSpan}>
                      {item.place ? item.place : "Tashkent"}
                    </span>
                  </div>
                  <p className={classes.otherNewsCardTime}>
                    {formatAMPM(new Date(item.begin_date_time))}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
