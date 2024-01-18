import {AiFillCaretDown} from "react-icons/ai";
import {Link} from "react-router-dom";
import classes from "./Collapse.module.scss";

const Collapse = ({data, open, setOpen, closeMenu}) => {
    return (
        <div>
            <div className={classes.dropdownButton}>
                <button
                    onClick={() =>
                        open !== data.title ? setOpen(data.title) : setOpen(null)
                    }
                    className={`dropdown-button ${classes.navItem}`}
                    key={data.id}
                >
                    {data.title}
                    <AiFillCaretDown/>
                </button>

                <div
                    className={`dropdown-content ${classes.content}`}
                    style={{height: open === data.title ? "auto" : ""}}
                >
                    <div className="space"></div>
                    {data.sublinks.map((el) => (
                        el.path.includes("https") ? (
                            <Link
                                key={el.path}
                                onClick={() => {
                                    closeMenu(false);
                                    setOpen(null);
                                }}
                                to={el.path}
                            >
                                {el.title}
                            </Link>
                        ) : (
                            <Link
                                key={el.path}
                                onClick={() => {
                                    closeMenu(false);
                                    setOpen(null);
                                }}
                                to={el.path}
                            >
                                {el.title}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collapse;
