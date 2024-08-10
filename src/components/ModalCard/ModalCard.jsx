/* eslint-disable react/prop-types */
import css from "./ModalCard.module.css";
import sprite from "../../images/sprite.svg";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, Outlet } from "react-router-dom";

export const ModalCard = ({ item, close }) => {
  const [isActive, setIsActive] = useState("features");
  const { name, rating, reviews, description, gallery, location, price } = item;

  const handleActiveLink = (link) => {
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
            <Link
              className={clsx(
                css.link,
                isActive === "features" && css.linkActive
              )}
              onClick={() => handleActiveLink("features")}
              to="features"
            >
              Features
            </Link>
            <Link
              className={clsx(
                css.link,
                isActive === "reviews" && css.linkActive
              )}
              onClick={() => handleActiveLink("reviews")}
              to="reviews"
            >
              Reviews
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
