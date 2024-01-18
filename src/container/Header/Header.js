import {Link} from "react-router-dom";
import logo from "../../assets/icons/amcham_logo.png";
import classes from "./Header.module.scss";
import {GiHamburgerMenu} from "react-icons/gi";
import Dropdown from "../../components/Dropdown/Dropdown";
import {useEffect, useState} from "react";
import {set_modal, set_pages} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../Loader";
import { AiOutlineUser} from "react-icons/all";
import { request } from "../../api";

const Header = () => {
    const dispatch = useDispatch();
       const join = useSelector((state) =>
         state.system.pages.filter((el) => el.id === "192")
       )[0];

       useEffect(() => {
         request("/content/all/page")
           .then((res) => dispatch(set_pages(res.data.data)))
       }, []);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setOpen(false);
            document.querySelector("body").classList.remove("hidden");
        }
        setOpen(false);

        window.addEventListener("resize", handleResize);
    }, []);
    const [loading, data,] = useFetch(`/menu/all`);
    const token = useSelector((state) => state.auth.user_token);
    if (loading) return <Loader size={0}/>;
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <Link to="/">
                    <img src={logo} alt="" className={classes.logo}/>
                </Link>
                <nav className={classes.nav}>
                    {data.data.map((link, index) => (
                        <Dropdown key={index} data={link}/>
                    ))}
                </nav>
                <div className={classes.actions}>
                    <Link to="/join-us">
                        <button className={classes.actionButtons}>{join?.title}</button>
                    </Link>
                    {!token ? (
                        <button
                            className={classes.actionButtons}
                            onClick={() => {
                                dispatch(set_modal(true));
                                document.body.classList.add("hidden");
                            }}
                        >
                            Memberzone
                        </button>
                    ) : (
                        <Link to={"/account"}>
                            <button
                                className={classes.actionButtons}
                                style={{background: "#003a65"}}
                            >
                                <AiOutlineUser/>
                                Profile
                            </button>
                        </Link>
                    )}
                </div>
                <div className={` ${classes.MobileHeader}`}>
                    <button
                        onClick={() => {
                            setOpen(!open);
                            document
                                .getElementsByTagName("body")[0]
                                .classList.toggle("hidden");
                        }}
                    >
                        <GiHamburgerMenu/>
                    </button>
                </div>
            </div>
            <div
                style={{
                    height: open ? "100vh" : "",
                    padding: open ? "20px" : "",
                }}
                className={classes.mobileMenuContent}
            >
                {data.data.map((link, index) => (
                    <Dropdown setOpen={setOpen} key={index} data={link}/>
                ))}
                <div className={classes.mobileactions}>
                    <Link to="/join-us" onClick={() => setOpen(false)}>
                        <button className={classes.actionButtons}>Join us</button>
                    </Link>
                    {!token ? (
                        <button
                            className={classes.actionButtons}
                            onClick={() => {
                                dispatch(set_modal(true));
                                document.body.classList.add("hidden");
                            }}
                        >
                            Memberzone
                        </button>
                    ) : (
                        <Link to={"/account"}>
                            <button
                                onClick={() => setOpen(false)}
                                className={classes.actionButtons}
                                style={{background: "#003a65"}}
                            >
                                <AiOutlineUser/>
                                Profile
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
