import classes from './styles.module.scss'
import './global.scss'
import {useSelector} from "react-redux";
import {Button, Form, Input, InputNumber, notification} from 'antd';
import {request} from "../../api";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getStaffListCount} from "../../utils/getStaffListCount";
import getMembershipInfo from "../../utils/getMembershipInfo";
import Plus from "../../assets/icons/plus.svg";

const CompanySettings = () => {
    const company = useSelector(state => state.auth.company);
    const user = useSelector(state => state.auth);
    const history = useNavigate();
    const [iterator, setIterator] = useState([]);

    let {email, title, membership_cat, telephone, information, address, website, staff, logo_of_company} = company;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (staff === null || staff) {
            const count = getStaffListCount(membership_cat);
            if(staff === null) {
                staff = []
            }
            const garbageArray = [...staff];
            for (let i = 1; i <= count - staff.length; i++) {
                garbageArray.push({
                    name: "",
                    position: "",
                    email: "",
                    telephone: ""
                })
            }
            setIterator(garbageArray)
        } else {
            console.log("Error parsing data");
        }
    }, [staff]);
    const openNotification = (data) => {
        if (data.status === 0) return null;
        const args = {
            message: 'Profile update',
            description: "Successfully updated your information!",
            duration: 2,
        };
        notification.open(args);
    };
    const onFinish = (values) => {
        values.company.staff = values.staff

        const data = new FormData();
        for (let [key, value] of Object.entries(values.company)) {
            if (key === "staff") {
                data.append(key, JSON.stringify(value));

            } else {
                data.append(key, String(value));

            }
        }
        data.append("user_id", user.chair_token.id);
        data.append("company_id", company.id);
        data.append("logo_of_company", image ? image : logo_of_company);

        request.post("/company/change", data)
            .then(res => {
                    openNotification(res);
                    history('/');
                    setTimeout(() => {
                        history('/account');
                    }, 100)
                }
            )
            .catch(err => console.log(err));

    };


    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    const [image, setImage] = useState();
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.secondaryText}>Company Settings</h2>
            <Form name="nest-messages" onFinish={onFinish} style={{width: "100%"}} validateMessages={validateMessages}>
                <div className={classes.mainFields}>
                    <Form.Item
                        name={['company', 'title']}
                        label="Title"
                        labelCol={{span: 24}}
                        wrapperCol={{sm: 24}}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        initialValue={title}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name={['company', 'email']}
                        label="Email"
                        wrapperCol={{sm: 24}}
                        labelCol={{span: 24}}
                        initialValue={email}
                        rules={[
                            {
                                type: 'email',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name={['company', 'telephone']}
                        initialValue={parseInt(telephone)}
                        labelCol={{span: 24}}
                        wrapperCol={{sm: 24}}
                        label="Telephone number"
                        rules={[
                            {
                                type: 'number',

                            },
                        ]}
                    >
                        <InputNumber maxLength={12}/>
                    </Form.Item>
                    <Form.Item
                        labelCol={{span: 24}}
                        name={['company', 'website']}
                        wrapperCol={{sm: 24}}
                        initialValue={website} label="Website">
                        <Input/>
                    </Form.Item>
                    <div>
                        <h2>Membership type:</h2>
                        <div className={classes.membershipInfo}>
                            {getMembershipInfo(membership_cat)}
                        </div>
                    </div>

                    <Form.Item
                        labelCol={{span: 24}}
                        wrapperCol={{sm: 24}}
                        name={['company', 'address']}
                        initialValue={address}
                        label="Address">
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        labelCol={{span: 24}}
                        name={['company', 'information']}
                        wrapperCol={{sm: 24}}
                        initialValue={information}
                        label="Information">
                        <Input.TextArea/>
                    </Form.Item>
                    <Form.Item>
                        <div
                            className={classes.formControl}
                            style={{transform: "translateY(4px)"}}
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
                                onChange={(e) => {
                                    setImage(e.target.files[0]);
                                    document.getElementById("image-preview").textContent =
                                        e.target.files[0].name;
                                }}
                            />
                            <img src={Plus} className={classes.plus} alt=""/>
                        </div>
                    </Form.Item>
                </div>

                <h2 className={classes.secondaryText}>Staff informations:</h2>

                <div className={classes.cardWrapper}>
                    {iterator && iterator.map((el, index) => (
                        Object.keys(el).length !== 0 ? (
                            <div className={classes.cardItem}>
                                <Form.Item
                                    initialValue={el.name}
                                    name={['staff', index, 'name']}
                                    label="Name">
                                    <Input placeholder={"Name"}/>
                                </Form.Item>
                                <Form.Item
                                    initialValue={el.position}
                                    name={['staff', index, 'position']}
                                    label="Position"
                                >
                                    <Input placeholder={"Position"}/>
                                </Form.Item>
                                <Form.Item
                                    initialValue={el.telephone}
                                    name={['staff', index, 'telephone']} label="Telehone number">
                                    <Input placeholder={"Telehone number"}/>
                                </Form.Item>
                                <Form.Item initialValue={el.email} name={['staff', index, 'email']} label="Email">
                                    <Input placeholder={"Email"}/>
                                </Form.Item>
                            </div>
                        ) : (<></>)
                    ))}
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default CompanySettings

