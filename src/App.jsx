import TopBar from "./components/top-bar/TopBar";
import "./styles/defaultStyles.css";
import MenuShoes from "./views/menu-shoes/MenuShoes.jsx";
import ProductDetail from "./views/ProductDetail/ProductDetail.jsx";

function App() {
  return (
    <>
      <TopBar />
      <MenuShoes />
    </>
  );
}

export default App;
