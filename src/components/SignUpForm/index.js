import React, {useState} from 'react'


const SignUp = () => {

    const [newUser, setNewUser] = useState({name: '', username: '', password: ''})

const handleSubmit= event => {
    event.preventDefault()
}

const handleChange = event => {
    setNewUser({
        ...user,
        [event.target.name]:event.target.value
    })

}

return (
    <form onSubmit={event => handleSubmit(event)}>
        <label>Name</label>
        <input
        name='name'
        type='text'
        value ={newUser.name}
        onChange={event => handleChange(event)}
        />
        <label>UserName</label>
        <input
        name='username'
        type='email'
        value ={newUser.username}
        onChange={event => handleChange(event)}
        />
       
        <label>Password</label>
        <input
        name='password'
        type='text'
        value ={newUser.password}
        onChange={event => handleChange(event)}
        />
        <button type='submit'>SignUp</button>
    </form>
)
}

export default SignUp