import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import NavHeader from '../PatientHeader/index.js'
import './DoctorDashboard.scss'


export const DoctorDashboard = () => {

  const [doc, setDoc] = useState([])

  const currentDoctorID = localStorage.getItem('currentDoctor')
  //console.log(currentDoctorID)

  useEffect(() => {
    // testing the configuration of the dummy data
    axios.get(`https://rcm-immunization-tracker.herokuapp.com/doctors/alldoctors`)
      .then(res => {
        setDoc(res.data)
        console.log('checking users config', res)
      })
      .catch(err => console.log(err.response))
    // axios.get(`https://rcm-immunization-tracker.herokuapp.com/doctors/doctor/${currentDoctorID}`)
    //   .then(res => {
    //     console.log('result of current doctor', res)
    //   })
    //   .catch(err => {
    //     console.log('error from get current doctor request', err.response)
    //   })
  }, [])

  console.log('doc', doc)

  const maGoo = doc.filter(id => id.doctorid === 1)

  console.log('maGoo', maGoo)

  return (
    <>
    <NavHeader />
    <div className='image-carousel'>  
                <p>pictures go here</p>
            </div>
      <div>List of patients go here</div>
      {maGoo.map(person =>
        // console.log('person', person)
        person.permissions.map(permission =>
          //console.log('permission', permission)
          permission.guardian.wards.map(ward =>
            //console.log('ward', ward)
            <div className='dashbutton child-record'>{ward.firstname}</div>

          )

        )


      )}
      {/* {Object.keys(maGoo.wards).map((ward, index) => <li>{key={index} }</li>)} */}
      <Link to='/'><button className='dashbutton dash-reset' onClick={localStorage.clear()}>Log out</button></Link>
    </>
  )
}