import React, { useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import axios from 'axios'
import './addChildForm.scss'
import {Link} from 'react-router-dom'


import NavHeader from '../PatientHeader/index.js'

const AddChildForm = () => {

    const [child, setChild] = useState({ firstname: '', lastname: '', birthdate: '', gender: '' })

    const handleSubmit = event => {
        event.preventDefault()
        // axios.post('https://rcm-immunization-tracker.herokuapp.com/wards/ward', child, {
        //     headers: {
        //         Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        //         'context-type': 'placeholder'

        //     }
        //})
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => err.response)
        // console.log('child submit', child)
    }

    const handleChange = event => {
        setChild({
            ...child,
            [event.target.name]: event.target.value
        })
        console.log('child', child)
    }

    const handleDayClick = day => {
        setChild({
            ...child,
            birthdate: day.toLocaleDateString()
        })
    }

    return (
        <>
        <NavHeader />
        <form  className='sign-up-form' onSubmit={event => handleSubmit(event)}>
            <img src='./assets/logo.png' alt='Immunify Logo' />
            <label>First name</label>
            <input
                className='signUpInput'
                name='firstname'
                type='text'
                value={child.firstname}
                onChange={event => handleChange(event)}
            />
            <label>Last name</label>
            <input
                className='signUpInput'
                name='lastname'
                type='text'
                value={child.lastname}
                onChange={event => handleChange(event)}
            />
            <label>Gender</label>
            <select name='gender' onChange={event => handleChange(event)}>
                <option value='pick one'>Pick one</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
            <label>Date of Birth</label>
            <DayPickerInput
                onDayChange={day => handleDayClick(day)}
                selectedDays={child.birthdate}
            />
            <Link to='PatientDashboard'><button className='signUpButton'>Add Family Member</button></Link>
        </form>
        </>
    )
}

export default AddChildForm;