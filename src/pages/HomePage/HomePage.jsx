import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.main}>
      <div className={css.box}>
        <h1 className={css.title}>Here you can rent a car for camping </h1>
        <p className={css.text}>
          If you want to view the options of all campers, please go to the{" "}
          <Link className={css.titleLink} to="/catalog">
            catalog
          </Link>
        </p>
      </div>

      <ul className={css.linkList}>
        <li>
          <Link className={css.link} to="/catalog">
            Catalog
          </Link>
        </li>
        <li>
          <Link className={css.link} to="/favorites">
            Favorites
          </Link>
        </li>
      </ul>
    </div>
  );
};
