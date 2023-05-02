import React, { createContext, useContext, useEffect, useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';
import './login.scss';
import AuthService from '../../services/auth.service';
import Error from '../../components/error/error.component';

const AuthContext = createContext({
  authenticated: undefined,
  user: {
      username: null
  }
}
);

export default function LoginPage() {
  const service = new AuthService();
  const [users, setUsers] = useState();

  useEffect(() => {
    service.getUser(email, password).then((res) => {
      setUsers(res.data);
    });
  }, []);

  const validationSchema = yup.object().shape({
    email: yup.string().required('blahblah').min(3, 'At least 3 characters'),
    password: yup.string().required('Required'),
  });

  function submit(data) {
    console.log(data);
  }

  console.log(users);
  return (
    <>
      <h1>Departure - dein Dashboard für den öffentlichen Verkehr.</h1>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          submit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='Login'>
              <div className='form-group'>
                <label>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
                <ErrorMessage name='email'>{(msg) => <Error message={msg}></Error>}</ErrorMessage>
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
                <ErrorMessage name='password'>
                  {(msg) => <Error message={msg}></Error>}
                </ErrorMessage>
              </div>
              <button type='submit' className='btn btn-primary' disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export function Login() {
  const [user, setUser] = useState({
    authenticated: false,
    user: {
      username: undefined,
    },
  });

  function login() {
    setUser({
      authenticated: true,
      user: {
        username: 'John Doe',
      },
    });
  }

  function logout() {
    setUser({
      authenticated: false,
      user: {
        username: null,
      },
    });
  }
  return (
    <>
      <button onClick={login}>login</button>
      <AuthContext.Provider value={user}>{`Hello ${user.user.username}`}</AuthContext.Provider>
      <Child/>
      {user.authenticated && <button onClick={logout}>logout</button>}
    </>
  );
}
export function Child() {
  const user = useContext(AuthContext);

  useEffect(() => {
      console.log('changes')
  }, [user])

  return (
      user &&
      <p>{`Authenticated: ${user.authenticated}`}</p>
  );
}