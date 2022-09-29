import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Input from '../_common/input';
import styles from './index.module.scss';
import ChildComponent from '../childComponent';

const schema = yup.object().shape({
  firstName: yup.string().trim().nullable(true).required('Field value is mandatory'),
  lastName: yup.string().trim().nullable(true).required('Field value is mandatory'),
  email: yup.string().trim().nullable(true).required('Field value is mandatory').email('Field value must me a valid email'),
  password: yup.string().trim().nullable(true).required('Field value is mandatory'),
})

const Form = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log('values', values);
      setIsSubmited(true);
    }
  })

  const onCheck = (value) => {
    setIsDisabled(!value);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>Sign up</div>
        <form className={styles.form}>
          <Input
            label="First name"
            placeholder="Enter first name"
            required
            {...formik.getFieldProps('firstName')}
            error={formik.touched?.firstName && formik.errors?.firstName}
          />
          <Input
            label="Last name"
            placeholder="Enter last name"
            required
            {...formik.getFieldProps('lastName')}
            error={formik.touched?.lastName && formik.errors?.lastName}
          />
          <Input
            label="Email"
            placeholder="Enter email"
            required
            {...formik.getFieldProps('email')}
            error={formik.touched?.email && formik.errors?.email}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter password"
            required
            {...formik.getFieldProps('password')}
            error={formik.touched?.password && formik.errors?.password}
          />
          <ChildComponent onCheck={onCheck} />
        </form>
        <button disabled={isDisabled} type="button" onClick={() => formik.submitForm()} className="button primary">
          Submit
        </button>
      </div>
      {isSubmited
        ? (
          <div className={styles.yay}>
            Yay, you submitted the form..!!
          </div>
        ) : null}
    </>
  );
};

export default Form;
