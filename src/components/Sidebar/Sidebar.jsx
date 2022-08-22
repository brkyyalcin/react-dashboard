import React, { useEffect } from 'react'
import SidebarItem from './SidebarItem';
import { SidebarData } from './LinkData';


const Sidebar = () => {
  useEffect(() => {

  })


  return (
    <nav className='sidebar'>
      <div className='logo'>
        <a href="/" className="text-white text-decoration-none">
          <img src='https://seeklogo.com/images/C/corporate-company-logo-749CEE6ADC-seeklogo.com.png' alt='logo' />
        </a>
      </div>

      <hr />
      <ul className="nav">
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

      </ul>

    </nav>
  )
}

export default Sidebar