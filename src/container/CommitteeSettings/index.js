import classes from './index.module.scss';
import {Button, Form, Input, notification} from "antd";
import {useFetch} from "../../hooks/useFetch";
import {useSelector} from "react-redux";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import parse from 'html-react-parser'

const CommitteeSettings = () => {
    const chair_token = useSelector(state => state.auth.chair_token);
    const [loading, data, error] = useFetch(`/committee/one/commit?id=${chair_token.committee_id}`);
    const token = useSelector(state => state.auth);
    const previewImage = useRef();
    const openNotification = (data) => {
        const args = {
            message: "Done!",
            description: data ? data : "Email verification has been sent your email address!",
            duration: 2,
        };
        notification.open(args);
    };
    const history = useNavigate();
    const [file, setFile] = useState("");
    const handleChange = e => {
        setFile(e.target.files[0]);
        previewImage.current.textContent = e.target.files[0].name;
    }
    useEffect(() => {
        if (data.data) {
            setFile(data.data.image)

        }
    }, [loading]);
    const onsubmit = values => {
        const data = new FormData();
        for (let [key, value] of Object.entries(values)) {
            if (key === "staff") {
                data.append(key, JSON.stringify(value));
            } else {
                data.append(key, String(value));
            }

        }
        data.append("user_id", chair_token.id);
        data.append("image", file);
        data.append("committee_id", chair_token.committee_id);

        axios
          .post(`https://api.amcham.uz/committee/change`, data, {
            headers: {
              "X-Auth-Token": token.user_token,
              "X-Auth-Signature": token.user_signature,
              "api-token": "iet378aopRlshw728191",
            },
          })
          .then((res) => {
            if (res.data.data === chair_token.committee_id) {
              openNotification("Committee has been changed successfully");
              history("/committees-zone");
              setTimeout(() => {
                history("/committees-zone/settings");
              }, 100);
            }
          })
          .catch((err) => console.log(err));

    }

    if (loading) return <></>;
    if (error) return <></>;
    const {title, extra_description, email, phone, image, description, our_mission} = data.data;
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Committee Settings</h1>
            <Form onFinish={onsubmit}
                  className={classes.form}
            >
                <div className={classes.formControl}>
                    <label htmlFor="title">Title</label>
                    <Form.Item
                        name={"title"}
                        fieldKey={"title"}
                        initialValue={title}
                    >
                        <Input placeholder="Title"/>
                    </Form.Item>
                    <label htmlFor="mission">Our mission</label>
                    <Form.Item
                        name={"our_mission"}
                        fieldKey={"our_mission"}
                        initialValue={our_mission}
                    >
                        <TextArea placeholder="Our mission"/>
                    </Form.Item>
                    <label htmlFor="description">Description</label>
                    <Form.Item

                        name={"description"}
                        fieldKey={"description"}
                        initialValue={description}
                    >
                        <TextArea placeholder="Description"/>
                    </Form.Item>
                    <label htmlFor="fileUploadText">Profile upload</label>
                    <div className={classes.imageWrapper}>
                                   <span
                                       ref={previewImage}
                                       className={classes.roleInput}
                                   >
                                {image}
                            </span>
                        <input
                            type="file"
                            id={"fileUpload"}
                            style={{display: "none"}}
                            onChange={handleChange}
                        />

                        <Button type={"primary"} className={classes.primaryBtClass}>
                            <label htmlFor="fileUpload" className={classes.labelSelectBt}>
                                Select
                            </label>
                        </Button>

                    </div>

                    <Button
                        style={{marginTop: 20}}
                        type={"primary"}
                        htmlType={"submit"}
                        className={classes.upload}
                    >
                        Change
                    </Button>
                </div>
               {/* <div className={classes.formControl}>
                    <label htmlFor="phone">Phone number</label>
                    <Form.Item
                        name={"phone"}
                        fieldKey={"phone"}
                        initialValue={phone}
                    >
                        <Input type="text"
                        />
                    </Form.Item>
                    <label htmlFor="email">Email</label>
                    <Form.Item
                        initialValue={email}
                        name={"email"}
                        fieldKey={"email"}
                    >
                        <Input type="email"
                        />
                    </Form.Item>
                    <label htmlFor="phone">Extra Description</label>

                    <Form.Item
                        name={"extra_description"}
                        initialValue={extra_description}
                        fieldKey={"extra_description"}
                    >
                        <TextArea type="text"
                        />
                    </Form.Item>
                </div>*/}

            </Form>

        </div>
    );
}
export default CommitteeSettings;
