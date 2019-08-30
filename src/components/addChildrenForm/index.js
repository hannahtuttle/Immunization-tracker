import React, { useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import axios from 'axios'
const AddChildForm = () => {

    const [child, setChild] = useState({ firstname: '', lastname: '', birthdate: '', gender: '' })

    const handleSubmit = event => {
        event.preventDefault()
        // axios.post('http://rcm-immunization-tracker.herokuapp.com/', child, {
        //     headers: {
        //         Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        //         'context-type': 'placeholder'

        //     }
        //})
            .then(res => {
                console.log(res)
            })
            .catch(err => err.response)
        console.log('child submit', child)
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
        <form onSubmit={event => handleSubmit(event)}>
            <label>First name</label>
            <input
                name='firstname'
                type='text'
                value={child.firstname}
                onChange={event => handleChange(event)}
            />
            <label>Last name</label>
            <input
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
            <button>Add Family Member</button>
        </form>
    )
}

export default AddChildForm;