import { FormComponent } from "../FormComponent/FormComponent";
import css from "./CamperReviews.module.css";

export const CamperReviews = () => {
  return (
    <div className={css.main}>
      <div>
        <ul>
          <li>
            <p></p>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <p></p>
          </li>
        </ul>
      </div>
      <FormComponent />
    </div>
  );
};
