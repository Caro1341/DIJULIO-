import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { Navigate, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";
import CartWidget from "./components/Navbar/CartWidget";

function App() {
  // const [productos, setProductos] = useState([]);
  // const getProductos = async () => {
  //   try {
  //     const res = await axios("/public/data/productos.json");
  //     setProductos(res.data);
  //   } catch (error) {
  //     console.log("Ups! Ha ocurrido un error: " + error);
  //   }
  // };

  // useEffect(() => {
  //   getProductos();
  // }, []);
  // console.log(productos);

  return (
    <div>
      <Navbar logo="../img/icono.png" />
      <div className="bodyApp">
        <h1>Aquarela</h1>

        <Routes>
          <Route path="/" element={<Navigate to="/productos" />} />
          <Route
            path="/productos"
            element={
              <ItemListContainer greeting="Estos son todos los productos que tenemos disponibles" />
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos/:id" element={<CardDetail />} />
          <Route
            path="/categoria/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/carrito" element={<CartWidget />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
