import React, { useEffect, useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const SidebarItem = ({ icon, title, path, subNavList }) => {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => {
        setSubnav(!subnav)
    }
    const showClass = subnav ? "collapse show" : "collapse";



    return (
        <li className="nav-item">
            {subNavList == undefined ? (
                <NavLink
                className={({ isActive }) => isActive ? " nav-link active":"nav-link" }
                    to={path} end>
                    {icon}
                    <span className='nav-title'>{title}</span>

                </NavLink>
            ) : (
                <>
                    <a
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#home-collapse"
                        aria-expanded="false "
                        onClick={subNavList && showSubnav}>
                        {icon}
                        <span className='nav-title'>{title}</span>
                        {subnav ?
                            <IoIcons.IoIosArrowUp className='nav-drop' />
                            :
                            <IoIcons.IoIosArrowDown className='nav-drop' />
                        }
                    </a>
                    <div className={showClass} >
                        <ul>
                            {subNavList.map((item) => {
                                  
                                return (
                                    <li key={item.id}>
                                        <NavLink  className={({ isActive }) => isActive ? " nav-link active":"nav-link" }

                                            to={item.path} end>
                                            {item.icon}
                                            <span className='nav-title'>{item.title}</span>
                                        </NavLink>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>

                </>
            )}

        </li>

    )
}

export default SidebarItem