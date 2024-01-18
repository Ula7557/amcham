import classes from './index.module.scss';
import {AiOutlineCalendar, AiOutlineDelete, AiOutlinePlus} from "react-icons/all";
import {Link, useNavigate} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../Loader";
import {Button, notification, Popconfirm} from "antd";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {request} from "../../api";

const AddEvent = () => {
    const openNotification = (data) => {
        if (data.status === 0) return null;
        const args = {
            message: data.message,
            description: data.data,
            duration: 2,
        };
        notification.open(args);
    };
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.chair_token.id);
    const [count, setCount] = useState(8);
    const deleteHandler = id => {
        const data = new FormData();
        data.append("event_id", id);
        request.post(`event/delete`, data)
            .then(res => {
                if (res.data.status === 1) {
                    openNotification(res.data)
                    history('/committees-zone');
                    setTimeout(() => {
                        history('/committees-zone/all');
                    }, 100)
                }
            })
            .catch(err => console.log(err));

    };
    const [loading, data,] = useFetch(`/event/all?created_by=${token}`);
    const history = useNavigate();
    if (loading) return <Loader size={100}/>
    return (
        <h1 className={classes.wrapper}>
            <div className={classes.flexEnd}>
                <h1 className={classes.title}>All Events</h1>

                <div style={{display: "flex"}}>
                    <Link to={"/committees-zone/new"}>
                        <Button className={classes.newEventButton} type={"primary"}>
                            <AiOutlinePlus/>
                            New event
                        </Button>
                    </Link>

                </div>
            </div>
            <ul style={{paddingLeft: 0}}>
                {
                    data.data && data.data.length > 0 ? (
                        data.data.slice(0, count).map(el => (
                            <li className={classes.listItem} key={el.id}>
                                <div>
                                    <Link to={`edit/${el.id}`}>
                                        <h2>{el.title}</h2>
                                    </Link>
                                    <span>
                            <AiOutlineCalendar/>01/02/22 10:12</span>
                                </div>
                                <Popconfirm
                                    title="Are you sure？"
                                    onConfirm={() => deleteHandler(el.id)}
                                    okText="Yes"
                                    cancelText="No">
                                    <button>
                                        <AiOutlineDelete/>
                                    </button>
                                </Popconfirm>

                            </li>
                        ))
                    ) : (
                        <>No event sorry</>
                    )
                }
                <Button onClick={() => setCount(prev => prev + 6)} type={"primary"}
                        className={classes.more}>More...</Button>
            </ul>
        </h1>
    );
}
export default AddEvent


