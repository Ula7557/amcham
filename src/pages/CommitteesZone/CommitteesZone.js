import classes from './CommittessZone.module.scss'
import {NavLink, Outlet} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {useRef} from "react";
import {AiOutlineClose} from "react-icons/ai";

const CommitteesZone = () => {
    const closeHander = () => {
        ref.current.style.transform = "translateX(-100%)"
    }
    const ref = useRef()
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Sidebar} ref={ref}>
                <button className={classes.togglerOne} onClick={closeHander}>
                    <AiOutlineClose/>
                </button>
                <NavLink
                    onClick={closeHander}
                    exact="true"
                    to={'/committees-zone/all'}
                >
                    All events
                </NavLink>
                <NavLink
                    onClick={closeHander}
                    to={'new'}
                >
                    Add new Event
                </NavLink>
                <NavLink
                    onClick={closeHander}
                    to={'settings'}>
                    Committee settings
                </NavLink>

            </div>
            <div className={classes.content}>
                <button className={classes.toggler} onClick={() => ref.current.style.transform = "translateX(0)"}>
                    <GiHamburgerMenu/>
                </button>
                <Outlet/>
            </div>
        </div>
    );
};

export default CommitteesZone
