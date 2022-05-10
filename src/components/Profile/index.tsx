import * as React from "react";
import { Form, Field } from "react-final-form";
import Button from "../Button";
import styles from "./Profile.module.scss";

const initialValues = {
  name: "Ivan Ivanov",
  username: "Ivan",
  email: "email@mail.ru",
  street: "Lukiva",
  city: "Moskow",
  zipCode: "123455",
  phone: "88991112233",
  website: "www.example.com",
  comment: ""
}

const onSubmit = (values) => {
  console.log(values);
}

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <h2>Профиль пользователя</h2>
        <Button styled="button">Редактировать</Button>
      </div>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={ ({ handleSubmit, errors }) => (
          <form className={styles.form}>
            <label className={styles.label} htmlFor="name">
              <div className={styles.label_text}>Name</div>
              <Field
                component="input"
                name="name"
                className={styles.field}
              />
            </label>
            <label className={styles.label} htmlFor="username">
              <div className={styles.label_text}>User name</div>
              <Field
                component="input"
                name="username"
                className={styles.field}
              />
            </label>
            <label className={styles.label} htmlFor="email">
              <div className={styles.label_text}>E-mail</div>
              <Field
                component="input"
                name="email"
                className={styles.field}
              />
            </label>
            <label className={styles.label} htmlFor="street">
              <div className={styles.label_text}>Street</div>
              <Field
                component="input"
                name="street"
                className={styles.field}
              />
            </label>
            <label className={styles.label} htmlFor="city">
              <div className={styles.label_text}>City</div>
              <Field
                component="input"
                name="city"
                className={styles.field}
              />
            </label>
            <label className={styles.label} htmlFor="zipCode">
              <div className={styles.label_text}>Zip code</div>
              <Field
                component="input"
                name="zipCode"
                className={styles.field}
              />
            </label>
            <label className={styles.label} htmlFor="phone">
              <div className={styles.label_text}>Phone</div>
              <Field
                component="input"
                name="phone"
                className={styles.field}
              />
            </label>
            <label className={styles.label} htmlFor="website">
              <div className={styles.label_text}>Website</div>
              <Field
                component="input"
                name="website"
                className={styles.field_error}
              />
            </label>
            <label className={styles.label} htmlFor="comment">
              <div className={styles.label_text}>Comment</div>
              <Field
                component="textarea"
                name="comment"
                className={styles.field_textarea}
              />
            </label>
          </form>
        ) }
      />
      <Button styled="button_enabled">Отправить</Button>
    </div>
  )
}
