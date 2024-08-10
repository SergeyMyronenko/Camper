import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div>
      <ul>
        <li className={css.link}>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li className={css.link}>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  );
};
