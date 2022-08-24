import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setIsWhoDrop,setIsWhoDropText } from '../../stores/site'
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'
import * as BsIcons from 'react-icons/bs'

const HeaderSettingMenu = () => {
    const dispatch = useDispatch();
    const { isWhoDrop,isWhoDropText } = useSelector((state) => state.site)
    const dropdownBtn = () =>{
        dispatch(setIsWhoDrop(isWhoDropText === "HeaderSeeting" && isWhoDrop  ? false : true));
        dispatch(setIsWhoDropText("HeaderSeeting"));
    }

    return (
        <div className="dropDown userdropDown">
            <a className={"btn btn-icon"+(isWhoDrop &&  isWhoDropText==='HeaderSeeting' ? " btn-secondary":"")} onClick={dropdownBtn}>
                <img src={process.env.PUBLIC_URL + "/img/avatar.png"} className='user-avatar' alt='profileImg' />

            </a>
            <div className={"dropdown-menu border-0 "+(isWhoDrop &&  isWhoDropText==='HeaderSeeting' ?  "show":"")}>
                <h6 className="dropdown-header d-flex align-items-center">
                    <img className="user-avatar" src={process.env.PUBLIC_URL + "/img/avatar.png"} />
                        <div className="dropdown-user-details">
                            <div className="dropdown-user-details-name">Berkay YALÇIN</div>
                            <div className="dropdown-user-details-email">berkay@tursys.com</div>
                        </div>
                </h6>
                <div className="dropdown-divider"></div>
                <Link to="#" className='dropdown-item'><BiIcons.BiUserCircle className='dropdown-item-icon' /><span>Profile</span></Link>
                <Link to="#" className='dropdown-item'><AiIcons.AiOutlineSetting className='dropdown-item-icon' /><span>Settings</span></Link>
                <Link to="#" className='dropdown-item'><FiIcons.FiLogOut className='dropdown-item-icon' /><span>Log out</span></Link>
            </div>
        </div>
    )
}

export default HeaderSettingMenu;