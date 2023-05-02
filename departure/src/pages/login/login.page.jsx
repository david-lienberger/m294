import React from 'react';
import { Formik } from "formik";

export default function LoginPage() {
  return (
    <>
      <link rel="stylesheet" href="style.scss"></link>
        <h1>Departure - dein Dashboard für den öffentlichen Verkehr.</h1> 

        <Formik 
          initialValues={{email: "", password: ""}}
          onSubmit={(values) => {
            console.log(values);
          }}>
            <div className="Login">
              <span>Login</span> <p/>
              <input type="email" name="email" value={values.email} placeholder="Enter email"/> <p/>
              <input type="text" /> <p/>
              <button>Login</button>
            </div>

        </Formik>
    </>
  );
}

