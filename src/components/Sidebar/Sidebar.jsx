import React, { useEffect } from 'react'

import SidebarItem from './SidebarItem';
import {SidebarData} from './LinkData';


const Sidebar = () => {
  useEffect(() => {

  })


  return (
    <div className='sidebar'>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
       
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {SidebarData.map((item)=>{
          return(
            <SidebarItem 
            subNavList={item.subNav}
            key={item.id}
            icon={item.icon}
            title={item.title}
            path={item.path}
            />
          )
        })}

      </ul>

    </div>
  )
}

export default Sidebar