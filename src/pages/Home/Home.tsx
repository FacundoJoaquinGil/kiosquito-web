import { NavLink } from "react-router-dom";
import "./Home.css";
import agregarProducto from "../../assets/images/agregar-producto.svg"
import registrarVenta from "../../assets/images/registrar-venta.svg"

const Home = () => {
  const nameUser: string = "Maria";
  const kiscoName: string = "La Pato";

  const fecha = new Date();

  const fechaFormateada = fecha.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const fechaCapitalizada =
    fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);

  return (
    <div className="home-container">

      <div className="user-data">
        <h1 className="titulo-home">¡Hola, {nameUser}! 👋🏼</h1>
        <h3 className="subtitulo-home">
          Panel de tu kiosco <span className="kiosco-name">"{kiscoName}"</span>
        </h3>
        <p className="fecha">{fechaCapitalizada}</p>
      </div>

      <div className="acciones-rapidas-body">

        <span className="ar-span">Acciones rápidas</span>

        <ul>

          <li>
            <NavLink to="/Ventas" className="acciones-rapidas-link">
              <img src={registrarVenta} alt="icono-registrarVenta" />
              <div className="acciones-rapidas-cont">
                <span>Registrar Venta</span>
                <p className="acciones-rapidas-p">Cargá ventas del local</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/Stock" className="acciones-rapidas-link">
              <img src={agregarProducto} alt="icono-agregarProducto" />
              <div className="acciones-rapidas-cont">
                <span>Agregar Producto</span>
                <p className="acciones-rapidas-p">Sumá productos nuevos al local</p>
              </div>
            </NavLink>
          </li>


          </ul>

      </div>
    </div>
  );
};

export default Home;
