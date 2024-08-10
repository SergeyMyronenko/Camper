import css from "./CamperFeatures.module.css";
import { useSelector } from "react-redux";
import { selectCurrentCamp } from "../../redux/camper/selectors";
import { FormComponent } from "../FormComponent/FormComponent";

export const CamperFeatures = () => {
  const currentCard = useSelector(selectCurrentCamp);

  const { details, form, length, width, height, tank, consumption } =
    currentCard;

  const cardDetails = details;
  const detailsList = Object.entries(cardDetails)
    .filter(([key, value]) => value !== 0 && value !== "")
    .map(([key, value]) => `${key}: ${value}`);

  return (
    <div className={css.bottomContainer}>
      <div className={css.containerInfo}>
        <div className={css.detailsBox}>
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
          <h2 className={css.titleVehicle}>Vehicle details</h2>
          <ul className={css.details}>
            <li className={css.detailsInfo}>
              <p className={css.text}>Form</p>
              <p className={css.text}>{form}</p>
            </li>
            <li className={css.detailsInfo}>
              <p className={css.text}>Length</p>
              <p className={css.text}>{length}</p>
            </li>
            <li className={css.detailsInfo}>
              <p className={css.text}>Width</p>
              <p className={css.text}>{width}</p>
            </li>
            <li className={css.detailsInfo}>
              <p className={css.text}>Height</p>
              <p className={css.text}>{height}</p>
            </li>
            <li className={css.detailsInfo}>
              <p className={css.text}>Tank</p>
              <p className={css.text}>{tank}</p>
            </li>
            <li className={css.detailsInfo}>
              <p className={css.text}>Consumption</p>
              <p className={css.text}>{consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <FormComponent />
    </div>
  );
};
