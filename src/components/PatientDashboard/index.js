import React from 'react'
import NavHeader from '../PatientHeader/index.js'

const PatientDashboard = () => {

    return(
        <>
        <NavHeader />
        <img/>
        <h3>My Records</h3>
        {/*map over children? for child buttons? and passing chilren immunization props?*/}
        <button>Add Member</button>
        </>
    )
}
