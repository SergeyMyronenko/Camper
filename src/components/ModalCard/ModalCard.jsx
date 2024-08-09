import css from "./ModalCard.module.css";
import sprite from "../../images/sprite.svg";
import { Field, Form, Formik } from "formik";

export const ModalCard = ({ item }) => {
  const { name, rating, reviews, description, gallery, location } = item;

  return (
    <div className={css.wrapper}>
      <div className={css.modal}>
        <p className={css.name}>{name}</p>
        <div className={css.box}>
          <svg className={css.star}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <p className={css.text}>
            {rating}({reviews.length}Reviews)
          </p>
          <svg className={css.star}>
            <use href={`${sprite}#icon-map-pin`}></use>
          </svg>
          <p className={css.textLoc}>{location}</p>
        </div>
        <button>X</button>
        <ul className={css.imageList}>
          {gallery.map((card, index) => {
            return (
              <li key={index}>
                <img className={css.image} src={card} alt={index} />
              </li>
            );
          })}
        </ul>
        <p className={css.description}>{description}</p>
        <a href="#">Features</a>
        <a href="#">Reviews</a>
        <div>
          <ul></ul>
        </div>
        <div>
          <h2>Vehicle details</h2>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <p>Form</p>
              <p>value</p>
            </li>
            <li className={css.detailsItem}>
              <p>Length</p>
              <p>value</p>
            </li>
            <li className={css.detailsItem}>
              <p>Width</p>
              <p>value</p>
            </li>
            <li className={css.detailsItem}>
              <p>Height</p>
              <p>value</p>
            </li>
            <li className={css.detailsItem}>
              <p>Tank</p>
              <p>value</p>
            </li>
            <li className={css.detailsItem}>
              <p>Consumption</p>
              <p>value</p>
            </li>
          </ul>
        </div>
        <Formik>
          <Form>
            <Field></Field>
            <Field></Field>
            <Field></Field>
            <Field></Field>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
