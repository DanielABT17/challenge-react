import CardShoes from "../../components/card-shoes/CardShoes";
import { useShoesStore } from "../../zustand/shoesStore";
import { useNavigate } from "react-router-dom";
import styles from "./MenuShoes.module.css";
await useShoesStore.getState().fetch();

export default function MenuShoes() {
  const products = useShoesStore((state) => state.shoes);
  const navigate = useNavigate();

  function handleClick(id) {
    navigate("product/" + id);
  }
  return (
    <div className={styles["menu__shoes"]}>
      {products.map((shoes) => {
        return (
          <CardShoes
            key={shoes.id}
            shoes={shoes}
            onClick={() => handleClick(shoes.id)}
          />
        );
      })}
    </div>
  );
}
