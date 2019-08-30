import React, { useState } from 'react'
import axios from 'axios'
import './SignUpForm.scss'

import LoginHeader from '../LoginHeader'

const SignUp = props => {

    const [newUser, setNewUser] = useState({ username: '', password: '' })

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('https://rcm-immunization-tracker.herokuapp.com/users/userguardian', newUser)
            .then(res => {

                console.log(res)
                props.history.push('/')
            })
            .catch(err => console.log(err.response))

    }

    const handleChange = event => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })

    }

    return (
        <>
            <LoginHeader />
            <form className='sign-up-form' onSubmit={event => handleSubmit(event)}>
            <img src='./assets/logo.png' alt='Immunify Logo' />
            <h2>Welcome to Immunify</h2>
            <h3>Sign up</h3>
                <label className='signUplabel'>UserName</label>
                <input
                    className='signUpInput'
                    name='username'
                    type='email'
                    value={newUser.username}
                    onChange={event => handleChange(event)}
                />

                <label className='signUplabel'>Password</label>
                <input
                    className='signUpInput'
                    name='password'
                    type='text'
                    value={newUser.password}
                    onChange={event => handleChange(event)}
                />
                <button className='signUpButton' type='submit'>Sign Up</button>
        </form>
        </>
    )
}

export default SignUp