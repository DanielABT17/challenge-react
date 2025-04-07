import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import logoCart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import styles from "./TopBar.module.css";
import CartEmpty from "../cart/cart-empty/CartEmpty";
import { useShoesStore } from "../../zustand/shoesStore";

const TopBar = () => {
  const [showCart, setShowCart] = useState(false);
  const handleCartClick = () => {
    setShowCart(!showCart);
  };
  const quantityCart = useShoesStore((state) => state.countItems());
  return (
    <>
      <div className={styles["top__bar"]}>
        <div className={styles["top__bar--nav"]}>
          <img className={styles["top__bar--logo"]} src={logo} />
          <button className={styles["nav__button"]}>Collections</button>
          <button className={styles["nav__button"]}>Men</button>
          <button className={styles["nav__button"]}>Women</button>
          <button className={styles["nav__button"]}>About</button>
          <button className={styles["nav__button"]}>Contact</button>
        </div>
        <div className={styles["top__bar--cart"]}>
          <div className={styles["bar__cart--quantity"]}>
            {quantityCart != 0 && (
              <div className={styles["cart__quantity--cart"]}>
                <p className={styles["quantity__cart--number"]}>
                  {quantityCart}
                </p>
              </div>
            )}

            <img
              onClick={handleCartClick}
              className={styles["top__bar__cart"]}
              src={logoCart}
            />
          </div>
          <img className={styles["top__bar__avatar"]} src={avatar} />
        </div>
        {showCart ? <CartEmpty /> : null}
      </div>
      <hr className={styles["line"]} />
    </>
  );
};

export default TopBar;
