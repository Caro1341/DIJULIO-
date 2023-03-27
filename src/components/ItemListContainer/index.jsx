import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./itemListContainer.module.scss";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoryName } = useParams();

  if (categoryName) {
    useEffect(() => {
      fetch("/public/data/productos.json")
        .then((res) => res.json())
        .then((data) =>
          setProductos(
            data.filter((producto) => producto.categoria == categoryName)
          )
        );
    }, [categoryName]);
  } else {
    useEffect(() => {
      fetch("/public/data/productos.json")
        .then((res) => res.json())
        .then((data) => setProductos(data));
    }, [categoryName]);
  }

  return (
    <div>
      <div className={styles.frase}>
        <p>{greeting}</p>
      </div>
      <div className={styles.container}>
        {productos.map((producto) => (
          <Link
            key={producto.id}
            to={`/productos/${producto.id}`}
            className={styles.links}
          >
            <div className={styles.card}>
              <img
                src={producto.imagen}
                alt={producto.imagen}
                className={styles.cardImg}
              />
              <div className={styles.cardTexto}>
                <h2>{producto.nombre}</h2>
                <p>$ {producto.precio}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
