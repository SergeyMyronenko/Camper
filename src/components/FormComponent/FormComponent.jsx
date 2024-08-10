import sprite from "../../images/sprite.svg";
import { Field, Form, Formik } from "formik";
import css from "./FormComponent.module.css";

export const FormComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: "",
          comment: "",
        }}
      >
        <Form className={css.form}>
          <h2 className={css.title}>Book your campervan now</h2>
          <p className={css.text}>
            Stay connected! We are always ready to help you.
          </p>
          <div className={css.inputBox}>
            <Field
              className={css.input}
              name="name"
              placeholder="Name"
              type="text"
            />
            <Field
              className={css.input}
              name="email"
              placeholder="Email"
              type="text"
            />
            <div className={css.iconBox}>
              <Field
                className={css.input}
                name="bookingDate"
                placeholder="Booking date"
                type="text"
              />
              <svg className={css.icon}>
                <use href={`${sprite}#icon-calendar`}></use>
              </svg>
            </div>

            <Field
              className={css.inputComment}
              name="comment"
              placeholder="Comment"
              type="text"
            />
          </div>

          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
