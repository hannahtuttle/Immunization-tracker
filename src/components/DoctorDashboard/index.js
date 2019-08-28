import React from 'react'
import axios from 'axios'

export const DoctorDashboard = () => {
  axios.get('')
    .then(res => {
      console.log('result', res)
    })
    .catch(err => {
      console.log('error', err.response)
    })
}