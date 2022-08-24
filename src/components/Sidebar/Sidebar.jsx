import React, { useEffect } from 'react'
import SidebarItem from './SidebarItem';
import { SidebarData } from './LinkData';


const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <div className='logo'>
        <a href="/" className="text-white text-decoration-none">
          <img src={process.env.PUBLIC_URL+"/img/tursysLogo.png" } alt='logo' />
          <span>ISSUE</span>
        </a>
      </div>
      <hr />
      <div className='nav'>
        <div className='nav-menu-heading '>

        </div>
      {SidebarData.map((item) => {
          return (
            <SidebarItem
              subNavList={item.subNav}
              key={item.id}
              icon={item.icon}
              title={item.title}
              path={item.path}
            />
          )
        })}
      </div>
      <hr />

    </nav>
  )
}

export default Sidebar