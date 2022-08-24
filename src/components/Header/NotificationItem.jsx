import React from 'react'
import { BiNotification } from 'react-icons/bi';
import { Link } from "react-router-dom";

const NotificationItem = (props) => {
    return (
        <Link className="dropdown-item dropdown-notifications-item" to={props.path}>
            <div className={"dropdown-notifications-item-icon "+props.IconBgClass}>{props.Icon}</div>
            <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-details">{props.date}</div>
                <div className="dropdown-notifications-item-content-text">{props.text}</div>
            </div>
        </Link>
    )
}

NotificationItem.defaultProps = {
    path:'#',
    IconBgClass:'bg-danger',
    Icon:<BiNotification/>,
    date:'December 29, 2021',
    text:"This is an alert message. It's nothing serious, but it requires your attention."
}

export default NotificationItem