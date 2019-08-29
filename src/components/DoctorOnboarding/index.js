import React, { useState } from 'react'
import axios from 'axios'

export const DoctorOnboarding = props => {
  const [doctor, setDoctor] = useState({name: ''})
  //const [doctorID, setDoctorID] = useState({doctorid: ''})

  const handleSubmit = event => {
    event.preventDefault()
    const token =localStorage.getItem('token')
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const user = currentUser.map(id => id.userid)
    console.log('current user id', currentUser)
    console.log('user', user[0])
    axios.post('https://rcm-immunization-tracker.herokuapp.com/doctors/doctor', doctor, {
      headers: {
        Authorization: `bearer ${token}`,
        //'context-type': 'placeholder'

      }
    })
      .then(res => {
        //setDoctorID({ doctorid: res.data.doctorid})
        localStorage.setItem('currentDoctor', `${res.data.doctorid}`)
        console.log('id response from adding a doctor',res.data.doctorid)
         axios.put(`https://rcm-immunization-tracker.herokuapp.com/doctors/doctor/${res.data.doctorid}/user/${user[0]}`)
         .then(res => console.log('put doctors to user id', res))
         .catch(err => console.log('doctor put not working', err.response))
          props.history.push('/DoctorDashboard')
         //console.log('doctorID', doctorID)
        })
        .catch(err => console.log('error from posting doctor', err.response))
      
   // console.log('doctor submit', doctor)
  }

  const handleChange = event => {
    setDoctor({
      ...doctor,
      [event.target.name]: event.target.value
    })
   // console.log('doctor', doctor)
  }



  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>Name</label>
      <input
        name='name'
        type='text'
        value={doctor.name}
        onChange={event => handleChange(event)}
      />
      {/* <label>Last name</label>
      <input
        name='lastname'
        type='text'
        value={doctor.lastname}
        onChange={event => handleChange(event)}
      /> */}

      <button>Submit</button>
    </form>
  )
}
