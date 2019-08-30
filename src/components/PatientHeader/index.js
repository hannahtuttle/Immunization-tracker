import React from 'react'
import { Link } from 'react-router-dom'
import './PatientHeader.scss'

const NavHeader = () => {

  return (
    <div className='patient-header'>
      <div className='logo'>
        <a href='https://immunify-app.netlify.com/'>
          <img src='./assets/logo-small.png' alt='Immunify Home Page' />
        </a>
      </div>
      <nav>
        <img src='./assets/notification-icon.png' alt='Notifications' className='user-icon'/>
        <img src='./assets/user-icon.png' alt='User Dashboard' className='notification-icon'/>
      </nav>
    </div>
  )
}

export default NavHeader;

{/* 
<p>Immunify</p>  
<a>Doctors</a>
<a>Notifications</a>
<a>Information</a> 
<p>image here</p>
*/}