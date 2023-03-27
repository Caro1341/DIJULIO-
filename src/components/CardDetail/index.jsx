import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./cardDetail.module.scss";

const CardDetail = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("../public/data/productos.json")
      .then((res) => res.json())
      .then((data) => {
        const prod = data.find((producto) => producto.id == id);
        setProducto(prod);
      });
  }, [id]);

  return (
    <div className={styles.cardDetail}>
      <img
        className={styles.cardImg}
        src={producto.imagen}
        alt={producto.imagen}
      />

      <h2 className={styles.cardName}>{producto.nombre}</h2>
      <p>
        {producto.descripcion} Este producto esta recomendado para niños mayores
        de {producto.edad_minima} años.
      </p>
      <p className={styles.cardPrice}>$ {producto.precio}</p>
    </div>
  );
};

export default CardDetail;
