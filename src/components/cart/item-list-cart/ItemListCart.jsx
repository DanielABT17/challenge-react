import { useShoesStore } from "../../../zustand/shoesStore";
import styles from "./ItemListCart.module.css";
import iconDelete from "../../../assets/images/icon-delete.svg";
await useShoesStore.getState().fetch();

export default function ItemListCart({ idShoes, quantity }) {
  const shoes = useShoesStore((state) => state.shoes);
  const shoesSelected = shoes.find((shoe) => shoe.id === idShoes);
  const priceEnd =
    shoesSelected.Precio -
    shoesSelected.Precio * (shoesSelected.Descuento / 100);
  const totalprice = priceEnd * quantity;
  const removeCart = useShoesStore.getState().removeCart;
  return (
    <div className={styles["item__cart"]} id={idShoes}>
      <div className={styles["item__cart--div"]}>
        <img
          className={styles["cart__div--img"]}
          src={shoesSelected.Imagenes[0]}
          alt=""
        />
      </div>

      <div className={styles["item__cart--infoshoes"]}>
        <p className={styles["item__cart--title"]}>{shoesSelected.Nombre}</p>
        <div className={styles["item__cart--infoprice"]}>
          <p className={styles["cart__infoprice--uniteprice"]}>
            ${priceEnd.toFixed(2)}
          </p>
          <p className={styles["cart__infoprice--quantity"]}> x {quantity} </p>
          <p className={styles["cart__infoprice--totalprice"]}>
            ${totalprice.toFixed(2)}
          </p>
        </div>
      </div>

      <button
        className={styles["item__cart--delete"]}
        onClick={() => removeCart(idShoes)}
      >
        <img src={iconDelete} alt="" />
      </button>
    </div>
  );
}
