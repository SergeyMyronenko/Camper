import css from "./ContentItem.module.css";

export const ContentItem = () => {
  return (
    <div>
      <img src="" alt="" />
      <div className={css.box}>
        <p>Mavericks</p>
        <p>8000,00</p>
        <svg>
          <use></use>
        </svg>
      </div>
      <div className={css.box}>
        <svg>
          <use></use>
        </svg>
        <p>4.4(2Reviews)</p>
        <svg>
          <use></use>
        </svg>
        <p>Kyiv, Ukraine</p>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
        in.
      </p>
      <ul className={css.list}>
        <li>Empty</li>
        <li>Empty</li>
        <li>Empty</li>
        <li>Empty</li>
      </ul>
      <button className={css.show}>Show more</button>
    </div>
  );
};
