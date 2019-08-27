import React, {useState} from 'react'
import axios from 'axios'


const DoctorSignUp = props => {

    const [newDoctor, setNewDoctor] = useState({name: '', username: '', password: ''})

const handleSubmit= event => {
    event.preventDefault()
    axios.post('https://rcm-immunization-tracker.herokuapp.com/doctor', newDoctor)
    .then(res => {
        localStorage.setItem('token', res)
        console.log(res)
        props.history.push('/DoctorOnboarding')
    })
    .catch(err => console.log(err.response))

}

const handleChange = event => {
    setNewDoctor({
        ...newDoctor,
        [event.target.name]:event.target.value
    })

}

return (
    <form onSubmit={event => handleSubmit(event)}>
        <label>Name</label>
        <input
        name='name'
        type='text'
        value ={newDoctor.name}
        onChange={event => handleChange(event)}
        />
        <label>UserName</label>
        <input
        name='username'
        type='email'
        value ={newDoctor.username}
        onChange={event => handleChange(event)}
        />
       
        <label>Password</label>
        <input
        name='password'
        type='text'
        value ={newDoctor.password}
        onChange={event => handleChange(event)}
        />
        <button type='submit'>SignUp</button>
    </form>
)
}

export default DoctorSignUp