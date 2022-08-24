import React, { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import NotificationItem from './NotificationItem';
import { useSelector,useDispatch } from 'react-redux'
import { setIsWhoDrop,setIsWhoDropText } from '../../stores/site'
import { Link } from "react-router-dom";
const HeaderNotification = () => {
  const dispatch = useDispatch();
  const { isWhoDrop,isWhoDropText } = useSelector((state) => state.site)
  const dropdownBtn = () => {
    dispatch(setIsWhoDrop(isWhoDropText === "NotfSeeting" && isWhoDrop ? false : true));
    dispatch(setIsWhoDropText("NotfSeeting"));
  }
  const random = [1, 2, 3];


  return (
    <div className="dropDown notfdropDown">
      <a className={"btn btn-icon" + (isWhoDrop &&  isWhoDropText==='NotfSeeting' ? " btn-secondary" : " ")} onClick={dropdownBtn}>
        <IoIosNotificationsOutline />
      </a>
      <div className={"dropdown-menu border-0 " + (isWhoDrop &&  isWhoDropText==='NotfSeeting' ? "show" : "")}>
        <h6 className="dropdown-header bg-primary text-white">
          <IoIosNotificationsOutline /> Bildirimler
        </h6>
        {random.map((item) => {
          return (
            <NotificationItem
              key={item}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HeaderNotification