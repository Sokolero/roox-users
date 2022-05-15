import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import Button from '../Button';
import { useAppSelector } from '../../hooks';
import styles from './Profile.module.scss';
import {
  required, isEmail, lessThan, composeValidators,
} from './validators';

interface ISubmitValues {
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  comment: string;
}

export default function Profile() {
  const params = useParams();
  const userId = parseInt(params.userId);
  const user = useAppSelector((state) => state.users.users.filter((user) => user.id === userId)[0]);

  const [readOnly, toggleReadOnly] = React.useState(true);

  const onSubmit = (values: ISubmitValues):void => {
    console.log(JSON.stringify(values));
    toggleReadOnly(!readOnly);
  };

  const handleClick = (form) => () => {
    if (!readOnly) {
      form.restart();
    }
    toggleReadOnly(!readOnly);
  };

  const getFieldStyle = (error) => {
    if (error) {
      return styles.field_error;
    }
    return readOnly ? styles.field_readonly : styles.field;
  };

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.profile}>

      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit, errors, form, values,
        }) => (
          <>
            <div className={styles.header}>
              <Button type="button" onClick={handleClick(form)} styled="button">
                { readOnly ? 'Редактировать' : 'Сбросить изменения' }
              </Button>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label} htmlFor="name">
                <div className={styles.label_text}>Name</div>
                <Field
                  validate={required}
                  readOnly={readOnly}
                  initialValue={user.name}
                  component="input"
                  name="name"
                  className={getFieldStyle(errors.name)}
                />
              </label>
              <label className={styles.label} htmlFor="username">
                <div className={styles.label_text}>User name</div>
                <Field
                  validate={required}
                  readOnly={readOnly}
                  initialValue={user.username}
                  component="input"
                  name="username"
                  className={getFieldStyle(errors.username)}
                />
              </label>
              <label className={styles.label} htmlFor="email">
                <div className={styles.label_text}>E-mail</div>
                <Field
                  validate={composeValidators(required, isEmail)}
                  readOnly={readOnly}
                  initialValue={user.email}
                  component="input"
                  name="email"
                  className={getFieldStyle(errors.email)}
                />
              </label>
              <label className={styles.label} htmlFor="street">
                <div className={styles.label_text}>Street</div>
                <Field
                  validate={required}
                  readOnly={readOnly}
                  initialValue={user.address.street}
                  component="input"
                  name="street"
                  className={getFieldStyle(errors.street)}
                />
              </label>
              <label className={styles.label} htmlFor="city">
                <div className={styles.label_text}>City</div>
                <Field
                  validate={required}
                  readOnly={readOnly}
                  initialValue={user.address.city}
                  component="input"
                  name="city"
                  className={getFieldStyle(errors.city)}
                />
              </label>
              <label className={styles.label} htmlFor="zipCode">
                <div className={styles.label_text}>Zip code</div>
                <Field
                  validate={required}
                  readOnly={readOnly}
                  initialValue={user.address.zipcode}
                  component="input"
                  name="zipCode"
                  className={getFieldStyle(errors.zipCode)}
                />
              </label>
              <label className={styles.label} htmlFor="phone">
                <div className={styles.label_text}>Phone</div>
                <Field
                  validate={required}
                  readOnly={readOnly}
                  initialValue={user.phone}
                  component="input"
                  name="phone"
                  className={getFieldStyle(errors.phone)}
                />
              </label>
              <label className={styles.label} htmlFor="website">
                <div className={styles.label_text}>Website</div>
                <Field
                  validate={required}
                  readOnly={readOnly}
                  initialValue={user.website}
                  component="input"
                  name="website"
                  className={getFieldStyle(errors.website)}
                />
              </label>
              <label className={styles.label} htmlFor="comment">
                <div className={styles.label_text}>Comment</div>
                <Field
                  validate={lessThan(10)}
                  readOnly={readOnly}
                  component="textarea"
                  name="comment"
                  className={`${getFieldStyle(errors.comment)} ${styles.field_textarea}`}
                />
              </label>
              <div className={styles.form_buttons}>
                <Button type="submit" styled={readOnly ? 'button_disabled' : 'button_enabled'}>
                  Отправить
                </Button>
              </div>
            </form>
          </>
        )}
      />
    </div>
  );
}
