import { useEffect, useState } from "react";
import "./CustomCalendar.scss";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../container/Loader";

const CustomCalendar = ({ setSelectedDay, state, setState }) => {
  const [events, setEvents] = useState([]);
  const [loading, data] = useFetch(
    `/event/all?s_y=${new Date().getFullYear()}&s_m=${
      state.currentMonth.getMonth() + 1
    }`,
    state
  );
  useEffect(() => {
    if (!loading && data.data?.length > 0) {
      let eventdate = data.data.map((el) => el);
      for (let event of data.data) {
        events.push([
          new Date(event.begin_date_time),
          new Date(event.end_date_time),
        ]);
      }
      setEvents(events);
    }
  }, [loading, state]);
  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className={"header row flex-middle"}>
        <div className="col col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEEEEE";
    const days = [];
    let startDate = startOfWeek(state.currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <p className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </p>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const renderCells = () => {
    const { currentMonth, selectedDate } = state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formatedDate = "";
    const d = new Date();
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formatedDate = format(day, dateFormat);
        const cloneDay = day;
        console.log("fuck", events, day);
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }
            
            ${isSameDay(day, d) ? "today" : ""}
            ${
              events.some((el) => isSameDay(el[1], day)) ||
              events.some((el) => isSameDay(el[0], day))
                ? "event"
                : ""
            }`}
            key={day}
            onClick={(e) => {
              onDateClick(cloneDay);
              setSelectedDay({
                day: e.target.querySelector(".number")?.textContent
                  ? e.target.querySelector(".number")?.textContent
                  : e.target.textContent,
                month: state.currentMonth.getMonth() + 1,
                year: format(state.currentMonth, "yyyy"),
              });
            }}
          >
            <span className="number">{formatedDate}</span>
            <span className="bg">{formatedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className={"row flex"} key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className={"extra"}>{rows}</div>;
  };
  const onDateClick = (day) => {
    setState({
      ...state,
      selectedDate: day,
    });
  };
  const nextMonth = () => {
    setState({
      ...state,
      currentMonth: addMonths(state.currentMonth, 1),
    });
  };
  const prevMonth = () => {
    setState({
      ...state,
      currentMonth: subMonths(state.currentMonth, 1),
    });
  };

  if (loading) return <Loader size={100} />;

  return (
    <div className={"customCalendar"}>
      <div className="calendar">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
};

export default CustomCalendar;
