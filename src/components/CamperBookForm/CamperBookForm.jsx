import { useId } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import css from './CamperBookForm.module.css';
import BaseButton from '../BaseButton/BaseButton';
import BaseFormikInput from '../BaseFromikInput/BaseFormikInput';
import BaseInputDate from '../BaseInputDate/BaseInputDate';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(1, 'Too short!')
    .max(50, 'Too long!'),
  email: Yup.string().required('Required').email('Email is not valid.'),
  date: Yup.date()
    .required('Required')
    .test(
      'is-future-date',
      'Date must be in future',
      value => value && new Date(value) > new Date()
    ),
  comment: Yup.string(),
});

export default function CamperBookForm({ camper }) {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const commentFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success(`${camper.name} booked!`);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <div>
        <h3 className={css.header}>Book your campervan now</h3>
        <p className={css.note}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          date: '',
          comment: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.inputGroup}>
            <BaseFormikInput
              type="text"
              name="name"
              className={css.field}
              id={nameFieldId}
              placeholder={'Name*'}
            />
            <ErrorMessage
              className={css.fieldError}
              name="name"
              component="span"
            />
          </div>
          <div className={css.inputGroup}>
            <BaseFormikInput
              type="text"
              name="email"
              className={css.field}
              id={emailFieldId}
              placeholder={'Email*'}
            />
            <ErrorMessage
              className={css.fieldError}
              name="email"
              component="span"
            />
          </div>
          <div className={css.inputGroup}>
            <BaseInputDate
              className={css.field}
              name="date"
              minDate={new Date()}
              placeholderText={'Booking date*'}
              id={dateFieldId}
            />
            <ErrorMessage
              className={css.fieldError}
              name="date"
              component="span"
            />
          </div>
          <div className={css.inputGroup}>
            <BaseFormikInput
              component="textarea"
              rows="3"
              type="text"
              name="comment"
              className={css.field}
              id={commentFieldId}
              placeholder={'Comment'}
              as="textarea"
            />
            <ErrorMessage
              className={css.fieldError}
              name="comment"
              component="span"
            />
          </div>
          <BaseButton className={css.submit} primary type="submit">
            Send
          </BaseButton>
        </Form>
      </Formik>
    </div>
  );
}
