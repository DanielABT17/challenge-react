import styles from "./ListCart.module.css";
import ItemListCart from "../item-list-cart/ItemListCart";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useShoesStore } from "../../../zustand/shoesStore.js";

const ListCart = ({ listCart }) => {
  const navigate = useNavigate();

  const clearCart = useShoesStore((state) => state.clearCart);

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
      <button
        className={styles["cart__content--checkout"]}
        onClick={() => {
          Swal.fire({
            title: "Done!",
            text: "thank you for your purchase",
            icon: "success",
            confirmButtonColor: "hsl(26,100%,55%)",
          });
          clearCart();
          navigate("/");
        }}
      >
        Checkout
      </button>
    </div>
  );
};
export default ListCart;
