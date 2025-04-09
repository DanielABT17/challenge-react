import { useState } from "react";
import minusIcon from "../../assets/images/icon-minus.svg";
import plusIcon from "../../assets/images/icon-plus.svg";
import styles from "./AddQuantity.module.css";
import { useShoesStore } from "../../zustand/shoesStore";

const AddQuantity = ({ productInformation }) => {
  const cartList = useShoesStore((state) => state.cartList);
  const AddQuantity = useShoesStore((state) => state.updateCartIncreace);
  const decQuantity = useShoesStore((state) => state.updateCartDecreace);
  const item = cartList.find((item) => item.id === productInformation.id);
  const [quantity, setQuantity] = useState(item?.quantity || 1);
  const addTotalQuantity = useShoesStore((state) => state.AddQuantity);
  function plusClick() {
    setQuantity(quantity + 1);
    addTotalQuantity(quantity + 1);
    AddQuantity(item.id);
  }

  //

  // function handleClick() {
  //   // Usamos una función para acceder al valor más reciente de `quantity`
  //   setQuantity((prevQuantity) => {
  //     const newQuantity = prevQuantity + 1;
  //     addTotalQuantity(newQuantity); // Actualizamos la cantidad total aquí
  //     AddQuantity(productInformation.id, newQuantity); // Usamos la nueva cantidad
  //     return newQuantity; // Actualizamos el estado con la nueva cantidad
  //   });
  // }

  return (
    <div className={styles["div__counter"]}>
      <button
        className={`${styles["div__counter--plusButton"]} ${
          quantity >= productInformation.stock && styles["disabled"]
        }`}
        onClick={() => plusClick()}
        disabled={quantity >= productInformation.stock}
      >
        <img
          className={styles["counter__plusButton--image"]}
          src={plusIcon}
          alt="plus"
        />
      </button>

      <span>{quantity}</span>

      <button
        className={`${styles["div__counter--minusButton"]} ${
          quantity <= 1 && styles["disabled"]
        }`}
        onClick={() => {
          decQuantity(productInformation.id);
          setQuantity((prevQuantity) => prevQuantity - 1); // Decrementamos de forma similar
        }}
        disabled={quantity <= 1}
      >
        <img src={minusIcon} alt="minus" />
      </button>
    </div>
  );
};

export default AddQuantity;
