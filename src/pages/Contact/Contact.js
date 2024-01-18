import React, { useEffect } from 'react';
import "./Contact.css"
import location from "./contact-imgs/location.ico"
import phone from "./contact-imgs/phone.ico"
import message from "./contact-imgs/message.ico"
import {useForm} from "react-hook-form";
import {notification} from "antd";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import { request } from '../../api';
import { set_pages } from '../../redux/actions';


const Contact = () => {
    const settings = useSelector(state => state.system.banner);
    const contact = useSelector(state => state.system.pages.filter(el => el.id === "162"))[0];
    const dispatch = useDispatch()
    useEffect(() => { 
      request("/content/all/page")
        .then((res) => dispatch(set_pages(res.data.data)))
        .catch((err) => console.warn(err));
    }, []);
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();
    const onsubmit = values => {
        openNotification();
        const formdata = new FormData();
        for (let [key, value] of Object.entries(values)) {
            formdata.append(key, String(value));
        }
        axios
          .post("https://api.amcham.uz/forms/contact-form", formdata, {
            headers: {
              "api-token": "iet378aopRlshw728191",
            },
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
    }
    const openNotification = () => {
        const args = {
            message: 'Your request submitted!',
            description: "Wait our response.",
            duration: 2,
        };
        if (!errors.name && !errors.message && !errors.subject && !errors.email) {
            notification.open(args);
        }
    };
    const email = settings.filter(el => el.settings_key === "administrator_email")[0].settings_value;
    const telephone = settings.filter(el => el.settings_key === "phone_number")[0].settings_value;
    const address = settings.filter(el => el.settings_key === "company_address")[0].settings_value;
    const maps = settings.filter(el => el.settings_key === "google_map")[0].settings_value;
    return (
        <div className="container">
            <div className="contact-us">
                <h1>{contact.title}</h1>
            </div>
            <Helmet>
                <title>{contact.title}</title>
            </Helmet>
            <div className="inner-contact-wrapper">
                <form onSubmit={handleSubmit(onsubmit)} className="input-wrapper">
                    <div className="title">
                        <p>Email Us Today</p>
                    </div>
                    <label htmlFor={"name"}>
                        name <span className="asteriks">*</span>{" "}
                    </label>
                    <div>
                        <input

                            {...register("name", {required: true})}
                            id={"name"}
                            type={"text"}/>
                        {errors.name && <p className={"error"}>Name field can not be empty</p>}
                    </div>
                    <label htmlFor={"mail"}>
                        email <span className="asteriks">*</span>
                    </label>
                    <div>
                        <input
                            id={"mail"}
                            {...register("email", {required: true})}
                            type={"email"}
                        />
                        {errors.email && <p className={"error"}>Email field can not be empty</p>}
                    </div>
                    <label htmlFor={"phone"}>
                        Phone <span className="asteriks">*</span>
                    </label>
                    <div>
                        <input
                            id={"phone"}
                            {...register("phone", {required: true})}
                            type={"phone"}
                        />
                        {errors.phone && <p className={"error"}>Phone field can not be empty</p>}
                    </div>
                    <label htmlFor={"subject"}>
                        subject <span className="asteriks">*</span>
                    </label>
                    <div>
                        <input
                            {...register("subject", {required: true})}
                            type={"text"}
                            id={"subject"}
                        />
                        {errors.subject && <p className={"error"}>Subject can not be empty</p>}
                    </div>
                    <label htmlFor={"message"}>
                        message <span className="asteriks">*</span>
                    </label>
                    <div>
                        <textarea
                            {...register("message", {required: true})}
                            id={"message"}/>
                        {errors.message && <p className={"error"}>Message can not be empty</p>}

                    </div>
                    <button type={""} className="send-button">SEND</button>
                    <div className="empty-div"/>
                    <p>
                        <span className="asteriks">*</span> Indicates required field
                    </p>
                </form>
                <div className="map-wrapper">
                    <div>
                        <p className="title">How to find us</p>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5995.091382685652!2d69.28148!3d41.296991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9dbaf395e12ad90!2sAmCham%20Uzbekistan!5e0!3m2!1sen!2sus!4v1636517228918!5m2!1sen!2sus"
                            width="100%"
                            height="460"
                            title="map"
                            style={{border: 0}}
                            loading="lazy"
                        />
                    </div>
                    <ul className="contact-leftSide-icons">
                        <li>
                            <img src={location} alt="" className="icon"/>
                            <a href={maps}>
                                {address}, Tashkent, Uzbekistan
                            </a>
                        </li>
                        <li>
                            <img src={phone} alt="" className="icon"/>
                            <a href={`tel:${telephone}`}>{telephone}</a>
                        </li>
                        <li>
                            <img src={message} alt="" className="icon-message icon"/>
                            <a href={`mailto:${email}`}>
                                {email}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
