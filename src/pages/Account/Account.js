import Profile from "../../container/Profle/Profile";
import Events from "../../container/Events/Events";
import Passwords from "../../container/Passwords/Passwords";
import {ACCOUNT_DATAS} from "../../db";
import classes from "./Account.module.scss";
import {useRef, useState} from "react";
import CompanySettings from "../../container/CompanySettings";
import {useSelector} from "react-redux";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";

const Button = ({title, setState, state}) => {
    const ref = useRef(null);
    return (
        <button
            ref={ref}
            onClick={(e) => {
                setState(title);
            }}
            className={`${classes.btnLink}`}
            style={{
                background:
                    state === ref.current?.textContent ||
                    (state === ref.current?.textContent) === "undefined"
                        ? "#003A65"
                        : null,
                color:
                    (state === ref.current?.textContent) ||
                    (state === ref.current?.textContent) === "undefined"
                        ? "#fff"
                        : null,
            }}
        >
            {title}
        </button>
    );
};
const Account = () => {
    const token = useSelector(state => state.auth.chair_token.committee_id);
    const [state, setState] = useState("My Profile");
    const ref = useRef()
    let menuItems = ["My Events", "Company Settings"];
    return (
        <div className={classes.wrapper}>
            <button className={classes.toggler} onClick={() => ref.current.style.transform = "translate(0)"}>
    <GiHamburgerMenu />
            </button>
            <div ref={ref}
                 className={classes.sidebar}>
                <button className={classes.toggler} style={{top: 0}} onClick={() => ref.current.style.transform = "translate(-100%)"}>
                    <AiOutlineClose />
                </button>
                {ACCOUNT_DATAS.sidebar.map((el) => (
                    token !== 0 ? (
                        !menuItems.includes(el.title) ? (
                            <Button title={el.title} key={el.title} setState={setState} state={state}/>
                        ) : (<></>)
                    ) : (
                        <Button title={el.title} key={el.title} setState={setState} state={state}/>
                    )
                ))}
            </div>
            <div className={classes.content}>

                {state === "Change Password" ? (<Passwords/>) :
                    state === "My Events" && token === 0 ? (<Events/>) :
                        state === "Company Settings" ? (<CompanySettings/>) :
                            (<Profile/>)
                }

            </div>

        </div>
    );
};

export default Account;
