import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { RiMenu5Fill } from 'react-icons/ri'
import { useSelector,useDispatch } from 'react-redux'
import { setToogleBtn } from '../../stores/site'
import HeaderNotification from './HeaderNotification'
import HeaderSettingMenu from './HeaderSettingMenu'
const Header = () => {

  const dispatch = useDispatch();

  return (
    <header className='shadow'>
      <div className='header d-flex justify-content-between'>
        <div className=' row'>
          <div className='col-2  d-flex align-items-center'>
            <button className="navbar-toggler" onClick={() => dispatch(setToogleBtn()) } >
              <RiMenu5Fill />
            </button>
          </div>
          <div className='col-10 d-none d-lg-block'>
            <div className="input-group ">
              <input type="text" className="form-control" placeholder=" Search" aria-label="Search" aria-describedby="Search"/>
                <div className="input-group-append">
                  <button className="btn btn-danger" type="button"><FiSearch /></button>
                </div>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-between'>
          <HeaderNotification />
          <HeaderSettingMenu />
        </div>
      </div>
    </header >
  )
}

export default Header