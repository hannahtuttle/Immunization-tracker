import React, { useState } from 'react'
import axios from 'axios'


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
        <form onSubmit={event => handleSubmit(event)}>
            <label>UserName</label>
            <input
                name='username'
                type='email'
                value={newUser.username}
                onChange={event => handleChange(event)}
            />

            <label>Password</label>
            <input
                name='password'
                type='text'
                value={newUser.password}
                onChange={event => handleChange(event)}
            />
            <button type='submit'>SignUp</button>
        </form>
    )
}

export default SignUp