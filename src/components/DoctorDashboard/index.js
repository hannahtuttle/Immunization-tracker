import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const DoctorDashboard = () => {

  const [doc, setDoc] = useState()

  const currentDoctorID = localStorage.getItem('currentDoctor')

  useEffect(() => {
    // testing the configuration of the dummy data
    // axios.get(`https://rcm-immunization-tracker.herokuapp.com/doctors/alldoctors`)
    // .then(res => console.log('checking doctors config', res))
    // .catch(err => console.log(err.response))
    // axios.get(`https://rcm-immunization-tracker.herokuapp.com/doctors/doctor/${currentDoctorID}`)
    //   .then(res => {
    //     console.log('result', res)
    //   })
    //   .catch(err => {
    //     console.log('error', err.response)
    //   })
  }, [])

    return(
      <>
      <div>List of patients go here</div>
      <button onClick={localStorage.clear()}>Log out</button>
      </>
    )
}