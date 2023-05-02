import React from 'react';
import { Formik } from 'formik';
import {  Form } from 'react-bootstrap';
import './login.scss';

export default function LoginPage() {
  return (
    <>
      <h1>Departure - dein Dashboard für den öffentlichen Verkehr.</h1>

      <Formik initialValues={{ email: '', password: '' }} onSubmit={console.log('test1')}>
      <Form>
        <div className="Login">
         <div className="form-group">
           <label >Email address</label>
           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
         </div>
         <div className="form-group">
           <label >Password</label>
           <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
         </div>
         <button type="submit" className="btn btn-primary">Submit</button>
         </div>
      </Form>
      </Formik>
    </>
  );
}
