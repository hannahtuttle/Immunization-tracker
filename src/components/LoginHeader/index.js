import React from 'react'
import { Link } from 'react-router-dom'
import './LoginHeader.scss'

const LoginHeader = () => {
    return (
        <div className='login-header'>
            <div className='logo-home'>
                <a href='https://immunify-app.netlify.com/index.html'>
                    <img src='./assets/logo-small.png' alt='Immunify Logo' />
                </a>
                <h2>IMMUNIFY</h2>

            </div>
            <nav>
                <Link to='/'>Log In</Link>
                <Link to='/SignUp'>Sign Up</Link>
                <Link to='/DoctorSignUp'>Doctor Sign Up</Link>
                <Link to='/DoctorLogin' >Doctor Login</Link>
                
            </nav>


        </div>
    );
}

export default LoginHeader