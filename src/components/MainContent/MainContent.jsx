import { useSelector } from "react-redux";
import { ContentItem } from "../ContentItem/ContentItem";
import { selectAllCamper } from "../../redux/camper/selectors";
import css from "./MainContent.module.css";

export const MainContent = () => {
  const allCamper = useSelector(selectAllCamper);
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {allCamper.map((item) => {
          return (
            <li key={item._id}>
              <ContentItem content={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
