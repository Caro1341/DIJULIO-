import styles from "./cartWidget.module.scss";

const CartWidget = ({ carrito }) => {
  return (
    <div className={styles.productosComprados}>
      <img
        src={carrito}
        className={styles.imgCarrito}
        alt="carrito de compras"
      />
      <p>5</p>
    </div>
  );
};

export default CartWidget;
