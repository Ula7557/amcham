import classes from './index.module.scss';
import {Button, Form, Input, notification, Select, Space, Upload} from "antd";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import {MinusCircleOutlined, PlusOutlined, UploadOutlined} from "@ant-design/icons";
import {useRef, useState} from "react";
import {useSelector} from "react-redux";

const AddNewEvent = () => {
    const token = useSelector(state => state.auth);
    const [state, setState] = useState({})
    const [gallery, setGallery] = useState([]);
    const [image, setImage] = useState([]);
    const placeholder = useRef();


    const openNotification = text => {
        const args = {
            message: 'Ticket Created!',
            description: text ? text : "Please be patient admin will check your company's information!",
            duration: 2,
        };
        notification.open(args);
    };
     function onsubmit(values) {
        let i = 0;
        let speaker = {};
        const copiedVal = { ...values };

        for (let item of values.speakers) {
            let images = item.avatar;
            if (images[0] !== undefined && images[0] !== null) {
                speaker[i] = { name: item.name, position: item.position, avatar: images[0].thumbUrl };
                i++;
            }
        }
        values.speakers = speaker;
        setState({ ...state, speakers: values.speakers, agenda: values.agenda });
        const formData = new FormData();

        for (let i = 0; i < gallery.length; i++) {
            formData.append(`gallery[${i}]`, gallery[i]);
        }

        if (gallery.length === 0) {
            formData.append("gallery", "");
        }

        state.end_date_time = state.end_date_time.replace(/T/g, " ");
        state.end_date_time = state.end_date_time.replace(/T/g, " ");

        function nimadur() {
            formData.append("user_id", token.chair_token.id);
            formData.append("image", image);
            formData.append("committee_id", token.chair_token.committee_id);

            setTimeout(() => {
              for (let [key, value] of Object.entries(state)) {
                if (key === "agenda" || key === "speakers") {
                  formData.append(key, JSON.stringify(value));
                } else {
                  formData.append(key, String(value));
                }
              }
              axios
                .post(`https://api.amcham.uz/event/add/event`, formData, {
                  headers: {
                    "X-Auth-Token": token.user_token,
                    "X-Auth-Signature": token.user_signature,
                    "api-token": "iet378aopRlshw728191",
                  },
                })
                .then((res) => {
                  if (res.data.status === 1) {
                    return openNotification(
                      "Event has been successfully created!"
                    );
                  } else {
                    return openNotification(res.data.message);
                  }
                })
                .catch((err) => {
                 document.querySelector("#birnima").click();
                });
            }, 2000);
        }
        nimadur()
    }
   
    const order = [{
        name: '',
        position: "",
        image: "",
    }];
    const date = [{
        begin_time: '',
        end_time: "",
        extra_desc: "",
    }];
    const normFile = (e) => {
        return e.fileList;
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const postGallery = async (selector, e) => {
        let names = "";
        const files = e.target.files;
        for (let item of e.target.files) {
            names += " " + item.name;
        }
        setGallery(files);
        document.querySelector(`#${selector}`).innerHTML = `${names} are selected`;

    }
    const itemInputs = order.map((item) => {
        return {
            name: item.name,
            avatar: item.avatar,
            position: item.position
        };
    });
    const dates = date.map((item) => {
        return {
            begin_time: item.begin_time,
            end_time: item.end_time,
            extra_desc: item.extra_desc
        };
    });
    const eventhandler = (e, name) => {
        let arr = ["on_calendar", "category_type"];
        if (name) {
            return console.log(e);
        }
        setState({...state, [e.target.name]: e.target.value})
    };
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>Add new event</h3>

            <Form
                onFinish={onsubmit}

                className={classes.form}
            >
                <div className={classes.w65}>
                    <div className={classes.card}>
                        <label htmlFor="title">Title</label>
                        <Form.Item
                            name={"title"}
                            fieldKey={"title"}
                        >
                            <Input
                                placeholder="title"
                                name={"title"}
                                onChange={eventhandler}
                            />
                        </Form.Item>
                        <label htmlFor="description">Description</label>
                        <Form.Item
                            name={"desc"}
                            fieldKey={"desc"}
                        >
                            <TextArea
                                id={"description"}
                                rows={10} placeholder="Description"
                                name={"description"}
                                onChange={eventhandler}
                            />
                        </Form.Item>
                    </div>
                    <div className={classes.card}>
                        <label htmlFor="url">Registration url</label>
                        <Form.Item
                            name={"url"}
                        >
                            <Input
                                placeholder="Url"
                                name={"url"}
                                onChange={eventhandler}
                            />
                        </Form.Item>

                        <label htmlFor="video">Video url</label>
                        <Form.Item
                            name={"video_url"}
                        >
                            <Input
                                placeholder="Video url"
                                name={"video_url"}
                                onChange={eventhandler}
                            />
                        </Form.Item>
                    </div>

                    <div className={classes.card}>
                        <h2>Speakers</h2>
                        <Form.List name="speakers" initialValue={itemInputs}>
                            {(fields, {add, remove}) => (
                                <>
                                    {fields.map((field) => (
                                        <>
                                            <Space
                                                key={field.key}
                                                style={{display: "flex", marginBottom: 8}}
                                                align="baseline"
                                                className={classes.column}
                                            >
                                                <Form.Item
                                                    {...field}
                                                    className={classes.antItem}
                                                    name={[field.name, "name"]}
                                                    fieldKey={[field.fieldKey, "name"]}
                                                >
                                                    <Input placeholder="Name"/>
                                                </Form.Item>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, "position"]}
                                                    fieldKey={[field.fieldKey, "position"]}
                                                >
                                                    <Input placeholder="Position"/>
                                                </Form.Item>

                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, "avatar"]}
                                                    fieldKey={[field.fieldKey, "avatar"]}
                                                    valuePropName="fileList"
                                                    multiple={false}
                                                    getValueFromEvent={normFile}
                                                >
                                                    <Upload name="logo" listType="picture">
                                                        <Button icon={<UploadOutlined/>}>Upload Speaker Image</Button>
                                                    </Upload>
                                                </Form.Item>


                                                <MinusCircleOutlined className={classes.deleteRow}
                                                                     onClick={() => remove(field.name)}/>

                                            </Space>

                                        </>
                                    ))}
                                    <Form.Item>
                                        <Button
                                            type="dashed"
                                            onClick={() => add()}
                                            block
                                            icon={<PlusOutlined/>}
                                        >
                                            Add speaker
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>

                    </div>
                    <div className={classes.card}>
                        <div className={classes.Card}>
                            <h2>Agenda</h2>
                            <Form.List name="agenda" initialValue={dates}>
                                {(fields, {add, remove}) => (
                                    <>
                                        {fields.map((field) => (
                                            <Space
                                                key={field.key}
                                                className={classes.column}
                                                style={{display: "flex", marginBottom: 8,alignItems:"flex-start"}}
                                                align="baseline"
                                            >
                                                <label htmlFor="begin_time">Begin time</label>
                                                <Form.Item
                                                    id={"begin_time"}
                                                    {...field}
                                                    name={[field.name, "begin_time"]}
                                                    fieldKey={[field.fieldKey, "begin_time"]}
                                                >
                                                    <Input placeholder="Name" type={"datetime-local"}/>
                                                </Form.Item>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, "end_time"]}
                                                    fieldKey={[field.fieldKey, "end_time"]}
                                                >
                                                    <Input
                                                        type={"datetime-local"}/>
                                                </Form.Item>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, "extra_desc"]}
                                                    style={{width: 300}}
                                                    fieldKey={[field.fieldKey, "extra_desc"]}
                                                >
                                                    <TextArea style={{minHeight: 150}} placeholder="Agenda description" name={"extra_desc"}
                                                    />

                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(field.name)}/>
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}

                                                block
                                                icon={<PlusOutlined/>}
                                            >
                                                Add Agenda
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </div>
                    </div>
                </div>
                <div className={classes.w30}>
                    <div className={classes.card}>
                        <label htmlFor="category">Category type</label>
                        <Form.Item
                            initialValue={0}
                            name={"category_type"}>
                            <Select
                                id={"category"}
                                defaultValue="0"
                                style={{width: "100%"}}
                                name={"category_type"}
                                onSelect={e => eventhandler(e, "category_type")}
                            >
                                <Select.Option value="0">Chamber event</Select.Option>
                                <Select.Option value="1">Partner's event</Select.Option>
                            </Select>
                        </Form.Item>
                        <label
                            htmlFor="calendar"
                        >On calendar</label>
                        <Form.Item
                            name={"on_calendar"}
                            initialValue={0}
                        >
                            <Select
                                id={"calendar"}
                                defaultValue="1"
                                style={{width: "100%"}}
                                onSelect={e => eventhandler(e, "on_calendar")}
                            >
                                <Select.Option value={"1"}>No</Select.Option>
                                <Select.Option value={"0"}>yes</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className={classes.card}>
                        <label htmlFor="video">Place</label>
                        <Form.Item
                            name={"place"}
                        >
                            <Input
                                placeholder="Place"
                                name={"place"}
                                onChange={eventhandler}
                            />
                        </Form.Item>
                    </div>
                    <div className={classes.card}>
                        <div>
                            <label
                                htmlFor="image"
                            >
                                Event Image
                            </label>
                            <div className={classes.dFlex}>
                                <Form.Item
                                    name={"image"}
                                    style={{display: "flex", width: "100%"}}
                                >

                                <span ref={placeholder} className={classes.placeholder}>

                                </span>
                                    <Input
                                        type="file"
                                        className={classes.fileUploadInput}
                                        id={"event_image"}
                                        name={"image"}
                                        onChange={e => {
                                            placeholder.current.innerHTML = e.target.files[0].name;
                                            setImage(e.target.files[0])
                                        }}
                                    />
                                    <Button
                                        type={"primary"}
                                    >
                                        <label className={classes.extraLabel} htmlFor="event_image">
                                            select
                                        </label>
                                    </Button>
                                </Form.Item>
                            </div>
                        </div>
                        <label htmlFor="gallery">Gallery</label>
                        <Form.Item style={{display: "flex"}} name={"gallery"}>
