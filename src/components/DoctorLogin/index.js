import React, { useState } from 'react';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import { axiosWithAuth } from '../../utils';
import axios from 'axios'



function DoctorLogin({ errors, touched, values }) {

    //const [doctorLogin, setDoctorLogin] = useState({ email: '', password: ''});

    return (
        <div className="sign-up-form">
            <h2>[LOGO]</h2>
            <h3>Sign in</h3>
            <Form>
                <Field className='signUpInput' type="email" name="email" placeholder="Email" />
                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}
                <br />
                <br />
                <Field className='signUpInput' type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <br />
                <button className='signUpButton ' type="submit">Sign Up</button>
            </Form>
            <p>Don't have an account? SIGN UP</p>
            <p>Forgot your password?</p>
        </div>
    );
}

const DoctorLoginForm = withFormik({
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
        axios.get('https://rcm-immunization-tracker.herokuapp.com/users/users')
            .then(res => {
                const currentUser = res.data.filter(id => id.username === values.email)
                console.log('current user array', currentUser)
                localStorage.setItem('currentUser', JSON.stringify(currentUser))
                window.location.href = '/DoctorOnboarding'
                //console.log('checking to see if i get a list of all users', res.data)
            })
            .catch(err => console.log('error on get request to get all users', err.response))
        setTimeout(() => {

        }, 500)
    }

})(DoctorLogin);

export default DoctorLoginForm;

//current