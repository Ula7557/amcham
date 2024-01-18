import classes from "./profile.module.scss";
import {chair_in, log_out, set_company, set_modal, set_user} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {useEffect, useRef, useState} from "react";
import {request} from "../../api";
import {useForm} from "react-hook-form";
import {notification, Popconfirm, Space} from 'antd';
import Plus from "../../assets/icons/plus.svg";
import axios from "axios";
import Loader from "../Loader";
import {Helmet} from "react-helmet";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.auth);
    const user = useSelector(state => state.system.user);
    const ref = useRef();
    const [userCreds, setUserCreds] = useState({});
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();
    const [date, setDate] = useState("");
    const [defaultValues, setDefaultValues] = useState({});
    useEffect(() => {
        request(`/profile`, {
            headers: {
                "X-Auth-Token": token.user_token,
                "X-Auth-Signature": token.user_signature
            }
        })
            .then(res => {
                if (res.data.status === 0) {
                    dispatch(log_out());
                    dispatch(set_modal(true));
                    openNotification("Please sign in again!");
                    return navigate("/");
                }
                setDate(res.data.data.profile.birthdate);
                dispatch(set_user(res.data.data));
                dispatch(chair_in(res.data.data.user));
                setUserCreds(res.data.data.profile);
                set_company_data(res.data.data.user.company_id);
            })
            .catch(err => console.log(err));


    }, []);
    const set_company_data = id => {
        request(`/company/one/company?id=${id}`)
            .then(res => dispatch(set_company(res.data.data)))
            .catch(err => console.log(err));
    }

    const openNotification = (data) => {
        if (data.status === 0) return null;
        const args = {
            message: 'Profile update',
            description: "Successfully updated your information!",
            duration: 2,
        };
        notification.open(args);
    };
    useEffect(() => {
        if (userCreds) {
            setDefaultValues({
                firstname: userCreds.name,
                middlename: userCreds.middlename,
                birthdate: userCreds.birthdate,
                surname: userCreds.surname,
                phone: userCreds.phone,
                position: userCreds.address,
                description: userCreds.bio
            });
        }
    }, [userCreds])
