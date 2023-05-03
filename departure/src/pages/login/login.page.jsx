import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.scss';
import AuthService from '../../services/auth.service';
import ReactDOM from 'react-dom/client';
import DashboardPage from '../dashboard/dashboard.page';

const loginSchema = Yup.object().shape({
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

class LoginForm extends React.Component {
  handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      const service = new AuthService();
      var token = service.getUser(values.email, values.password);
      if (token != null) {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        const element = <DashboardPage />;
        root.render(element);
      }
      setSubmitting(false);
    }, 400);
  };

  render() {
    return (
      <>
        <h1>Departure - dein Dashboard für den öffentlichen Verkehr.</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <div className='Login'>
                <Form>
                  <div className='Login'>
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
}

export default LoginForm;
