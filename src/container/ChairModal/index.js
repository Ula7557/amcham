import React, {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import classes from "./chair.module.scss";
import {chair_in, set_auth_tokens, set_chair_modal} from "../../redux/actions";
import {createPortal} from "react-dom";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {notification} from "antd";

const modalRoot = document.getElementById("modal-root");

const ChairModal = () => {
    const history = useNavigate()
    const openNotification = (data) => {
        const args = {
            message: data ? "Oops. Something went wrong!" : 'Email has been sent!',
            description: data ? data : "Email verification has been sent your email address!",
            duration: 2,
        };
        notification.open(args);
    };
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const dispatch = useDispatch();
    const [first, setFirst] = useState(true);
    const [, setResponse] = useState({
        data: {},
        error: null
    });
    const resetRef = useRef(null);
    const navigate = useNavigate();
    const closeHandler = () => {
        document.body.classList.remove("hidden");
        navigate('/')
        dispatch(set_chair_modal(false));
    };
    const [, setError] = useState({
        message: "",
        error: false
    })
    const resetHandler = () => {
      const data = new FormData();
      data.append("email", resetRef.current.value);
      axios
        .post("https://api.amcham.uz/account/reset-password", data, {
          headers: {
            "api-token": "iet378aopRlshw728191",
          },
        })
        .then((res) =>
          setResponse({
            data: res,
            error: null,
          })
        )
        .then((res) => openNotification())
        .catch((err) =>
          setResponse({
            data: [],
            error: err,
          })
        );
    };
    const onSubmit = (datas) => {
      return dispatch(chair_in("loggedIn"));
      const data = new FormData();
      data.append("email", datas.email);
      data.append("password", datas.password);
      axios
        .post("https://api.amcham.uz/account/signin", data, {
          headers: {
            "api-token": "iet378aopRlshw728191",
          },
        })
        .then((res) => {
          if (res.data.error) {
            openNotification(res.data.message);
            return setError({ error: true, message: res.data.message });
          }
          dispatch(set_auth_tokens(res.data.data));
          dispatch(set_chair_modal(false));
          document.body.classList.remove("hidden");
          history("/account");
        })
        .catch((err) => {
          setError({ error: true, message: err });
        });
    };
    return createPortal(
        <div>
            <div onClick={closeHandler} className={classes.shadow}></div>
            <div className={`${classes.loginWrapper} `}>
                <div className={classes.inner_container}>
                    {first ? (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className={classes.title}>Login to AmCham chair</h1>

                            <input type={"email"} placeholder="Enter you email"  {...register("email", {
                                required: true, pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            },)} />
                            {errors.email && <p className={classes.error}>Create a valid email address</p>}

                            <input
                                type={"password"}
                                placeholder={"Enter your password"}
                                {...register("password", {
                                    required: true,
                                    minLength: 4
                                })} />
                            {errors.password &&
                            <p className={classes.error}>Hmm. Something went wrong. check the credentials</p>}
                            <div className={classes.btn_container}>
                                <input type="submit"/>
                                <button className={classes.red_btn} onClick={closeHandler}>
                                    Back to Home
                                </button>
                            </div>
                        </form>

                    ) : (
                        <div>
                            <h1 className={classes.title}>Reset your password</h1>
                            <input placeholder="Enter your email" ref={resetRef} style={{marginBottom: "30px"}}/>
                            <div className={classes.btn_container}>
                                <button className={classes.blue_btn} onClick={resetHandler}>
                                    Reset
                                </button>
                                <p className={classes.first_para}>
                                    <a onClick={() => setFirst(!first)} href>
                                        Do you have an account? Login.
                                    </a>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        modalRoot
    );
}

export default ChairModal;
