import { MainContent } from "../../components/MainContent/MainContent";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import css from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={css.main}>
      <Sidebar />
      <MainContent />
    </div>
  );
};
