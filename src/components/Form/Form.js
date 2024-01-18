import "./Form.scss";
import {Alert, Button, Input, notification, Select} from "antd";
import {useEffect, useState} from "react";
import Avatar from "../File";
import {request} from "../../api";
import axios from "axios";
import Spinner from "../Spinner";
import Preloader from '../../components/preloader'
const Form = () => {
    const openNotification = text => {
        const args = {
            message: 'Ticket Created!',
            description: text ? text : "Please be patient admin will check your company's information!",
            duration: 2,
        };
        notification.open(args);
    };
    const [onError, setOnError] = useState({
        error: false,
        message: ""
    });
    const {Option} = Select;
    const {TextArea} = Input;
    const [preloading, setPreloading] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        membership_cat: 0,
        email: '',
        fax: 0,
        postal_code: 0,
        address: '',
        telephone: 0,
        other: '',
        person_email: "",
        contact_person: "",
        full_name_head: "",
        information: "",
        industry_group: 0,
        logo_of_company: "",
        committee_list_group: []
    });
    const [fileName, setFileName] = useState(null)
    const handleChange = (info) => {
      let fileList = [...info.fileList];

      setFileName(info.file.name);
      fileList = fileList.slice(-5);
      fileList.forEach(function (file, index) {
        let reader = new FileReader();
        reader.onload = (e) => {
          file.base64 = e.target.result;
        };
        reader.readAsDataURL(file.originFileObj);
      });

      setTimeout(() => {
        if (fileList[0].base64) {
          const image = new FormData();
          image.append("image", fileList[0].base64);
          request
            .post("/company/logo", image)
            .then((res) =>
              setFormData({
                ...formData,
                logo_of_company: res.data,
              })
            )
            .catch((err) => console.log(err));
        }
      }, 100);
    };
    const [state, setState] = useState({
      items: [],
      name: "",
    });

    let index = 0;
    const [formMenus, setFormMenus] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      Promise.all([
        request("/content/all/membership_category?sortby=sort&sort=sort"),
        request("/content/all/industry"),
        request("/committee/all/commit"),
      ])
        .then((responses) => {
          const results = responses.map((r) => r.data.data);
          setFormMenus(results);
          setState({ ...state, items: results[1] });
        })
        .catch((err) => console.log(err));
    }, []);
    const signUp = async (id) => {
      const data = {
        "user[password]":
          window.btoa(`yourPsW`) +
          String(formData.contact_person).split(" ").join(""),
        "user[password_repeat]":
          window.btoa(`yourPsW`) +
          String(formData.contact_person).split(" ").join(""),
        "user[email]": formData.person_email,
        "profile[phone]": formData.telephone,
        "profile[name]": formData.contact_person,
        "profile[surname]": formData.contact_person,
        "user[company_id]": id,
        "user[profit_id]": formData.membership_cat,
      };
      setTimeout(() => {
        const signUpData = new FormData();
        for (let [key, value] of Object.entries(data)) {
          signUpData.append(key, String(value));
        }
        axios
          .post("https://api.amcham.uz/account/signup", signUpData, {
            headers: {
              "api-token": "iet378aopRlshw728191",
            },
          })

          .then((res) => {
            if (res.data.error) {
              setLoading(false);
              setOnError({
                status: true,
                message: res.data.message,
              });
              return openNotification(res.data.message);
            }
            setOnError({
              message: "",
              status: false,
            });
            setLoading(false);
          setPreloading(false);
            openNotification();
          })
          .catch((er) => console.log(er));
      }, 1000);
    };
    const beforeSubmit = (e) => {
     e.preventDefault();
     const email = new FormData();
     email.append("email", formData.person_email);

     axios
       .post("https://api.amcham.uz//profile/is-user", email, {
         headers: {
           "api-token": "iet378aopRlshw728191",
         },
       })
       .then((res) => {
          setPreloading(true)
        if(res.data?.status !== 0) {
          submitHandler()
         } else {
          setPreloading(false);
          openNotification("This email is already taken!")
          console.log('Don\'t use dublicated emails bro ')
         }
       })
       .catch((err) => {
         console.log(err);
       });
    }
    const submitHandler = (e) => {
 
      setLoading(true);
      const data = new FormData();

      for (let [key, value] of Object.entries(formData)) {
        if (key === "committee_list_group") {
          data.append(key, JSON.stringify(value));
        } else {
          data.append(key, value);
        }
      }
      axios
        .post("https://api.amcham.uz/company/add/company", data, {
          headers: {
            "api-token": "iet378aopRlshw728191",
          },
        })
        .then((res) => {
          if (res && res.data.status === 1) {
            setLoading(true);
            signUp(res.data.data);
          }
        })
        .catch((er) => {
          setPreloading(false)
        });
    };
    return (
      <div className={"company-wrapper"}>
        {loading ? (
          <div className={"loader d-flex align-center justify-center"}>
            <Spinner />
          </div>
        ) : null}
        <h1 className={"title"}>Company Information</h1>
        <div className="container">
          <div className="row">
            <form onSubmit={beforeSubmit} action="">
              <div className="d-flex wrap">
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">
                    Please indicate the membership category:
                  </h2>
                  <div className="chooseCategory">
                    <Select
                      placeholder="Select a category"
                      onSelect={(e) =>
                        setFormData({ ...formData, membership_cat: e })
                      }
                      style={{ width: 300 }}
                      allowClear
                    >
                      {formMenus.length > 0 &&
                        formMenus[0].map((opt) => (
                          <Option key={opt.id}>{opt.title} </Option>
                        ))}
                    </Select>
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Enter your Company's name:</h2>
                  <div className="chooseCategory">
                    <Input
                      required={true}
                      style={{ width: 300 }}
                      placeholder="Company name"
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Select Committees:</h2>
                  <Select
                    style={{ width: 300 }}
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    onChange={(e) =>
                      setFormData({ ...formData, committee_list_group: e })
                    }
                  >
                    {formMenus.length > 0 &&
                      formMenus[2].map((opt) => (
                        <Option key={opt.id}>{opt.title} </Option>
                      ))}
                  </Select>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Industry Group:</h2>
                  <Select
                    required={true}
                    allowClear
                    style={{ width: 300, height: "fit-content" }}
                    placeholder="Select Industries  "
                    onSelect={(e) =>
                      setFormData({ ...formData, industry_group: e })
                    }
                    dropdownRender={(menu) => <div>{menu}</div>}
                  >
                    {state.items.length > 0 &&
                      state.items.map((item) => (
                        <Option key={item.id}>{item.title}</Option>
                      ))}
                  </Select>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">AmCham member since:</h2>
                  <div className="chooseCategory">
                    <Input
                      style={{ width: 300 }}
                      required={true}
                      placeholder="Membership date"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          amcham_member_since: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">
                    Full name of the head of the company:
                  </h2>
                  <div className="chooseCategory">
                    <Input
                      style={{ width: 300 }}
                      placeholder="Company head"
                      required={true}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          full_name_head: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Contact person:</h2>
                  <div className="chooseCategory">
                    <Input
                      style={{ width: 300 }}
                      placeholder="Contact person"
                      required={true}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact_person: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Contact person email:</h2>
                  <div className="chooseCategory">
                    <Input
                      style={{ width: 300 }}
                      required={true}
                      placeholder="Contact person email"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          person_email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Additional information:</h2>
                  <div className="chooseCategory">
                    <Input
                      style={{ width: 300 }}
                      required={true}
                      placeholder="Additional information"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          other: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Telephone number:</h2>
                  <div className="chooseCategory">
                    <Input
                      style={{ width: 300 }}
                      placeholder="Telephone number"
                      type={"text"}
                      required={true}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          telephone: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Address:</h2>
                  <div className="chooseCategory">
                    <Input
                      style={{ width: 300 }}
                      placeholder="Address"
                      required={true}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Postal code:</h2>
                  <div className="chooseCategory">
                    <Input
                      style={{ width: 300 }}
                      required={true}
                      placeholder="Postal code"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          postal_code: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Tax identification number:</h2>
                  <div className="chooseCategory">
                    <Input
                      style={{ width: 300 }}
                      placeholder="Identification number"
                      required={true}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fax: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">Email:</h2>
                  <div className="chooseCategory">
                    <Input
                      style={{ width: 300 }}
                      type={"email"}
                      placeholder="Email"
                      required={true}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex align-start mb-2 w-50">
                  <h2 className="label-title">About the company:</h2>
                  <TextArea
                    style={{ width: 300, display: "block" }}
                    rows={6}
                    required={true}
                    maxLength="150"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        information: e.target.value,
                      })
                    }
                    placeholder={
                      "Brief description of the company that we may use to promote your company (*150 words)"
                    }
                  />
                </div>
                <div className="d-flex align-start w-50 mb-2">
                  <Avatar handleChange={handleChange} text={fileName} />
                </div>
              </div>
              <Button
                size={"large"}
                style={{ maxWidth: 550, width: "100%", margin: "40px auto" }}
                type={"primary"}
                disabled={preloading}
                htmlType={"submit"}
              >
                {preloading ? <Preloader /> : "Submit application"}
              </Button>
            </form>
            {onError.status ? (
              <div className={`onError ${onError.status ? "active" : null}`}>
                <Alert
                  message="Error on creating account"
                  showIcon
                  description={onError.message}
                  type="error"
                  action={
                    <Button
                      onClick={() => setOnError({ ...onError, status: false })}
                      size="small"
                      danger
                    >
                      Close
                    </Button>
                  }
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
};

export default Form;
