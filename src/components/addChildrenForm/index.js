import React, {useState} from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const AddChildForm = () => {

    const [child, setChild] = useState({firstname: '', lastname:'', birthdate: '', gender: ''})

    const handleSubmit = event => {
        event.preventDefault()
       
        console.log('child submit', patient)
    }

    const handleChange = event => {
        setChild({
            ...child,
            [event.target.name]:event.target.value
        })
        console.log('patient', patient)
    }

    const handleDayClick = day => {
        setChild({
            ...child,
            birthdate: day.toLocaleDateString()
        })
    }

    return(
        <form onSubmit={event => handleSubmit(event)}>
            <label>First name</label>
            <input 
            name='firstname'
            type='text'
            value={patient.firstname}
            onChange={event => handleChange(event)}
            />
            <label>Last name</label>
            <input 
            name='lastname'
            type='text'
            value={patient.lastname}
            onChange={event => handleChange(event)}
            />
            <label>Gender</label>
            <select name='gender' onChange={event=> handleChange(event)}>
                <option value='pick one'>Pick one</option>
                <option value='male'>Male</option>
                <option value= 'female'>Female</option>
            </select>
            <label>Date of Birth</label>
            <DayPickerInput 
            onDayChange={day => handleDayClick(day)}
            selectedDays={child.birthdate}
            />
            <button>Add Family Member</button>
        </form>
    )
}

export default AddChildForm;