import { useDispatch } from "react-redux";
import { MainContent } from "../../components/MainContent/MainContent";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import css from "./MainPage.module.css";
import { useEffect } from "react";
import { getAllCamp } from "../../redux/camper/operations";

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCamp());
  }, [dispatch]);

  return (
    <div className={css.main}>
      <Sidebar />
      <MainContent />
    </div>
  );
};
