
import NavHeader from '../PatientHeader/index.js'
import { axiosWithAuth } from '../../utils'
import React, { useState, useEffect } from 'react'



const PatientDashboard = () => {

    const [getPaitent, setPaient] = useState([])
    useEffect(() => {
        axiosWithAuth().get(`https://rcm-immunization-tracker.herokuapp.com/guardian/${guardianid}`)
            .then(res => {
                console.log('guardianid', res)
            })
            .catch(err => {
                console.log('We did this wrong', err.response)
            })
    })
    return (
        <>
            <NavHeader />
            <div>  <img /></div>
            <div>
                <h3>My Records</h3>

                <button>Add Member</button>
            </div>
        </>
    )
}

export default PatientDashboard;
