import styles from "./CardShoes.module.css";

export default function ({ shoes, onClick }) {
  const priceEnd = shoes.Precio - shoes.Precio * (shoes.Descuento / 100);

  const priceClass =
    shoes.Descuento === 0
      ? styles["price__no-discount"]
      : styles["price__discounted"];
  const discountClass =
    shoes.Descuento === 0
      ? styles["discount__hidden"]
      : styles["shoes__info--discount"];

  return (
    <div
      className={styles["card__shoes"]}
      id={shoes.id.toString()}
      onClick={onClick}
      role="button"
    >
      <div className={styles["card__shoes--div"]}>
        <img
          className={styles["card__shoes--img"]}
          src={shoes.Imagenes[0]}
          alt={shoes.Nombre}
        />
      </div>

      <div className={styles["card__shoes--info"]}>
        <h5 className={styles["shoes__info--marca"]}>{shoes.Marca}</h5>
        <h1 className={styles["shoes__info--title"]}>{shoes.Nombre}</h1>
        <div className={styles["shoes__info--div"]}>
          <div className={styles["info__div--card"]}>
            <p className={priceClass}>{"$ " + priceEnd.toFixed(2)}</p>
          </div>

          <p className={discountClass}>
            {shoes.Descuento === 0 ? shoes.Precio : `${shoes.Descuento}% OFF`}
          </p>
        </div>
      </div>
    </div>
  );
}
