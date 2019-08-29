import React, { useContext} from 'react'
import {UserContext} from '../../contexts/UserContext'

import NavHeader from '../PatientHeader/index.js'

const Immunizations = ({ward}) => {

    // const child = useContext(UserContext)

    // console.log('child', child)

    return(
      
        <>
        {/* <NavHeader/> */}
        <div>
           
        <h2>{ward.firstname} {ward.lastname }</h2>
        <p>{/* props.birthday*/}</p>
        <p>{/*props.gender*/}</p>
        <p>{/*props.location*/}</p>
        </div>
        <h3>Immunization Schedule</h3>
        <div>
        {ward.immunizations.map(shot => 
        <div>
            <p>{shot.immunizationname}</p>
            <p>{shot.clinic}</p>
        </div>)}
        </div>
        </>
      
    )

}

export default Immunizations