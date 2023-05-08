import React from 'react';
import './search.component.scss';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';

export default function SearchComponent() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const searchSchema = Yup.object().shape({
    from: Yup.string().min(3, t('UTILS.VALIDATOR_ERROR.TO_SHORT')).max(50, t('UTILS.VALIDATOR_ERROR.TO_LONG')).required(t('UTILS.VALIDATOR_ERROR.REQUIRED')),
    to: Yup.string().min(3, t('UTILS.VALIDATOR_ERROR.TO_SHORT')).max(50, t('UTILS.VALIDATOR_ERROR.TO_LONG')).required(t('UTILS.VALIDATOR_ERROR.REQUIRED')),
  });
  const handleSubmit = (values) => {
    const { from } = values;
    const { to } = values;
    navigate(`/search?from=${from}&to=${to}`);
  };
  return (
    <Formik
      initialValues={{ from: '', to: '' }}
      validationSchema={searchSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form id="search-form">
          <div id="home-search">
            <Card id="card">
              <Card.Body>
                <h2>{t('SEARCH.HEADING')}</h2>
                <div id="search-flex-wrapper">
                  <div id="icon">
                    <span id="arrow-icon" className="material-symbols-outlined">switch_access_shortcut</span>
                  </div>
                  <div id="search-fields">
                    <div>
                      <div className="search-input">
                        <label>
                          <Field id="from" type="from" name="from" className="Input" />
                          <ErrorMessage name="from" component="div" />
                        </label>
                      </div>
                      <div className="search-input">
                        <label>
                          <Field id="to" type="to" name="to" className="Input" />
                          <ErrorMessage name="to" component="div" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="search-submit-button">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {t('SEARCH.SUBMIT')}
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Form>
      )}
    </Formik>
  );
}
