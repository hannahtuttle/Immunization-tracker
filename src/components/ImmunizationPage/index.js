import React, {Component} from 'react'

import NavHeader from '../PatientHeader/index.js'

class Immunizations extends Component{
constructor(props) {
    super(props)

}

render() {
    return(
        <>
        <NavHeader/>
        <div>
        <h2>{/*props.firstname props.lastname */}</h2>
        <p>{/* props.birthday*/}</p>
        <p>{/*props.gender*/}</p>
        <p>{/*props.location*/}</p>
        </div>
        <h3>Immunization Schedule</h3>
        <div>
        {/*map over childs completed/recomended vaccinies? */}
        </div>
        </>
    )
}
}

export default Immunizations