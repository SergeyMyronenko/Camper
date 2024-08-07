import { Field, Form, Formik } from "formik";
import css from "./Sidebar.module.css";
import sprite from "../../images/sprite.svg";

export const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <Formik
        initialValues={{ location: "", vehicleEquip: [0], vehicleType: null }}
      >
        <Form className={css.form}>
          <label htmlFor={"location"} className={css.label}>
            Location
          </label>
          <div className={css.inputWrapper}>
            <Field
              className={css.input}
              placeholder="Kyiv, Ukraine"
              type="text"
              id="location"
              name="location"
              value=""
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-map-pin`}></use>
            </svg>
          </div>

          <label className={css.label}>
            Filter
            <h2>Vehicle equipment</h2>
            <div className={css.box}>
              <div className={css.inputItem}>
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-wind`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="VehicleEquip"
                  value="ac"
                />
                <p>AC</p>
              </div>
              <div className={css.inputItem}>
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-list`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="VehicleEquip"
                  value="automatic"
                />
                <p>Automatic</p>
              </div>
              <div className={css.inputItem}>
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-fork`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="VehicleEquip"
                  value="kitchen"
                />
                <p>Kitchen</p>
              </div>
              <div className={css.inputItem}>
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-tv`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="VehicleEquip"
                  value="tv"
                />
                <p>TV</p>
              </div>
              <div className={css.inputItem}>
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-shower`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="VehicleEquip"
                  value="shower"
                />
                <p>Shower/WC</p>
              </div>
            </div>
            <h2>Vehicle type</h2>
            <div className={css.box}>
              <div className={css.inputItem}>
                <svg className={css.radioSvg}>
                  <use href={`${sprite}icon-camper`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="VehicleType"
                  value="van"
                />
                <p>Van</p>
              </div>

              <div className={css.inputItem}>
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-car1`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="VehicleType"
                  value="integrated"
                />
                <p>Fully Integrated</p>
              </div>

              <div className={css.inputItem}>
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-car2`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="VehicleType"
                  value="alcove"
                />
                <p>Alcove</p>
              </div>
            </div>
          </label>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </aside>
  );
};
