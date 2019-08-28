import React, { useState } from 'react';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import { axiosWithAuth } from '../../utils';
import axios from 'axios'



function Login({ errors, touched, values }) {

    const [login, setLogin] = useState({ email: '', password: '' });

    return (
        <div className="login-wrapper">
            <h2>[LOGO]</h2>
            <h3>Sign in</h3>
            <Form>
                <Field type="text" name="email" placeholder="Email" />
                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}
                <br />
                <br />
                <Field type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <br />
                <button type="submit">Login</button>
            </Form>
            <p>Don't have an account? SIGN UP</p>
            <p>Forgot your password?</p>
        </div>
    );
}

const LoginForm = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || '',
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required('Please enter your email address.'),
        password: Yup.string().required('Please enter your password.')
    }),

    handleSubmit(values) {
        const submitValues = { 'username': values.email, 'password': values.password }
        console.log(values);
        axios.post('https://rcm-immunization-tracker.herokuapp.com/login', `grant_type=password&username=${submitValues['username']}&password=${submitValues['password']}`, {
            headers: {
                Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                'Content-Type': 'application/x-www-form-urlencoded'

            }
        })

            .then(response => {
                localStorage.setItem('token', response.data.access_token)
                console.log('Result', response)

            })
            .catch(err => console.log(err.response))
    }

})(Login);

export default LoginForm;

// function Login() {

//     const [login, setLogin] = useState({ email: '', password: '' });

//     const handleSubmit = event => {
//         event.preventDefault()
//         console.log('LOGIN SENT', login);
//     }

//     const handleChange = event => {
//         setLogin({...login, [event.target.name]: event.target.value})
//         console.log('login changed', login)
//     }

//     return (
//         <div className="login-wrapper">
//             <h2>[LOGO]</h2>
//             <h3>Sign in</h3>
//             <form onSubmit={event => handleSubmit(event)}>
//                 <input
//                     name='email'
//                     type='text'
//                     placeholder='Email'
//                     value={login.email}
//                     onchange={event => handleChange(event)}
//                 />
//                 <input
//                     name='password'
//                     type='password'
//                     placeholder='Password'
//                     value={login.password}
//                     onchange={event => handleChange(event)}
//                 />
//                 <button type="submit">Sign Up</button>
//             </form>
//             <p>Don't have an account? SIGN UP</p>
//             <p>Forgot your password?</p>
//         </div>
//     );
// }

// export default Login