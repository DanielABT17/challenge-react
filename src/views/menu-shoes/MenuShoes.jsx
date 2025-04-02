import CardShoes from "../../components/card-shoes/CardShoes";
import { useShoesStore } from "../../zustand/shoesStore";
import style from "./MenuShoes.module.css";
await useShoesStore.getState().fetch();

export default function MenuShoes() {
  const products = useShoesStore((state) => state.shoes);

  return (
    <div className={style["menu__shoes"]}>
      {products.map((shoes) => {
        return <CardShoes key={shoes.id} shoes={shoes} />;
      })}
    </div>
  );
}
