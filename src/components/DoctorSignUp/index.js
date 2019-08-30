import React, { useState } from 'react'
import axios from 'axios'

import LoginHeader from '../LoginHeader'

import './DoctorSignUp.scss'

const DoctorSignUp = props => {

    const [newDoctor, setNewDoctor] = useState({ username: '', password: '' })

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('https://rcm-immunization-tracker.herokuapp.com/users/userdoctor', newDoctor)
            .then(res => {

                console.log(res)

                props.history.push('/DoctorLogin')
            })
            .catch(err => console.log(err.response))

    }

    const handleChange = event => {
        setNewDoctor({
            ...newDoctor,
            [event.target.name]: event.target.value
        })

    }

    return (
        <>
        <LoginHeader />
            <form className='sign-up-form' onSubmit={event => handleSubmit(event)}>
            <img src='./assets/logo.png' alt='Immunify Logo' />
                <h2>Welcome to Immunify</h2>
                <h3>Sign up (providers)</h3>
                <label className='signUplabel'>UserName</label>
                <input
                    className='signUpInput'
                    name='username'
                    type='email'
                    value={newDoctor.username}
                    onChange={event => handleChange(event)}
                />

                <label className='signUplabel'>Password</label>
                <input
                    className='signUpInput'
                    name='password'
                    type='text'
                    value={newDoctor.password}
                    onChange={event => handleChange(event)}
                />
                <button className='signUpButton' type='submit'>Sign Up</button>
            </form>
        </>
    )
}

export default DoctorSignUp