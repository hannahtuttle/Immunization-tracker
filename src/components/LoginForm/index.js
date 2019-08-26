import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Yup from 'yup';




export default function LoginWrapper() {

    return(
        <div className="login-wrapper">
            <h1>Login</h1>
            <h2>Please enter your email and password.</h2>
            <Formik>
                initialValues={{ email: 'email', password: 'password' }}
                

            </Formik>
        </div>
    )
}