import React from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import './login.page.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import ToastService from '../../services/toast.service';
import AuthService from '../../services/auth.service';

export default function LoginPage() {
  const { t } = useTranslation();
  const loginSchema = Yup.object().shape({
    password: Yup.string().min(3, t('UTILS.VALIDATOR_ERROR.TO_SHORT')).max(50, t('UTILS.VALIDATOR_ERROR.TO_LONG')).required(t('UTILS.VALIDATOR_ERROR.REQUIRED')),
    email: Yup.string().min(3, t('UTILS.VALIDATOR_ERROR.TO_SHORT')).max(50, t('UTILS.VALIDATOR_ERROR.TO_LONG')).required(t('UTILS.VALIDATOR_ERROR.REQUIRED')),
  });
  const authService = new AuthService();
  const toastService = new ToastService();
  const navigate = useNavigate();
  let token;
  const handleSubmit = (values, { setSubmitting }) => {
    authService.getUser(values.email, values.password).then((res) => {
      token = res;
      if (token === 'Error') {
        toastService.emit(t('LOGIN.INVALID_CREDENTIALS'), 'error');
      }
      if (token !== 'Error') {
        authService.saveAccessToken(token);
        authService.saveAuthState(true);
        navigate('/');
      }
    });
    setSubmitting(false);
  };

  return (
    <>
      <h1 id="login-heading">{t('LOGIN.HEADING')}</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Card className="login-form">
            <Card.Body>
              <Form>
                <div>
                  <div className="form-group">
                    <label className="login-label">{t('LOGIN.EMAIL')}</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="form-group">
                    <label className="login-label">{t('LOGIN.PASSWORD')}</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {t('LOGIN.SUBMIT')}
                  </button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        )}
      </Formik>
    </>
  );
}
