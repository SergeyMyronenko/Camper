import { useSelector } from "react-redux";
import { ContentItem } from "../ContentItem/ContentItem";
import { selectAllCamper } from "../../redux/camper/selectors";
import css from "./MainContent.module.css";
import { LoadMore } from "../LoadMore/LoadMore";
import { useState } from "react";

export const MainContent = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const allCamper = useSelector(selectAllCamper);

  const firstPage = allCamper.slice(0, page * itemsPerPage);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {firstPage.map((item) => {
          return (
            <li key={item._id}>
              <ContentItem content={item} />
            </li>
          );
        })}
      </ul>
      {firstPage.length < allCamper.length && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </div>
  );
};
