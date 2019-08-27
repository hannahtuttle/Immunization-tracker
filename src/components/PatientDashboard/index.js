import React from 'react'
import NavHeader from '../PatientHeader/index.js'
import axiosWithAuth from '../../utils'


const PatientDashboard = () => {


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
