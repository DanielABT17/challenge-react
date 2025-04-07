import TopBar from "./components/top-bar/TopBar";
import "./styles/defaultStyles.css";
import MenuShoes from "./views/menu-shoes/MenuShoes.jsx";

function App() {
  return (
    <>
      <TopBar />
      <MenuShoes />
      <AddCartButton />
    </>
  );
}

export default App;
