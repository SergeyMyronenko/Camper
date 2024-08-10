/* eslint-disable react/prop-types */
import css from "./ContentItem.module.css";
import sprite from "../../images/sprite.svg";
import { ModalCard } from "../ModalCard/ModalCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { currentCamp } from "../../redux/camper/operations";
import clsx from "clsx";

export const ContentItem = ({ content, id }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const CAMPER_KEY = "camper";

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem(CAMPER_KEY)) || [];
  }, []);

  const {
    gallery,
    name,
    price,
    location,
    description,
    rating,
    adults,
    details,
    reviews,
  } = content;

  const handleOpenModal = () => {
    dispatch(currentCamp(id));
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAddToFavorite = (data) => {
    let storage = JSON.parse(localStorage.getItem(CAMPER_KEY)) || [];

    const findCopy = storage.includes(data._id);

    if (findCopy) {
      return;
    }

    storage.push(data._id);

    localStorage.setItem(CAMPER_KEY, JSON.stringify(storage));

    const isFavorite = storage.some((itemId) => itemId === id);
    setIsSelected(isFavorite);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.imageBox}>
        <img className={css.image} src={gallery[0]} alt="" />
      </div>
      <div className={css.infoBox}>
        <div className={css.boxPrice}>
          <p className={css.name}>{name}</p>
          <div className={css.box}>
            <p className={css.price}>&euro;{price},00</p>
            <svg
              className={clsx(css.icon, isSelected && css.iconActive)}
              onClick={() => {
                handleAddToFavorite(content);
              }}
            >
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
        </div>
        <div className={css.wrapperInfo}>
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
          <p className={css.description}>{description}</p>
          <ul className={css.list}>
            <li className={css.details}>
              <svg className={css.detailsIcon}>
                <use href={`${sprite}#icon-people`}></use>
              </svg>
              <p className={css.textDetails}>{adults} adults</p>
            </li>
            <li className={css.details}>
              <svg className={css.detailsIcon}>
                <use href={`${sprite}#icon-list`}></use>
              </svg>
              <p className={css.textDetails}>Automatic</p>
            </li>
            <li className={css.details}>
              <svg className={css.detailsIcon}>
                <use href={`${sprite}#icon-benzin`}></use>
              </svg>
              <p className={css.textDetails}>Petrol</p>
            </li>
            <li className={css.details}>
              <svg className={css.detailsIcon}>
                <use href={`${sprite}#icon-fork`}></use>
              </svg>
              <p className={css.textDetails}>Kitchen</p>
            </li>
            <li className={css.details}>
              <svg className={css.detailsIcon}>
                <use href={`${sprite}#icon-bed`}></use>
              </svg>
              <p className={css.textDetails}>{details.beds} beds</p>
            </li>
            <li className={css.details}>
              <svg className={css.detailsIcon}>
                <use href={`${sprite}#icon-wind`}></use>
              </svg>
              <p className={css.textDetails}>AC</p>
            </li>
          </ul>
          <button className={css.show} onClick={handleOpenModal}>
            Show more
          </button>
        </div>
      </div>
      {isOpen && <ModalCard item={content} close={handleCloseModal} />}
    </div>
  );
};
