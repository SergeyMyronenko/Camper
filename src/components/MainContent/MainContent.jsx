import { ContentItem } from "../ContentItem/ContentItem";
import css from "./MainContent.module.css";
import { LoadMore } from "../LoadMore/LoadMore";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MainContent = ({ content }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const firstPage = content.slice(0, page * itemsPerPage);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.twoLink}>
        <span>Find: {content.length} results </span>
        <div>
          <Link className={css.link} to="/favorites">
            Favorites
          </Link>
          <Link className={css.link} to="/">
            Home
          </Link>
        </div>
      </div>
      <ul className={css.list}>
        {firstPage.map((item) => {
          return (
            <li key={item._id}>
              <ContentItem content={item} id={item._id} />
            </li>
          );
        })}
      </ul>
      {firstPage.length < content.length && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </div>
  );
};
