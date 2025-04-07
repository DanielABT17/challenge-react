import styles from "./ListCart.module.css";
import ItemListCart from "../item-list-cart/ItemListCart";
const ListCart = ({ listCart }) => {
  return (
    <div className={styles["cart__content"]}>
      <div className={styles["cart__content--listshoes"]}>
        {listCart.map((item) => (
          <ItemListCart
            key={item.id}
            idShoes={item.id}
            quantity={item.quantity}
          />
        ))}
      </div>
      <button className={styles["cart__content--checkout"]}>Checkout</button>
    </div>
  );
};
export default ListCart;
