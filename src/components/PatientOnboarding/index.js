import React, { useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css'
import axios from 'axios'

import NavHeader from '../PatientHeader/index.js'

const PatientOnboarding = props => {

    const [patient, setPatient] = useState({ firstname: '', lastname: '', 
   // birthdate: '', gender: '', location: '' 
})

    const handleSubmit = event => {
        event.preventDefault()
        const token =localStorage.getItem('token')
        const currentParent = JSON.parse(localStorage.getItem('currentParent'))
         const parent = currentParent.map(id => id.userid)
         console.log('current user id', currentParent)
         console.log('user', parent[0])
        axios.post('https://rcm-immunization-tracker.herokuapp.com/guardians/guardian', patient, {
            headers: {
                Authorization: `bearer ${token}`,
                //'context-type': 'placeholder'

            }
        })
            .then(res => {
                console.log('response from onboarding gaurdian', res)
                //need to be able to get an id from the post response
                localStorage.setItem('currentPatient', `${res.data.guardianid}`)
                 console.log('id response from adding a parent/guardian',res.data.guardianid)
                 axios.put(`https://rcm-immunization-tracker.herokuapp.com/guardians/guardian/${res.data.guardianid}/user/${parent[0]}`)
                 .then(res => console.log('put patient to user id', res))
                 .catch(err => console.log('patien put not working', err.response))
                  props.history.push('/PatientDashboard')
             })
            .catch(err => console.log(err.response))
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
        <>
            <NavHeader />
            <form className="sign-up-form" onSubmit={event => handleSubmit(event)}>
                <img src='./assets/logo.png' alt='Immunify Logo' />
                <br />
                <label>First name</label>
                <input className='signUpInput'
                    name='firstname'
                    type='text'
                    value={patient.firstname}
                    onChange={event => handleChange(event)}
                />
                <label>Last name</label>
                <input className='signUpInput'
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
                <br />
                <label>Location</label>
                <input className='signUpInput'
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
                <br />
                <button className='signUpButton'>Submit</button>
            </form>
        </>
    )
}

export default PatientOnboarding;