import React from 'react';
import './search.component.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function SearchComponent() {
  const searchSchema = Yup.object().shape({
    password: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{ from: '', to: '' }}
        validationSchema={searchSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className='homesearch'>
                <div className='search'>
                  <h2>Search</h2>{' '}
                  <div className='flex'>
                    <div className='icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='25'
                        height='30'
                        fill='currentColor'
                        className='bi bi-arrow-down'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
                        />
                      </svg>{' '}
                    </div>

                    <div className='searchfields'>
                      <div>
                        <div className='form-group1'>
                          <label>
                            <Field type='from' name='from' className='Input' />
                            <ErrorMessage name='from' component='div' />
                          </label>
                        </div>
                        <div className='form-group1'>
                          <label>
                            <Field type='to' name='to' className='Input' />
                            <ErrorMessage name='to' component='div' />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button id='button1' type='submit' className='btn btn-primary' disabled={isSubmitting}>
                    Go
                  </button>{' '}
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
