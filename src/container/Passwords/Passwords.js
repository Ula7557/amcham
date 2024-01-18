import classes from "./passwords.module.scss";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { notification } from "antd";

const Passwords = () => {
  const openNotification = (data) => {
    if (data.status === 0) return null;
    const args = {
      message: "Password update",
      description: "Successfully updated password you can login again!",
      duration: 1,
    };
    notification.open(args);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const token = useSelector((state) => state.auth);
  const [match, setMatch] = useState(false);
  const onSubmit = (data) => {
    if (data.new_pass !== data.confirm_new_pass) {
      return setMatch(true);
    }
    const formData = new FormData();
    formData.append("confirm_new_pass", data.confirm_new_pass);
    formData.append("new_pass", data.new_pass);
    formData.append("old_pass", data.current);
    setMatch(false);
    axios
      .post("https://api.amcham.uz/profile/change-password", formData, {
        headers: {
          "api-token": "iet378aopRlshw728191",
          "X-Auth-Token": token.user_token,
          "X-Auth-Signature": token.user_signature,
        },
      })
      .then((res) => {
        openNotification(res.data);
        reset();
      })
      .catch((err) => openNotification(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <h2>Change your password</h2>
        <div>
          <label htmlFor="current">Enter your current password</label>
          <input
            id={"current"}
            type="password"
            {...register("current", { required: true })}
            placeholder={"Current password"}
          />
          {errors.current && <span>You should enter valid password</span>}
        </div>
        <div>
          <label htmlFor="new">Enter your new password</label>
          <input
            type="password"
            id={"new"}
            {...register("new_pass", { required: true })}
            placeholder={"New password"}
          />
          {errors.confirm_new_pass && <span>Passwords must be similar</span>}
        </div>
        <div>
          <label htmlFor="repeat">Repeat your new password</label>
          <input
            type="password"
            id={"repeat"}
            {...register("confirm_new_pass", { required: true })}
            placeholder={"Repeat password"}
          />
          {errors.confirm_new_pass && <span>Passwords must be similar</span>}
          {match ? <span>Passwords don't match</span> : null}
        </div>
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
};

export default Passwords;
