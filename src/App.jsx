import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/top-bar/TopBar";
import "./styles/defaultStyles.css";
import MenuShoes from "./views/menu-shoes/MenuShoes.jsx";
import ProductDetail from "./views/ProductDetail/ProductDetail.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<MenuShoes />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
