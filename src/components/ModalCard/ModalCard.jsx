import css from "./ModalCard.module.css";
import sprite from "../../images/sprite.svg";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const ModalCard = ({ item, close }) => {
  const [isActive, setIsActive] = useState(false);
  const {
    name,
    rating,
    reviews,
    description,
    gallery,
    location,
    details,
    price,
  } = item;
  const carDetails = details;
  const detailsList = Object.entries(carDetails).map(([key, value]) => {
    if (value === 0 || value === "") {
      return;
    }

    return `${key}: ${value}`;
  });

  const handleActivLink = (link) => {
    setIsActive(link);
  };

  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className={css.wrapper}>
      <div className={css.modal}>
        <p className={css.name}>{name}</p>
        <div className={css.box}>
          <svg className={css.star}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <p className={css.textStar}>
            {rating}({reviews.length}Reviews)
          </p>
          <svg className={css.star}>
            <use href={`${sprite}#icon-map-pin`}></use>
          </svg>
          <p className={css.textLoc}>{location}</p>
        </div>
        <svg className={css.close} onClick={close}>
          <use href={`${sprite}#icon-exit`}></use>
        </svg>
        <p className={css.price}>&euro;{price},00</p>
        <div className={css.scroll}>
          <ul className={css.imageList}>
            {gallery.map((card, index) => {
              return (
                <li className={css.galleryItem} key={index}>
                  <img className={css.image} src={card} alt={index} />
                </li>
              );
            })}
          </ul>
          <p className={css.description}>{description}</p>
          <div className={css.linkBox}>
            <a
              className={clsx(
                css.link,
                isActive === "features" && css.linkActive
              )}
              onClick={() => handleActivLink("features")}
              href="#"
            >
              Features
            </a>
            <a
              className={clsx(
                css.link,
                isActive === "reviews" && css.linkActive
              )}
              onClick={() => handleActivLink("reviews")}
              href="#"
            >
              Reviews
            </a>
          </div>
          <div className={css.bottomContainer}>
            <div className={css.containerInfo}>
              <div>
                <ul className={css.detailsList}>
                  {detailsList.map((item, index) => {
                    return (
                      <li className={css.detailsItem} key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h2>Vehicle details</h2>
                <ul className={css.details}>
                  <li className={css.detailsInfo}>
                    <p className={css.text}>Form</p>
                    <p className={css.text}>value</p>
                  </li>
                  <li className={css.detailsInfo}>
                    <p className={css.text}>Length</p>
                    <p className={css.text}>value</p>
                  </li>
                  <li className={css.detailsInfo}>
                    <p className={css.text}>Width</p>
                    <p className={css.text}>value</p>
                  </li>
                  <li className={css.detailsInfo}>
                    <p className={css.text}>Height</p>
                    <p className={css.text}>value</p>
                  </li>
                  <li className={css.detailsInfo}>
                    <p className={css.text}>Tank</p>
                    <p className={css.text}>value</p>
                  </li>
                  <li className={css.detailsInfo}>
                    <p className={css.text}>Consumption</p>
                    <p className={css.text}>value</p>
                  </li>
                </ul>
              </div>
            </div>

            <Formik
              initialValues={{
                name: "",
                email: "",
                bookingDate: "",
                comment: "",
              }}
            >
              <Form className={css.form}>
                <h2>Book your campervan now</h2>
                <p>Stay connected! We are always ready to help you.</p>
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
        </div>
      </div>
    </div>
  );
};
