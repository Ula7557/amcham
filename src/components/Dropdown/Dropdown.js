import {Link} from "react-router-dom";
import classes from "./Dropdown.module.scss";
import {AiFillCaretDown} from "react-icons/ai";
import {useSelector} from "react-redux";

const Dropdown = ({data, setOpen}) => {
    const token = useSelector(state => state.auth);
    const {user_token, chair_token} = token;

    return (
      <div className={classes.dropdownButton}>
        <button className={`dropdown-button ${classes.navItem}`} key={data.id}>
          {data.name}
          <AiFillCaretDown />
          <div className={`dropdown-content ${classes.content}`}>
            <div className="space" />
            {data.child.map((el) =>
              el.data.link.includes("https") ? (
                <a
                  target={"_blank"}
                  key={el.id}
                  href={el.data.link}
                  onClick={() => {
                    setOpen && setOpen(false);
                    document.querySelector("body").classList.remove("hidden");
                  }}
                  rel="noreferrer"
                >
                  {el.data.name}
                </a>
              ) : el.data.name.includes("Zone") ? (
                chair_token &&
                chair_token.committee_id !== 0 && (
                  <Link
                    key={el.id}
                    onClick={() => {
                      setOpen && setOpen(false);
                      document.querySelector("body").classList.remove("hidden");
                    }}
                    to={el.data.link}
                  >
                    {el.data.name}
                  </Link>
                )
              ) : (
                <Link
                  key={el.id}
                  onClick={() => {
                    setOpen && setOpen(false);
                    document.querySelector("body").classList.remove("hidden");
                  }}
                  to={el.data.link}
                >
                  {el.data.name}
                </Link>
              )
            )}
          </div>
        </button>
      </div>
    );
};

export default Dropdown;
