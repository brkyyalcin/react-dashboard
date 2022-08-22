
import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        icon: <TbIcons.TbLayoutGrid  className='nav-icon' />,
    },
    {
        id: 2,
        title: 'Navs',
        path: 'Navs',
        icon: <FaIcons.FaUserAlt  className='nav-icon' />,
    },
    {
        id: 3,
        title: 'Pages',
        path: 'Pages',
        icon: <RiIcons.RiPagesFill className='nav-icon' />,
        subNav: [
            {
              id: 222,
              title: 'Login',
              path: 'Pages/Login',
              icon: <FaIcons.FaUser className='nav-icon' />,
            },
            {
              id: 233,
              title: 'Register',
              path: 'Pages/Register',
              icon: <FaIcons.FaUserEdit className='nav-icon' />,
            },
          ],
    }, {
        id: 4,
        title: 'Pagesd',
        path: 'Pagesd',
        icon: <FaIcons.FaUserAlt className='nav-icon' />,
        subNav: [
            {
              id: 1,
              title: 'Login',
              path: 'Pagesd/Logind',
              icon: <IoIcons.IoMdPeople className='nav-icon' />,
            },
            {
              id: 2,
              title: 'Register',
              path: 'Pagesd/Registerd',
              icon: <BsIcons.BsPencilSquare className='nav-icon'/>,
            },
          ],
    }
]
