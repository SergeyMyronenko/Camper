import { Field, Form, Formik } from "formik";
import css from "./Sidebar.module.css";
import sprite from "../../images/sprite.svg";

export const Sidebar = ({ filter }) => {
  const onSubmit = (values) => {
    console.log(values);

    filter({
      location: values.location,
      selectedItem: values.vehicleItem,
      selectedType: values.vehicleType,
    });
  };

  return (
    <aside className={css.sidebar}>
      <Formik
        initialValues={{ location: "", vehicleItem: "", vehicleType: "" }}
        onSubmit={onSubmit}
      >
        {({ values, resetForm }) => (
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
              />
              <svg className={css.icon}>
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
            </div>

            <label className={css.label}>
              Filter
              <h2 className={css.title}>Vehicle equipment</h2>
              <div className={css.boxEquip}>
                <label
                  className={
                    values.selectedItem === "airConditioner"
                      ? css.inputItemActive
                      : css.inputItem
                  }
                >
                  <svg className={css.radioSvg}>
                    <use href={`${sprite}#icon-wind`}></use>
                  </svg>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="vehicleItem"
                    value="airConditioner"
                  />
                  <p className={css.text}>AC</p>
                </label>
                <label
                  className={
                    values.selectedItem === "automatic"
                      ? css.inputItemActive
                      : css.inputItem
                  }
                >
                  <svg className={css.radioSvg}>
                    <use href={`${sprite}#icon-list`}></use>
                  </svg>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="vehicleItem"
                    value="automatic"
                  />
                  <p className={css.text}>Automatic</p>
                </label>
                <label
                  className={
                    values.selectedItem === "kitchen"
                      ? css.inputItemActive
                      : css.inputItem
                  }
                >
                  <svg className={css.radioSvg}>
                    <use href={`${sprite}#icon-fork`}></use>
                  </svg>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="vehicleItem"
                    value="kitchen"
                  />
                  <p className={css.text}>Kitchen</p>
                </label>
                <label
                  className={
                    values.selectedItem === "tv"
                      ? css.inputItemActive
                      : css.inputItem
                  }
                >
                  <svg className={css.radioSvg}>
                    <use href={`${sprite}#icon-tv`}></use>
                  </svg>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="vehicleItem"
                    value="tv"
                  />
                  <p className={css.text}>TV</p>
                </label>
                <label
                  className={
                    values.selectedItem === "shower"
                      ? css.inputItemActive
                      : css.inputItem
                  }
                >
                  <svg className={css.radioSvg}>
                    <use href={`${sprite}#icon-shower`}></use>
                  </svg>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="vehicleItem"
                    value="shower"
                  />
                  <p className={css.text}>Shower/WC</p>
                </label>
              </div>
              <h2 className={css.title}>Vehicle type</h2>
              <div className={css.boxType}>
                <label
                  className={
                    values.selectedType === "van"
                      ? css.inputItemActive
                      : css.inputItem
                  }
                >
                  <svg className={css.radioSvg}>
                    <use href={`${sprite}#icon-camper`}></use>
                  </svg>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="vehicleType"
                    value="panelTruck"
                  />
                  <p className={css.text}>Van</p>
                </label>

                <label
                  className={
                    values.selectedType === "integrated"
                      ? css.inputItemActive
                      : css.inputItem
                  }
                >
                  <svg className={css.radioSvg}>
                    <use href={`${sprite}#icon-car1`}></use>
                  </svg>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="vehicleType"
                    value="fullyIntegrated"
                  />
                  <p className={css.text}>Fully Integrated</p>
                </label>

                <label
                  className={
                    values.selectedType === "alcove"
                      ? css.inputItemActive
                      : css.inputItem
                  }
                >
                  <svg className={css.radioSvg}>
                    <use href={`${sprite}#icon-car2`}></use>
                  </svg>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="vehicleType"
                    value="alcove"
                  />
                  <p className={css.text}>Alcove</p>
                </label>
              </div>
            </label>
            <button className={css.submit} type="submit">
              Search
            </button>
            <button
              className={css.reset}
              type="button"
              onClick={() => {
                resetForm();
                filter({ location: "", selectedItem: "", selectedType: "" });
              }}
            >
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </aside>
  );
};
