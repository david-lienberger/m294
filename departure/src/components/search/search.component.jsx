import React from 'react';
import './search.component.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';

export default function SearchComponent() {
  const navigate = useNavigate();
  const searchSchema = Yup.object().shape({
    from: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    to: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  });
  const handleSubmit = (values) => {
    const from = values.from;
    const to = values.to;
    navigate(`/search?from=${from}&to=${to}`);
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
                <div className='card'>
                  <h2>Search</h2>{' '}
                  <div className='flex'>
                    <div className='icon'>
                      <span id='arrow-icon' className='material-symbols-outlined'>switch_access_shortcut</span>
                    </div>

                    <div className='searchfields'>
                      <div>
                        <div className='form-group1'>
                          <label>
                            <Field id='from' type='from' name='from' className='Input' />
                            <ErrorMessage name='from' component='div' />
                          </label>
                        </div>
                        <div className='form-group1'>
                          <label>
                            <Field id='to' type='to' name='to' className='Input' />
                            <ErrorMessage name='to' component='div' />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='button'>
                    <button type='submit' className='btn btn-primary' disabled={isSubmitting}>
                      Go
                    </button>{' '}
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
