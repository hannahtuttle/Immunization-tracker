import React, { useState, useEffect } from 'react'
import NavHeader from '../PatientHeader/index.js'
import axios from 'axios'



const PatientDashboard = () => {
    const [getPatient, setPatient] = useState([])

    useEffect(() => {
        //this endpoint is not working
        // axios.get('rcm-immunization-tracker.herokuapp.com/guardians/allguardians')
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err.response))
    }, [])

    // useEffect(()=> {
    //     axios.get(`https://rcm-immunization-tracker.herokuapp.com/doctors/alldoctors`)
    //     .then(res => {
    //         //setPatient(res.data)
    //         const id = '3'
    //         const example = res.data.filter(person => person.doctorid === id)
    //         setPatient(example)
    //         console.log('example', example)
    //         console.log('getPatient', getPatient)
    //         console.log(res.data)})
    //     .catch(err => console.log(err.response))
    // }, [])



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
