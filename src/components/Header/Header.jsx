import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { RiMenu5Fill } from 'react-icons/ri'
import { useSelector,useDispatch } from 'react-redux'
const Header = () => {



  return (
    <header className='shadow'>
      <div className='header d-flex justify-content-between'>
        <div className=' row'>
          <div className='col-2  d-flex align-items-center'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation"  >
              <RiMenu5Fill />
            </button>
          </div>
          <div className='col-10  '>
            <div className="input-group ">
              <input type="text" className="form-control" placeholder=" Search" aria-label="Search" aria-describedby="Search"/>
                <div className="input-group-append">
                  <button className="btn btn-danger" type="button"><FiSearch /></button>
                </div>
            </div>
          </div>
        </div>

        <div className=''>
          burası bildirimler menü vb
        </div>
      </div>
    </header >
  )
}

export default Header