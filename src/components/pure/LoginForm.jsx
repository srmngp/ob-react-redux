import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Not a valid email')
            .required('Required'),
        password: Yup.string()
            .required('Required')
    }
)

const LoginForm = ({ logged, fetching, onLogin, }) => {

    const initalCredentials = {
        email: '',
        password: ''
    }

    return (
        <Formik
            initialValues={initalCredentials}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
                onLogin(values.email, values.password)
            }}
        >

            {({ errors, values, touched, isSubmiting }) => (
                <Form>
                    <label htmlFor='email'>Email</label>
                    <Field id='email' type='email' name='email' placeholder='example@email.com' />
                    {errors.email && (
                        <ErrorMessage name='email' component='div' />
                    )}

                    <label htmlFor='password'>Password</label>
                    <Field id='password' type='password' name='password' />
                    {errors.password && (
                        <ErrorMessage name='password' component='div' />
                    )}

                    <button type='submit'>Login</button>
                    {fetching ? (<p>LOADING ...</p>) : null}
                </Form>
            )}

        </Formik>
    )
}

LoginForm.propTypes = {
    logged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default LoginForm
