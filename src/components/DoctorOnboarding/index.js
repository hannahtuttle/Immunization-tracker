import React, {useState} from 'react'
import {axiosWithAuth} from '../../utils'


export const DoctorOnboarding = () => {
    const [doctor, setDoctor] = useState({ firstname: '', lastname: ''})

    const handleSubmit = event => {
        event.preventDefault()
        axiosWithAuth().post('', doctor)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err.response))
        console.log('doctor submit', doctor)
    }

    const handleChange = event => {
        setDoctor({
            ...doctor,
            [event.target.name]: event.target.value
        })
        console.log('doctor', doctor)
    }

    const handleDayClick = day => {
        setDoctor({
            ...doctor,
            birthdate: day.toLocaleDateString()
        })
        console.log('date picked')
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label>First name</label>
            <input
                name='firstname'
                type='text'
                value={doctor.firstname}
                onChange={event => handleChange(event)}
            />
            <label>Last name</label>
            <input
                name='lastname'
                type='text'
                value={doctor.lastname}
                onChange={event => handleChange(event)}
            />
           
            <button>Submit</button>
        </form>
    )
}
