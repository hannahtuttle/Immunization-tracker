import React, {useState, useEffect} from 'react'
import NavHeader from '../PatientHeader/index.js'
import axios from 'axios'
import axiosWithAuth from '../../utils'


const PatientDashboard = () => {

    const[getPatient, setPatient]= useState([])

    useEffect(() => {
        axios.get('rcm-immunization-tracker.herokuapp.com/guardians/allguardians')
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
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