const [image, setImage] = useState();
const onsubmit = (data) => {
  const formData = new FormData();
  const strs = [];
  for (let [key, value] of Object.entries(data)) {
    if (value.length === 0) {
      strs.push(key);
    }
  }
  strs.forEach((str) => {
    data[str] = defaultValues[str];
  });
  formData.append("name", data.firstname);
  formData.append("surname", data.surname);
  formData.append("middlename", data.middlename);
  formData.append("phone", data.phone);
  formData.append("address", data.position);
  formData.append("bio", data.description);
  formData.append("birthdate", date);
  formData.append("image", image ? image : userCreds.image);
  axios
    .post("https://api.amcham.uz/profile/change-profile", formData, {
      headers: {
        "api-token": "iet378aopRlshw728191",
        "X-Auth-Token": token.user_token,
        "X-Auth-Signature": token.user_signature,
      },
    })
    .then((res) => {
      if (res.data.status === 1) {
        openNotification(res);
        navigate("/");
        navigate("/account");
      }
    });
};
if (!user) return <Loader size={100} />;
return (
  <div className={classes.formWrapper}>
    <Helmet>
      <title>User Profile | {String(user.profile && user.profile.name)}</title>
    </Helmet>
    <div className={classes.profile}>
      <h2 className="title">My Profile</h2>
      <form
        onSubmit={handleSubmit(onsubmit)}
        action=""
        className={classes.formBlock}
      >
        <div className={classes.formControl}>
          <label className={classes.inputLabel} htmlFor="fname">
            First Name*
          </label>
          <input
            className={classes.inpute}
            id="fname"
            type="text"
            defaultValue={defaultValues && defaultValues.firstname}
            name="firstname"
            {...register("firstname")}
          />
          {errors.firstname && (
            <span className={classes.error}>Enter your name</span>
          )}
        </div>
        <div className={classes.formControl}>
          <label className={classes.inputLabel} htmlFor="lname">
            Last Name*
          </label>
          <input
            className={classes.inpute}
            id="lname"
            defaultValue={defaultValues && defaultValues.surname}
            type="text"
            onChange={(e) =>
              setDefaultValues({
                ...defaultValues,
                [e.target.name]: e.target.value,
              })
            }
            name="surname"
            {...register("surname")}
          />
          {errors.surname && (
            <span className={classes.error}>Enter your surname</span>
          )}
        </div>
        <div className={classes.formControl}>
          <label className={classes.inputLabel} htmlFor="mname">
            Middle Name*
          </label>
          <input
            defaultValue={defaultValues && defaultValues.middlename}
            className={classes.inpute}
            id="middlename"
            type="text"
            onChange={(e) =>
              setDefaultValues({
                ...defaultValues,
                [e.target.name]: e.target.value,
              })
            }
            name="middlename"
            {...register("middlename")}
          />
          {errors.middlename && (
            <span className={classes.error}>Enter your middlename</span>
          )}
        </div>
        <div className={classes.formControlTel}>
          <label className={classes.inputLabel} htmlFor="fname">
            Your Phone*
          </label>
          <input
            type="number"
            defaultValue={defaultValues && defaultValues.phone}
            name={"phone"}
            className={classes.inpute}
            placeholder="(xxx) xxx-xxxx"
            onChange={(e) =>
              setDefaultValues({
                ...defaultValues,
                [e.target.name]: e.target.value,
              })
            }
            {...register("phone")}
          />
          {errors.phone && (
            <span className={classes.error}>Enter your phone number</span>
          )}
        </div>
        <div
          className={classes.formControl}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label
              className={classes.inputLabel}
              style={{ marginBottom: "20px" }}
              htmlFor="birthdate"
            >
              Date of Birth*
            </label>
            <Space
              direction={"vertical"}
              size={12}
              style={{ marginTop: "25px" }}
            >
              <input
                style={{ border: "1px solid #003A65", padding: "10px 11px" }}
                type="date"
                // defaultValue={
                //     date && (date_regex.test(date)) && new Date(date).toISOString().substring(0, 10)
                // }
                defaultValue={
                 date && date !== "0000-00-00" &&
                  new Date(date)?.toISOString().split("T")[0]
                }
                {...register("birthdate")}
                name={"birthdate"}
                onChange={(e) => setDate(e.target.value)}
              />
            </Space>
          </div>
          <div
            className={classes.formControl}
            style={{ transform: "translateY(4px)" }}
          >
            <label
              htmlFor="fileLabel"
              id={"image-preview"}
              className={classes.fileLabel}
            >
              Choose image
            </label>
            <input
              placeholder="Choose Salutation"
              className={`${classes.inputSave}`}
              id="fileLabel"
              type="file"
              name="image"
              ref={ref}
              {...register("image")}
              onChange={(e) => {
                setImage(e.target.files[0]);
                document.getElementById("image-preview").textContent =
                  e.target.files[0].name;
              }}
            />
            <img src={Plus} className={classes.plus} alt="" />
          </div>
        </div>
        {/* <div className={classes.formControl}>
          <label className={classes.inputLabel} htmlFor="position">
            Email*
          </label>
          <input
            className={classes.inpute}
            defaultValue={defaultValues && defaultValues.position}
            onChange={(e) =>
              setDefaultValues({
                ...defaultValues,
                [e.target.name]: e.target.value,
              })
            }
            id="position"
            type="text"
            name="position"
            {...register("position")}
          />
          {errors.position && (
            <span className={classes.error}>Enter your position</span>
          )}
        </div> */}
        <div className={classes.formControl} style={{ width: "100%" }}>
          <label className={classes.inputLabel} htmlFor="position">
            Description*
          </label>
          <textarea
            style={{
              minHeight: 200,
              width: "45%",
            }}
            className={classes.inpute}
            defaultValue={defaultValues && defaultValues.description}
            onChange={(e) =>
              setDefaultValues({
                ...defaultValues,
                [e.target.name]: e.target.value,
              })
            }
            id="description"
            name="description"
            {...register("description")}
          />
          {errors.description && (
            <span className={classes.error}>Enter the description</span>
          )}
        </div>

        <div className={classes.formBlock}>
          <button type={"submit"} className={classes.formBtn}>
            Save
          </button>
        </div>
      </form>
    </div>
    <div className={classes.user}>
      <img
        src={
          user.profile && user.profile.image
            ? user.profile && user.profile.image
            : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        }
        alt=""
      />
      <h2 className={classes.name}>{user.profile && user.profile.name} </h2>
      <h4 className={classes.mail}>{user.user && user.user.email}</h4>
      <h4 className={classes.status}>status</h4>

      <Popconfirm
        placement="topRight"
        title={"Are you sure?"}
        onConfirm={() => {
          dispatch(log_out());
          navigate("/");
        }}
        okText="Yes"
        cancelText="No"
      >
        <button className={classes.logout}>Log out</button>
      </Popconfirm>
    </div>
  </div>
);
};

export default Profile;

