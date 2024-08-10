import { useEffect, useState } from "react";
import css from "./FavoritePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCamper } from "../../redux/camper/selectors";
import { getAllCamp } from "../../redux/camper/operations";
import { ContentItem } from "../../components/ContentItem/ContentItem";

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    dispatch(getAllCamp());
  }, [dispatch]);

  const allCamper = useSelector(selectAllCamper);

  const CAMPER_KEY = "camper";

  const updateFavorites = () => {
    const myFavorites = JSON.parse(localStorage.getItem(CAMPER_KEY)) || [];
    setStorage(myFavorites);
  };

  useEffect(() => {
    updateFavorites();
  }, []);

  const selectedCamper = allCamper.filter((item) => storage.includes(item._id));

  return (
    <div className={css.wrapper}>
      <h2>Favorites</h2>
      <div className={css.main}>
        <ul className={css.list}>
          {selectedCamper.length > 0 ? (
            selectedCamper.map((item) => (
              <li key={item._id}>
                <ContentItem content={item} id={item._id} />
              </li>
            ))
          ) : (
            <p>Favorites not yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};
