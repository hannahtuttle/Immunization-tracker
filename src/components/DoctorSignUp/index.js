import React, { useState } from 'react'
import axios from 'axios'


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
        <form onSubmit={event => handleSubmit(event)}>

            <label>UserName</label>
            <input
                name='username'
                type='email'
                value={newDoctor.username}
                onChange={event => handleChange(event)}
            />

            <label>Password</label>
            <input
                name='password'
                type='text'
                value={newDoctor.password}
                onChange={event => handleChange(event)}
            />
            <button type='submit'>SignUp</button>
        </form>
    )
}

export default DoctorSignUp