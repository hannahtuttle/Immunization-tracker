import React from 'react'

const PatientProfile = props => {

    const AddMember = () => {
       // props.history.push('/')
    }

    return(
        <div>
            <h3>My Records</h3>
            <button>Mom (persons name)</button>
            <div>Child1 (childs name)</div>
            <div>Child2 (childs name)</div>
            <div>Spouse (Spouse name)</div>
            <button onClick={AddMember}>Create a new record</button>

    {/* possible component for extra vaccine resources*/}
        </div>
    )
}

export default PatientProfile;