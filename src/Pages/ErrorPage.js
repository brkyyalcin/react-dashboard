import React from 'react'
import { ImSad } from 'react-icons/im'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const ErrorPage = (props) => {
  return (
    <div className='error-page'>
      <div className='container text-center'>
        <div className='col-8 offset-2'>
          <ImSad className='errorIcon' />
        </div>
        <div className='col-8 offset-2 mt-5 mb-3'>
          <h1>{props.Code}</h1>
        </div>
        <div className='col-8 offset-2 offset-2 mt-5 mb-5'>
          <h2>{props.ErrorTitle} </h2>
        </div>
        <div className='col-8 offset-2  mt-5'>
          <p>{props.ErrorDesc}</p>
          <Link className='btn btn-primary p-3' to="/" ><IoIosArrowBack className='ml-2'/><span>Go to Home</span></Link>
        </div>
      </div>
    </div>
  )
}

ErrorPage.defaultProps = { Code: "XXX", ErrorTitle: "Opss", ErrorDesc: "an unknown error" }

export default ErrorPage;