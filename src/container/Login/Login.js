import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Login.module.scss";
import { set_auth_tokens, set_modal } from "../../redux/actions";
import { createPortal } from "react-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";

const modalRoot = document.getElementById("modal-root");

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const openNotification = (text) => {
      const args = {
        message: "Ticket Created!",
        description: text
          ? text
          : "Your password has been successfully changed.",
        duration: 2,
      };
      notification.open(args);
    };
    const formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    axios
      .post("https://api.amcham.uz/account/reset-password-save", formData, {
        headers: {
          "api-token": "iet378aopRlshw728191",
        },
      })
      .then((res) => {
        openNotification(res.data.message);
        reset();
      });
  };

  return (
    <form style={{ textAlign: "left" }} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.inputHolder}>
        <label htmlFor="email">Enter your email</label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
        />
        {errors.email && <p>Email field is required</p>}
      </div>
      <div className={classes.inputHolder}>
        <label htmlFor="password">Enter new password</label>
        <input
          id="password"
          {...register("password", { required: true })}
          type="password"
        />
        {errors.password && <p>Password field is required</p>}
      </div>
      <div className={classes.inputHolder}>
        <label htmlFor="password_repeat">Repeat your password</label>
        <input
          {...register("password_repeat", { required: true })}
          type="password"
          id="password_repeat"
        />
        {errors.password_repeat && <p>Password field is required</p>}
      </div>
      <div className={classes.inputHolder}>
        <label htmlFor="pin_code">Enter pin code</label>
        <input
          id="pin_code"
          {...register("pin_code", { required: true })}
          type="text"
        />
        {errors.pin_code && <p>Pin code field is required</p>}
      </div>

      <button
        style={{
          background: "#003A65",
          color: "white",
          padding: "10px 30px",
          borderRadius: "4px",
          border: "none",
          marginTop:'15px'
        }}
        className={classes.submitButton}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
const Login = () => {
  const history = useNavigate();
  const [status, setStatus] = useState(true);
  const openNotification = (data) => {
    const args = {
      message: data ? "Oops. Something went wrong!" : "Email has been sent!",
      description: data
        ? data
        : "Email verification has been sent your email address!",
      duration: 2,
    };
    notification.open(args);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [first, setFirst] = useState(true);
  const [, setResponse] = useState({
    data: {},
    error: null,
  });
  const resetRef = useRef(null);

  const closeHandler = () => {
    document.body.classList.remove("hidden");
    dispatch(set_modal(false));
  };
  const [, setError] = useState({
    message: "",
    error: false,
  });
  const resetHandler = () => {
    axios
      .get("https://api.amcham.uz/account/reset-password", {
        headers: {
          "api-token": "iet378aopRlshw728191",
        },
        params: {
          email: resetRef.current.value,
          pin_code: 1,
        },
      })
      .then((res) => {
        setResponse({
          data: res,
          error: null,
        });
        setStatus(false);
      })
      .then((res) => openNotification())
      .catch((err) =>
        setResponse({
          data: [],
          error: err,
        })
      );
  };
  const onSubmit = (datas) => {
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
        dispatch(set_modal(false));
        document.body.classList.remove("hidden");
        history("/account");
      })
      .catch((err) => {
        setError({ error: true, message: err });
      });
  };
  return createPortal(
    <div>
      <div onClick={closeHandler} className={classes.shadow} />
      <div className={`${classes.loginWrapper} `}>
        <div className={classes.inner_container}>
          {first ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className={classes.title}>Login</h1>
              <input
                type={"email"}
                placeholder="Enter you email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className={classes.error}>Create a valid email address</p>
              )}
              <input
                type={"password"}
                placeholder={"Enter your password"}
                {...register("password", {
                  required: true,
                  minLength: 4,
                })}
              />
              {errors.password && (
                <p className={classes.error}>
                  Hmm. Something went wrong. check the credentials
                </p>
              )}
              <div className={classes.btn_container}>
                <input type="submit" />
                <button className={classes.red_btn} onClick={closeHandler}>
                  Cancel
                </button>
              </div>

              <p className={classes.first_para}>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setFirst(!first)}
                >
                  Forgot password?
                </button>
              </p>
              <p>
                Don't have an account?
                <Link to="/form" onClick={closeHandler}>
                  <span className={classes.register}> Register </span>
                </Link>
              </p>
            </form>
          ) : (
            <div>
              <h1 className={classes.title}>Reset your password</h1>
              {status ? (
                <input
                  placeholder="Enter your email"
                  ref={resetRef}
                  style={{ marginBottom: "30px" }}
                />
              ) : (
                <Form />
              )}

              <div className={classes.btn_container}>
                {status && (
                  <button className={classes.blue_btn} onClick={resetHandler}>
                    Reset
                  </button>
                )}
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
};

export default Login;
