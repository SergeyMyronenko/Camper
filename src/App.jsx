import { Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage/MainPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { FavoritePage } from "./pages/FavoritePage/FavoritePage";
import { CamperFeatures } from "./components/CamperFeatures/CamperFeatures";
import { CamperReviews } from "./components/CamperReviews/CamperReviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<MainPage />}></Route>
      <Route path="/catalog/:cardId" element={<MainPage />}>
        <Route path="features" element={<CamperFeatures />} />
        <Route path="reviews" element={<CamperReviews />} />
      </Route>
      <Route path="/favorites" element={<FavoritePage />} />
    </Routes>
  );
}

export default App;
