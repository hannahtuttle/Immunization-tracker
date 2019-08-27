import React from 'react'
import { axiosWithAuth } from '../../utils'


export const DoctorDashboard = () => {
  axiosWithAuth().get('')
    .then(res => {
      console.log('result', res)
    })
    .catch(err => {
      console.log('error', err.response)
    })
}