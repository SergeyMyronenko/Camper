import { useSelector } from "react-redux";
import { FormComponent } from "../FormComponent/FormComponent";
import css from "./CamperReviews.module.css";
import { selectCurrentCamp } from "../../redux/camper/selectors";
import sprite from "../../images/sprite.svg";

export const CamperReviews = () => {
  const currentCard = useSelector(selectCurrentCamp);

  const { reviews } = currentCard;

  return (
    <div className={css.main}>
      <div className={css.titleMain}>
        <ul className={css.list}>
          {reviews.map((item, index) => {
            return (
              <li key={index}>
                <div className={css.item}>
                  <p className={css.avatar}>{item.reviewer_name.charAt(0)}</p>
                  <div>
                    <h2>{item.reviewer_name}</h2>
                    <div>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-star`}></use>
                      </svg>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-star`}></use>
                      </svg>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-star`}></use>
                      </svg>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-star`}></use>
                      </svg>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-star`}></use>
                      </svg>
                    </div>
                  </div>
                </div>

                <p>{item.comment}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <FormComponent />
    </div>
  );
};
