import classes from "./Calendar.module.scss";
import CustomCalendar from "../../components/CustomCalendar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { request } from "../../api";
import { formatAMPM } from "../../utils";
import { useFetch } from "../../hooks/useFetch";

const Calendar = () => {
  const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date(),
  });
  const [loading, data] = useFetch(
    `/event/all?y=${new Date().getFullYear()}&m=${
      state.currentMonth.getMonth() + 1
    }`
  );

  const [selectedEvents, setSelectedEvents] = useState({
    data: [],
    loading: false,
  });
  const [allEvent, setAllEvents] = useState({
    data: [],
    loading: false,
  });
  const [selectedDay, setSelectedDay] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  useEffect(() => {
    request(
      `/event/all?s_y=${selectedDay.year}&s_d=${selectedDay.day}&s_m=${selectedDay.month}`
    )
      .then((response) => update_events(response.data.data))
      .catch((err) => console.warn(err));
    request(`/event/all?s_y=${selectedDay.year}&s_m=${selectedDay.month}`)
      .then((response) => setAllEvents({ data: response.data, loading: true }))
      .catch((err) => console.warn(err));
  }, [selectedDay, state.currentMonth, state]);
  const update_events = (data) => {
    const ar = [];
    if (data) {
      for (let [key, value] of Object.entries(data)) {
        ar.push(value);
      }
    }
    setSelectedEvents({
      data: ar,
      loading: true,
    });
  };
  const return_array = (obg) => {
    const ar = [];
    if (obg) {
      for (let [key, value] of Object.entries(obg)) {
        ar.push(value);
      }
    }
    return ar;
  };
  return (
    <div className={classes.Calendar}>
      <h2 className={classes.title}>{"Calendar"}</h2>
      <div className="container">
        <div className={classes.calendar}>
          <CustomCalendar
            setSelectedDay={setSelectedDay}
            state={state}
            setState={setState}
            setSelectedEvents={setSelectedEvents}
            loading={loading}
            data={data}
          />
        </div>
        <div className={classes.content}>
          <h2>Events</h2>
          <div className={classes.events}>
            {selectedEvents.loading && selectedEvents.data.length !== 0
              ? selectedEvents.data?.map((el) => <RenderEvent el={el} />)
              : return_array(allEvent.data.data).map((el) => (
                  <RenderEvent el={el} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

export const RenderEvent = ({ el }) => {
  return (
    <Link key={el.id} to={`/events/${el.id}`} className={classes.event}>
      <div className={classes.eventDate}>
        <p>
          {String(
            new Date(el.begin_date_time.replace(/ /g, "T")).toLocaleString(
              "default",
              { month: "short" }
            )
          )}{" "}
          {String(
            new Date(el.begin_date_time.replace(/ /g, "T")).getDate()
          ).padStart(2, "0")}
          {"-"}
          {String(
            new Date(el.end_date_time.replace(/ /g, "T")).getDate()
          ).padStart(2, "0")}
          {", "}
          {String(
            new Date(el.begin_date_time.replace(/ /g, "T")).getFullYear()
          )}
        </p>
        <b>{formatAMPM(new Date(el.begin_date_time.replace(/ /g, "T")))}</b>
      </div>
      <div className={classes.eventInfo}>
        <h3 className={classes.eventName}>{el.title}</h3>
      </div>
    </Link>
  );
};