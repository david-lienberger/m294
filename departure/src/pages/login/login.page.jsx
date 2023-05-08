import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.page.scss';
import AuthService from '../../services/auth.service';
import ToastService from '../../services/toast.service';
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function LoginPage() {
  const toastService = new ToastService();
  const navigate = useNavigate();
  let token;
  const handleSubmit = (values, { setSubmitting }) => {
    const service = new AuthService();
    service.getUser(values.email, values.password).then((res) => {
      token = res;
      if (token === 'Error') {
        toastService.emit('Email oder Passwort falsch!', 'error');
      }
      if (token !== 'Error') {
        service.saveAccessToken(token);
        service.saveAuthState(true);
        navigate('/');
      }
    });
    setSubmitting(false);
  };

  return (
    <>
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
                    <label className='label'>Email:</label>
                    <Field type='email' name='email' className='Input' />
                    <ErrorMessage name='email' component='div' />
                  </div>
                  <div className='form-group'>
                    <label className='label'>Password:</label>
                    <Field type='password' name='password' className='Input' />
                    <ErrorMessage name='password' component='div' />
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
