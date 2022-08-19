import React, { useEffect, useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'
import { Link } from 'react-router-dom'

const SidebarItem = ({ icon, title, path, subNavList }) => {
    const [subnav, setSubnav] = useState(false)
    console.log(subNavList)

    const showSubnav = () => {
        console.log(subNavList)
        setSubnav(!subnav)
    }
    return (

        <li className="nav-item">
            <Link
                className="nav-link text-white"
                to={path}
                onClick={subNavList && showSubnav}>
                    {icon}
                {title}
            </Link>
        </li>

    )
}

export default SidebarItem