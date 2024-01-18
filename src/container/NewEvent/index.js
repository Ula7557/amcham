import classes from './index.module.scss';
import {Button, Form, Input, notification, Select, Space, Upload} from "antd";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import {MinusCircleOutlined, PlusOutlined, UploadOutlined} from "@ant-design/icons";
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useFetch} from "../../hooks/useFetch";
import {useNavigate, useParams} from "react-router-dom";

const customRequest = {
  headers: {
    "api-token": "iet378aopRlshw728191",
  },
  action: "https://api.amcham.uz/file/image",
  name: "image",
};
const AddNewEvent = () => {
  const token = useSelector((state) => state.auth);
  const [state, setState] = useState({});
  const [galleries, setGallery] = useState([]);
  const [duplicatedValues, setDuplicatedValues] = useState({});
  const placeholder = useRef();
  const params = useParams();
  const navigate = useNavigate();
  const [loading, data, error] = useFetch(`/event/one?id=${params.id}`);
  if (!loading) {
    var {
      agenda,
      title,
      description,
      speakers,
      image,
      gallery,
      url,
      end_date_time,
      begin_date_time,
      committee_id,
      on_calendar,
      category_type,
      video_url,
    } = data.data;
  }
  useEffect(() => {
    if (!loading) {
      setDuplicatedValues({
        agenda,
        title,
        description,
        speakers,
        image,
        gallery,
        url,
        end_date_time,
        begin_date_time,
        committee_id,
        on_calendar,
        category_type,
        video_url,
      });
    }
  }, [loading]);
  const handleChange = (e) => {
    setDuplicatedValues({
      ...duplicatedValues,
      [e.target.name]: e.target.value,
    });
  };
  const openNotification = (text) => {
    const args = {
      description: text,
      duration: 2,
    };
    notification.open(args);
  };
  const onsubmit = async (values) => {
    duplicatedValues.agenda = values.agenda;
    duplicatedValues.speakers = values.speakers;
    let i = 0;
    let speaker = {};
    for (let item of values.speakers) {
      let images = item.avatar;
      if (images !== undefined && images[0] !== null) {
        speaker[i] = {
          name: item.name,
          position: item.position,
          avatar: images[0].thumbUrl,
        };
        i++;
      } else {
        speaker[i] = { name: item.name, position: item.position, avatar: "" };
      }
    }
    values.speakers = speaker;

    const formData = new FormData();

    for (let i = 0; i < galleries.length; i++) {
      formData.append(`gallery[${i}]`, galleries[i]);
    }
    duplicatedValues.end_date_time =
      duplicatedValues.end_date_time &&
      duplicatedValues.end_date_time.replace(/T/g, " ");
    duplicatedValues.end_date_time =
      duplicatedValues.end_date_time &&
      duplicatedValues.end_date_time.replace(/T/g, " ");
    for (let [key, value] of Object.entries(values)) {
      if (value !== undefined) {
        setDuplicatedValues({ ...duplicatedValues, [key]: value });
      }
    }
    formData.append("user_id", token.chair_token.id);
    formData.append("image", image);
    formData.append("event_id", params.id);
    formData.append("committee_id", token.chair_token.committee_id);

    for (let [key, value] of Object.entries(duplicatedValues)) {
      if (key === "agenda" || key === "speakers") {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    }
    formData.delete("gallery");
    setTimeout(() => {
      axios
        .post(`https://api.amcham.uz/event/change/event`, formData, {
          headers: {
            "X-Auth-Token": token.user_token,
            "X-Auth-Signature": token.user_signature,
            "api-token": "iet378aopRlshw728191",
          },
        })
        .then((res) => {
          if (res.data.status === 1) {
            openNotification("Event has been successfully updated!");
            navigate("/committee-zone/all");
            navigate(`/committee-zone/all?id=${params.id}`);
          } else {
            return openNotification(res.data.message);
          }
        });
    }, 2000);
  };
  const order = [
    {
      name: "",
      position: "",
      image: "",
    },
  ];
  const date = [
    {
      begin_time: "",
      end_time: "",
      extra_desc: "",
    },
  ];
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
  };
  const itemInputs =
    speakers &&
    speakers.map((item) => {
      return {
        name: item.name,
        avatar: item.avatar,
        position: item.position,
      };
    });
  const dates =
    agenda &&
    agenda.map((item) => {
      return {
        begin_time: item.begin_time,
        end_time: item.end_time,
        extra_desc: item.extra_desc,
      };
    });
  const eventhandler = (e, name) => {
    setDuplicatedValues({
      ...duplicatedValues,
      [e.target.name]: e.target.value,
    });
  };
  if (loading) return null;
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Add new event</h3>

      <Form onFinish={onsubmit} className={classes.form}>
        <div className={classes.w65}>
          <div className={classes.card}>
            <label htmlFor="title">Title</label>
            <Form.Item name={"title"} fieldKey={"title"}>
              <Input
                defaultValue={title}
                placeholder="title"
                name={"title"}
                onChange={eventhandler}
              />
            </Form.Item>
            <label htmlFor="description">Description</label>
            <Form.Item name={"desc"} fieldKey={"desc"}>
              <TextArea
                id={"description"}
                defaultValue={description}
                rows={10}
                placeholder="Description"
                name={"description"}
                onChange={eventhandler}
              />
            </Form.Item>
          </div>
          <div className={classes.card}>
            <label htmlFor="url">Registration url</label>
            <Form.Item name={"url"}>
              <Input
                defaultValue={url}
                placeholder="Url"
                name={"url"}
                onChange={eventhandler}
              />
            </Form.Item>
            <label htmlFor="url">Video url</label>
            <Form.Item name={"video_url"}>
              <Input
                defaultValue={video_url}
                placeholder="Video"
                name={"video_url"}
                onChange={eventhandler}
              />
            </Form.Item>
          </div>
          <div className={classes.card}>
            <h2>Speakers</h2>
            <Form.List name="speakers" initialValue={itemInputs}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <>
                      <Space
                        key={field.key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                        className={classes.ant_design}
                      >
                        <Form.Item
                          {...field}
                          name={[field.name, "name"]}
                          fieldKey={[field.fieldKey, "name"]}
                        >
                          <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "position"]}
                          fieldKey={[field.fieldKey, "position"]}
                        >
                          <Input placeholder="Position" />
                        </Form.Item>

                        <Form.Item
                          fieldKey={[field.fieldKey, "avatar"]}
                          valuePropName="fileList"
                          multiple={false}
                          getValueFromEvent={normFile}
                        >
                          <Upload
                            name="image"
                            listType="picture"
                            {...customRequest}
                          >
                            <Button icon={<UploadOutlined />}>
                              Upload Speaker Image
                            </Button>
                          </Upload>
                        </Form.Item>

                        <label
                          htmlFor={field.name + "avatar"}
                          className={classes.uploadLabel}
                        >
                          Upload
                        </label>
                        <MinusCircleOutlined
                          className={classes.deleteRow}
                          onClick={() => remove(field.name)}
                        />
                      </Space>
                    </>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
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
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field) => (
                      <Space
                        key={field.key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                        className={classes.ant_design}
                      >
                        <label htmlFor="begin_time">Begin time</label>
                        <Form.Item
                          id={"begin_time"}
                          {...field}
                          name={[field.name, "begin_time"]}
                          fieldKey={[field.fieldKey, "begin_time"]}
                        >
                          <Input placeholder="Name" type={"datetime-local"} />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "end_time"]}
                          fieldKey={[field.fieldKey, "end_time"]}
                        >
                          <Input type={"datetime-local"} />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "extra_desc"]}
                          fieldKey={[field.fieldKey, "extra_desc"]}
                          style={{ width: 300 }}
                        >
                          <TextArea
                            style={{ minHeight: 150 }}
                            placeholder="Agenda description"
                            name={"extra_desc"}
                          />
                        </Form.Item>
                        <MinusCircleOutlined
                          onClick={() => remove(field.name)}
                        />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
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
            <Form.Item initialValue={category_type} name={"category_type"}>
              <Select
                id={"category"}
                defaultActiveFirstOption={committee_id}
                style={{ width: "100%" }}
                name={"category_type"}
                onSelect={(e) => eventhandler(e, "category_type")}
              >
                <Select.Option value="0">Chamber event</Select.Option>
                <Select.Option value="1">Partner's event</Select.Option>
              </Select>
            </Form.Item>
            <label htmlFor="calendar">On calendar</label>
            <Form.Item name={"on_calendar"} initialValue={on_calendar}>
              <Select
                id={"calendar"}
                defaultValue={on_calendar}
                style={{ width: "100%" }}
                onSelect={(e) => eventhandler(e, "on_calendar")}
              >
                <Select.Option value={"0"}>No</Select.Option>
                <Select.Option value={"1"}>yes</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className={classes.card}>
            <div>
              <label htmlFor="image">Event Image</label>
              <div className={classes.dFlex}>
                <Form.Item
                  name={"image"}
                  style={{ display: "flex", alignItems: 'center', width: "100%", }}
                >
                  <span ref={placeholder} className={classes.placeholder}>
                    {typeof image === "string" ? image : image.name}
                  </span>
                  <Input
                    type="file"
                    className={classes.fileUploadInput}
                    id={"event_image"}
                    name={"image"}
                    onChange={(e) => {
                      setDuplicatedValues({
                        ...duplicatedValues,
                        image: e.target.files[0],
                      });
                      placeholder.current.innerHTML = e.target.files[0].name;
                    }}
                  />
                  <Button type={"primary"}>
                    <label className={classes.extraLabel} htmlFor="event_image">
                      select
                    </label>
                  </Button>
                </Form.Item>
              </div>
            </div>
            <label htmlFor="gallery">Gallery</label>
            <div style={{ display: "flex", alignItems: 'center' }}>
              <span
                className={classes.placeholder}
                id={"gallery_images_holder"}
              >
                {galleries.length} image are selected
              </span>
              <Input
                type="file"
                multiple
                readOnly={true}
                className={classes.fileUploadInput}
                id={"gallery"}
                onChange={(e) => postGallery("gallery_images_holder", e)}
              />
              <Button type={"primary"} style={{ marginLeft: "10px" }}>
                <label className={classes.extraLabel} htmlFor="gallery">
                  select
                </label>
              </Button>
            </div>
            <Form.Item name={"begin_date_time"} fieldKey={"begin_date_time"} className={classes.begin_mt_top}>
              <label htmlFor="begin_date_time">Begin time</label>
              <Input
                id={"begin_date_time"}
                name={"begin_date_time"}
                defaultValue={begin_date_time.replace(" ", "T")}
                type={"datetime-local"}
                onChange={eventhandler}
              />
            </Form.Item>

            <Form.Item name={"end_date_time"} fieldKey={"end_date_time"} className={classes.begin_mt_top}>
              <label htmlFor="end_date_time">End time</label>
              <Input
                id={"end_date_time"}
                name={"end_date_time"}
                type={"datetime-local"}
                onChange={eventhandler}
                defaultValue={end_date_time.replace(" ", "T")}
              />
            </Form.Item>
          </div>
        </div>
        <Button htmlType={"submit"} type={"primary"} style={{ width: 200 }}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default AddNewEvent;
