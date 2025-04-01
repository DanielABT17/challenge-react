import styles from "./CardShoes.module.css";

export default function ({ shoes }) {
  return (
    <div className={styles["card__shoes"]} id={shoes.id.toString()}>
      <div className={styles["card__shoes--div"]}>
        <img
          className={styles["card__shoes--img"]}
          src={shoes.Imagenes[0]}
        ></img>
      </div>

      <div className={styles["card__shoes--info"]}>
        <h5 className={styles["shoes__info--marca"]}>{shoes.Marca}</h5>
        <h1 className={styles["shoes__info--title"]}>{shoes.Nombre}</h1>
        <div className={styles["shoes__info--div"]}>
          <div className={styles["info__div--card"]}>
            <p className={styles["div__card--shoes"]}>
              {"$ " + ((shoes.Precio * shoes.Descuento) / 100).toFixed(2)}
            </p>
          </div>

          <p className={styles["shoes__info--discount"]}>
            {shoes.Descuento + "% OFF"}
          </p>
        </div>
      </div>
    </div>
  );
}
