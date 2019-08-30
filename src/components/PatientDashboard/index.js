import React, { useState, useEffect } from 'react'
import NavHeader from '../PatientHeader/index.js'
import axios from 'axios'
import { UserContext } from '../../contexts/UserContext'
import Immunizations from '../ImmunizationPage'
import addChildForm from '../addChildrenForm'
import {Link} from 'react-router-dom'

import './PatientDashboard.scss'



const PatientDashboard = () => {
    const [getPatient, setPatient] = useState([])
    const currentParentID = localStorage.getItem('currentPatient')
    console.log('local starage current patientid',currentParentID)

    useEffect(() => {
        //this endpoint is not working
        axios.get('https://rcm-immunization-tracker.herokuapp.com/guardians/allguardians')
            .then(res => {
                setPatient(res.data)
               // console.log('allguardians', res)
            })
            .catch(err => console.log(err.response))
    }, [])

    // useEffect(()=> {
    //     axios.get(`https://rcm-immunization-tracker.herokuapp.com/guardians/guardian/${currentParentID}`)
    //     .then(res => {
    //         //setPatient(res.data)
    //         const id = '3'
    //         const example = res.data.filter(person => person.doctorid === id)
    //         setPatient(example)
    //         // console.log('example', example)
    //         // console.log('getPatient', getPatient)
    //         console.log(res.data)})
    //     .catch(err => console.log(err.response))
    // }, [])

        const rory = getPatient.filter(id => id.guardianid === 1)
        console.log('rory', rory)

    return (
        <>
        {/* <UserContext.Provider value={rory}> */}
            <NavHeader />
            <div className='image-carousel'>  
                <p>pictures go here</p>
            </div>
            <div>
                <h3>My Records</h3>
            {rory.map(parent => 
                parent.wards.map(ward => 
                    
                    <>
                        <button className='dashbutton child-record'>
                            {ward.firstname}
                            <span className="child-record icon">></span>
                        </button>
                        <br />
                        <br />
                        <Immunizations ward={ward}/>
                    </>
                   
                )
                )}
                <Link to='/addChild'><button className='dashbutton add-child'>
                    <span className="add-child-icon">+</span>Add Member
                </button></Link>
                <br />
                <br />
                <Link to='/'><button className='dashbutton dash-reset' onClick={localStorage.clear()}>Log out</button></Link>
            </div>
            {/* </UserContext.Provider> */}
        </>
    )
}

export default PatientDashboard;
