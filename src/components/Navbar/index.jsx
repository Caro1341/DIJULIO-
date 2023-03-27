import styles from "./navbar.module.scss";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
const Navbar = ({ logo }) => {
  return (
    <nav className={styles.container}>
      <NavLink to="/">
        <img src={logo} className={styles.imgLogo} alt="logo" />
      </NavLink>
      <NavLink to="/" className={styles.items}>
        Inicio
      </NavLink>
      <NavLink to="/categoria/juguetes" className={styles.items}>
        Juguetes
      </NavLink>
      <NavLink to="/categoria/libros" className={styles.items}>
        Libros
      </NavLink>
      <NavLink to="/nosotros" className={styles.items}>
        Nosotros
      </NavLink>
      {/* como bastaba con que estuviera el icono del carrito no lo puse con NavLink como el resto de los links , sino que lo deje como en la entrega anterior */}
      <a href="#" className={styles.items}>
        <CartWidget carrito="../../../img/carrito.png" />
      </a>
    </nav>
  );
};

export default Navbar;