<span className={classes.placeholder} id={"gallery_images_holder"}>

</span>
                            <Input
                                type="file"
                                multiple
                                readOnly={true}
                                className={classes.fileUploadInput}
                                id={"gallery"}
                                onChange={(e) => postGallery("gallery_images_holder", e)}
                            />
                            <Button type={"primary"} style={{marginLeft: "10px"}}>
                                <label className={classes.extraLabel} htmlFor="gallery">
                                    select
                                </label>
                            </Button>
                        </Form.Item>
                        <Form.Item
                            name={"begin_date_time"}
                            fieldKey={"begin_date_time"}
                        >
                            <label htmlFor="begin_date_time">Begin time</label>
                            <Input
                                id={'begin_date_time'}
                                name={'begin_date_time'}
                                type={"datetime-local"}
                                onChange={eventhandler}
                            />
                        </Form.Item>


                        <Form.Item
                            name={"end_date_time"}
                            fieldKey={"end_date_time"}
                        >
                            <label htmlFor="end_date_time">End time</label>
                            <Input
                                id={'end_date_time'}
                                name={"end_date_time"}
                                type={"datetime-local"}
                                onChange={eventhandler}
                            />
                        </Form.Item>
                    </div>
                </div>
                <Button htmlType={"submit"} id='birnima' type={"primary"} style={{width: 200}}>Create</Button>
            </Form>
        </div>
    );
}

export default AddNewEvent;
