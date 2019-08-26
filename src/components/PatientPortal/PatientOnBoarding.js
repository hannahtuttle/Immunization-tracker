import React from 'react'

const PatientOnBoarding = () => {

    const handleSubmit = event => {
        event.preventDefault()
        
    }

    const handleChange = () => {

    }

    return(
        <form onSubmit={event => handleSubmit(event)}>
            <label>Name</label>
            <input 
            name='name'
            type='text'
            //value={}
            onChange={event => handleChange(event)}
            />
            <label>Date of Birth</label>
            <input />
            <label>Gender</label>
            <input />
            <label>Location</label>
            <input />
            <button>Add Member</button>
        </form>
    )
}