import classes from "./Modal.module.scss";
import {IoClose} from "react-icons/io5";
import {createPortal} from "react-dom";

const Modal = ({setOpenModal, data, user}) => {
    const modalRoot = document.getElementById("modal-root");
    const {description, image, address, phone, staff} = data;
    const profile = user.profile;
    const {email} = user.user;
    return createPortal(
        <>
            <div onClick={() => setOpenModal(false)} className={classes.shadow}></div>
            <div
                className={`${classes.comittieeModal} `}
            >
                <div className={classes.comittieeModalHeader}>
                    <button onClick={() => setOpenModal(false)}>
                        <IoClose/>
                    </button>
                </div>
                <div className={classes.comittieeModalInner}>
                    <div className={classes.comittieeModalInnerLeft}>
                        <h3 className={classes.comittieeModalTitle}>
                            {data.title}
                        </h3>
                        <p className={classes.comittieeModalDescription}>
                            {profile.bio}
                        </p>
                        <div className={classes.comittieeModalDescriptionBlock}>
                        </div>
                    </div>
                    <div className={classes.comittieeModalInnerRight}>
                        <div className={classes.comittieeModalInnerRightInner}>
                            <img
                                src={profile ? profile.image : ""}
                                alt="Personal"
                                className={classes.comittieeModalImg}
                            />
                            <h6 className={classes.comittieeModalName}>
                                {profile && profile.name.toUpperCase()}
                                {" "}
                                {profile && profile.surname.toUpperCase()}
                            </h6>
                            <span className={classes.comittieeModalPosition}>
              Committee Chair
            </span>
                            <p className={classes.comittieeModalDescription}>
                                {address}
                            </p>
                            <p className={classes.comittieeModalDescription}>
                                {profile.phone}
                            </p>
                            <p className={classes.comittieeModalDescription}>
                                {email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>

        ,
        modalRoot
    );
};

export default Modal;
