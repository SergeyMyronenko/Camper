import { Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage/MainPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { FavoritePage } from "./pages/FavoritePage/FavoritePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<MainPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
    </Routes>
  );
}

export default App;
