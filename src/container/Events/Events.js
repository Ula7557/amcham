import CustomCalendar from "../../components/CustomCalendar";
import classes from './Events.module.scss'
import {useEffect, useState} from "react";
import {request} from "../../api";
import {Link} from "react-router-dom";
import {formatAMPM} from "../../utils";

const Events = () => {
    const [selectedDay, setSelectedDay] = useState({
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
    });
    const [selectedEvents, setSelectedEvents] = useState(
        {
            data: [],
            loading: false
        }
    );
    useEffect(() => {
        request(`/event/all?y=${selectedDay.year}&d=${selectedDay.day}&m=${selectedDay.month}`)
            .then(response => setSelectedEvents({data: response.data, loading: true}))
            .catch(err => console.warn(err))
    }, [selectedDay])
    return (
        <div className={classes.wrapper}>

            <div className={classes.right}>
                {
                    selectedEvents.loading && selectedEvents.data.data ? (
                        selectedEvents.data.data.map(el => (
                            <Link key={el.id} to={`/events/${el.id}`} className={classes.event}>
                                <div className={classes.eventDate}>
                                    <p>
                                        {
                                            String(new Date(el.begin_date_time).toLocaleString("default", {month: "short"}))
                                        }{" "}
                                        {
                                            String(new Date(el.begin_date_time).getDate()).padStart(2, '0')
                                        }{" "}
                                        {
                                            String(new Date(el.begin_date_time).getFullYear())
                                        }
                                    </p>
                                    <b>
                                        {formatAMPM(new Date(el.begin_date_time))}
                                    </b>
                                </div>
                                <div className={classes.eventInfo}>
                                    <span>Today</span>
                                    <h3 className={classes.eventName}>
                                        {el.title}
                                    </h3>
                                </div>
                            </Link>

                        ))
                    ) : (
                        <>NO EVENTS SORRY </>
                    )
                }

            </div>
            <div className={classes.left}>
                <CustomCalendar setSelectedDay={setSelectedDay}/>
            </div>
        </div>
    );
}

export default Events
