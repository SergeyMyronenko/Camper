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
            <h2 className={css.title}>Vehicle equipment</h2>
            <div className={css.boxEquip}>
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
                <p className={css.text}>AC</p>
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
                <p className={css.text}>Automatic</p>
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
                <p className={css.text}>Kitchen</p>
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
                <p className={css.text}>TV</p>
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
                <p className={css.text}>Shower/WC</p>
              </div>
            </div>
            <h2 className={css.title}>Vehicle type</h2>
            <div className={css.boxType}>
              <div className={css.inputItem}>
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-camper`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="VehicleType"
                  value="van"
                />
                <p className={css.text}>Van</p>
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
                <p className={css.text}>Fully Integrated</p>
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
                <p className={css.text}>Alcove</p>
              </div>
            </div>
          </label>
          <button className={css.submit} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </aside>
  );
};
