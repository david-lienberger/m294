import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.scss';
import AuthService from '../../services/auth.service';
import ConnectionsService from '../../services/connections.service';
import { useNavigate } from 'react-router-dom';
import Error from '../../components/error/error.component';

const loginSchema = Yup.object().shape({
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function LoginPage() {
  const navigate = useNavigate();
  let token;
  let error = false;
  const handleSubmit = (values, { setSubmitting }) => {
    const service = new AuthService();
    service.getUser(values.email, values.password).then((res) => {
      token = res;
      if (token === "Error") {
        error = true;
        navigate('/login');
      } 
      if(token !== "Error") {
        sessionStorage.setItem('token', token);
        error = false;
        new ConnectionsService(token);
        navigate('/');
      }
    });
    
    setSubmitting(false);
  };

  return (
    <>
    { error && (<Error message='Password or Email wrong!' error={false}></Error>)}
      <h1>Departure - dein Dashboard für den öffentlichen Verkehr.</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <div className='Login'>
              <Form>
                <div>
                  <div className='form-group'>
                    <label>
                      Email: <p className='p' />
                      <Field type='email' name='email' className='Input' /> <p />
                      <ErrorMessage name='email' component='div' />
                    </label>
                  </div>
                  <div className='form-group'>
                    <label>
                      Password: <p className='p' />
                      <Field type='password' name='password' className='Input' />
                      <ErrorMessage name='password' component='div' />
                    </label>
                  </div>
                  <button type='submit' className='btn btn-primary' disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}
