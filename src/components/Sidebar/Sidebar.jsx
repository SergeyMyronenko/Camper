import { Field, Form, Formik } from "formik";
import css from "./Sidebar.module.css";
import sprite from "../../images/sprite.svg";
import { useState } from "react";
import { selectAllCamper } from "../../redux/camper/selectors";
import { useSelector } from "react-redux";
import clsx from "clsx";

export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("ac");
  const [selectedType, setSelectedType] = useState(null);

  const allCamper = useSelector(selectAllCamper);

  const onSubmit = (values) => {
    const { location } = values;
    console.log("Location:", location);
    console.log("Selected Item:", selectedItem);
    console.log("Selected Type:", selectedType);

    const filteredCamper = allCamper.filter((camper) => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(location.toLowerCase());
      const vehicleEquip = Object.keys(camper.details).includes(selectedItem);
      const vehicleType = camper.form === selectedType;

      return matchesLocation && vehicleEquip && vehicleType;
    });

    return filteredCamper;
  };

  return (
    <aside className={css.sidebar}>
      <Formik
        initialValues={{ location: "", vehicleItem: "ac", vehicleType: null }}
        onSubmit={onSubmit}
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
                className={clsx(
                  css.inputItem,
                  selectedItem === "ac" && css.inputItemActive
                )}
              >
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-wind`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="vehicleItem"
                  value="ac"
                  onChange={() => setSelectedItem("ac")}
                  checked={selectedItem === "ac"}
                />
                <p className={css.text}>AC</p>
              </label>
              <label
                className={clsx(
                  css.inputItem,
                  selectedItem === "automatic" && css.inputItemActive
                )}
              >
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-list`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="vehicleItem"
                  value="automatic"
                  onChange={() => setSelectedItem("automatic")}
                  checked={selectedItem === "automatic"}
                />
                <p className={css.text}>Automatic</p>
              </label>
              <label
                className={clsx(
                  css.inputItem,
                  selectedItem === "kitchen" && css.inputItemActive
                )}
              >
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-fork`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="vehicleItem"
                  value="kitchen"
                  onChange={() => setSelectedItem("kitchen")}
                  checked={selectedItem === "kitchen"}
                />
                <p className={css.text}>Kitchen</p>
              </label>
              <label
                className={clsx(
                  css.inputItem,
                  selectedItem === "tv" && css.inputItemActive
                )}
              >
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-tv`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="vehicleItem"
                  value="tv"
                  onChange={() => setSelectedItem("tv")}
                  checked={selectedItem === "tv"}
                />
                <p className={css.text}>TV</p>
              </label>
              <label
                className={clsx(
                  css.inputItem,
                  selectedItem === "shower" && css.inputItemActive
                )}
              >
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-shower`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="vehicleItem"
                  value="shower"
                  onChange={() => setSelectedItem("shower")}
                  checked={selectedItem === "shower"}
                />
                <p className={css.text}>Shower/WC</p>
              </label>
            </div>
            <h2 className={css.title}>Vehicle type</h2>
            <div className={css.boxType}>
              <label
                className={clsx(
                  css.inputItem,
                  selectedType === "van" && css.inputItemActive
                )}
              >
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-camper`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="vehicleType"
                  value="van"
                  onChange={() => {
                    setSelectedType("van");
                  }}
                  checked={selectedType === "van"}
                />
                <p className={css.text}>Van</p>
              </label>

              <label
                className={clsx(
                  css.inputItem,
                  selectedType === "integrated" && css.inputItemActive
                )}
              >
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-car1`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="vehicleType"
                  value="integrated"
                  onChange={() => {
                    setSelectedType("integrated");
                  }}
                  checked={selectedType === "integrated"}
                />
                <p className={css.text}>Fully Integrated</p>
              </label>

              <label
                className={clsx(
                  css.inputItem,
                  selectedType === "alcove" && css.inputItemActive
                )}
              >
                <svg className={css.radioSvg}>
                  <use href={`${sprite}#icon-car2`}></use>
                </svg>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="vehicleType"
                  value="alcove"
                  onChange={() => {
                    setSelectedType("alcove");
                  }}
                  checked={selectedType === "alcove"}
                />
                <p className={css.text}>Alcove</p>
              </label>
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
