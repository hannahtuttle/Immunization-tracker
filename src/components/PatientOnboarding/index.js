import React, { useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const PatientOnboarding = () => {

    const [patient, setPatient] = useState({ firstname: '', lastname: '', birthdate: '', gender: '', location: '' })

    const handleSubmit = event => {
        event.preventDefault()

        console.log('patient submit', patient)
    }

    const handleChange = event => {
        setPatient({
            ...patient,
            [event.target.name]: event.target.value
        })
        console.log('patient', patient)
    }

    const handleDayClick = day => {
        setPatient({
            ...patient,
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
                value={patient.firstname}
                onChange={event => handleChange(event)}
            />
            <label>Last name</label>
            <input
                name='lastname'
                type='text'
                value={patient.lastname}
                onChange={event => handleChange(event)}
            />
            <label>Gender</label>
            <select name='gender' onChange={event => handleChange(event)}>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
            <label>Location</label>
            <input
                name='location'
                type='text'
                value={patient.location}
                onChange={event => handleChange(event)}
            />
            <label>Date of Birth</label>
            <DayPickerInput
                //value={patient.birthdate}
                onDayChange={day => handleDayClick(day)}
                selectedDays={patient.birthdate}
            />
            <button>Submit</button>
        </form>
    )
}

export default PatientOnboarding;