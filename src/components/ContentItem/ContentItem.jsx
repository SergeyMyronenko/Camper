import css from "./ContentItem.module.css";
import sprite from "../../images/sprite.svg";
import { Details } from "../Details/Details";

export const ContentItem = ({ content }) => {
  const {
    gallery,
    name,
    price,
    location,
    description,
    rating,
    adults,
    transmission,
    engine,
    details,
  } = content;

  return (
    <div className={css.wrapper}>
      <div className={css.image}>
        <img src={gallery[0]} alt="" />
      </div>
      <div className={css.infoBox}>
        <div className={css.boxPrice}>
          <p className={css.name}>{name}</p>
          <div className={css.box}>
            <p className={css.price}>&euro;{price},00</p>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
        </div>
        <div className={css.wrapperInfo}>
          <div className={css.box}>
            <svg className={css.star}>
              <use href={`${sprite}#icon-star`}></use>
            </svg>
            <p className={css.text}>{rating}(2Reviews)</p>
            <svg className={css.star}>
              <use href={`${sprite}#icon-map-pin`}></use>
            </svg>
            <p className={css.text}>{location}</p>
          </div>
          <p className={css.description}>{description}</p>
          <ul className={css.list}>
            <li className={css.details}>
              <svg className={css.detailsIcon}>
                <use href={`${sprite}#icon-people`}></use>
              </svg>
              <p className={css.textDetails}>{details.adults}adults</p>
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
              <p className={css.textDetails}>{details.beds}beds</p>
            </li>
            <li className={css.details}>
              <svg className={css.detailsIcon}>
                <use href={`${sprite}#icon-wind`}></use>
              </svg>
              <p className={css.textDetails}>AC</p>
            </li>
          </ul>
          <button className={css.show}>Show more</button>
        </div>
      </div>
    </div>
  );
};
