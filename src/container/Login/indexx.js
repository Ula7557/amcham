import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroups } from "../../../../redux/actions/groupsActions";

function Group(props) {
  const dispatch = useDispatch();

  const groups = useSelector((state) => state.groups.groups);
  const checkgroup = (key) => {
    groups[key].checked = !groups[key].checked;
    dispatch(setGroups(groups));
  };

  return groups.map((group, key) => {
    const { id, nomi, user_id, station, checked } = group;
    return (
      <div className="four wide column" key={id}>
        <li className="d-flex user-list-item">
          <div className="info">
            <input
              type="checkbox"
              id={"gr" + nomi}
              className="groupcheckboxes"
              checked={checked}
              onChange={() => checkgroup(key)}
            />
            <label htmlFor={"gr" + nomi} className="uname">
              {nomi}
            </label>
          </div>
          <div className="options">
            <i
              className="fa fa-pencil edit_group"
              title="Guruhni taxrirlash"
            ></i>
            <i
              className="fa fa-trash remove_user"
              title="Guruhni o'chirish"
            ></i>
          </div>
        </li>
      </div>
    );
  });
}

export default Group;
