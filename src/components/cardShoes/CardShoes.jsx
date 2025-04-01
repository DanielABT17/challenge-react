import styles from "./syleCardShoes.module.css";

export default function ({ shoes }) {
  return (
    <div className={styles["card-Shoes"]} id={shoes.id.toString()}>
      <div className={styles["card-img"]}>
        <img className={styles["img-Shoes"]} src={shoes.Imagenes[0]}></img>
      </div>

      <div className={styles["info-Shoes"]}>
        <h5 className={styles["marca-Shoes"]}>{shoes.Marca}</h5>
        <h1 className={styles["title-Shoes"]}>{shoes.Nombre}</h1>
        <div className={styles["info-Price"]}>
          <div className={styles["card-price"]}>
            <p className={styles["price-Shoes"]}>
              {"$ " + ((shoes.Precio * shoes.Descuento) / 100).toFixed(2)}
            </p>
          </div>

          <p className={styles["discount"]}>{shoes.Descuento + "% OFF"}</p>
        </div>
      </div>
    </div>
  );
}
