import css from "./LoadMore.module.css";

export const LoadMore = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      Load more
    </button>
  );
};
