import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import home from "../../assets/images/home.svg";
import stock from "../../assets/images/stock.svg";
import carrito from "../../assets/images/carrito.svg";
import registro from "../../assets/images/registro.svg";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-body">
        <p className="menu-sidebar">MENU</p>
        <ul>
          <li>
            <NavLink to="/" className="sidebar-link">
              <img src={home} alt="icono-home" />
              <div className="link-cont">
                <span>Inicio</span>
                <p className="li-p">Panel de control</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Stock" className="sidebar-link">
              <img src={stock} alt="icono-stock" />
              <div className="link-cont">
                <span>Stock</span>
                <p className="li-p">Gestiona tus productos</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Ventas" className="sidebar-link">
              <img src={carrito} alt="icono-carrito" />
              <div className="link-cont">
                <span>Ventas</span>
                <p className="li-p">Registra una nueva venta</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Registro" className="sidebar-link">
              <img src={registro} alt="icono-registro" />
              <div className="link-cont">
                <span>Registro</span>
                <p className="li-p">Mira los movimientos del dia</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      <SidebarProfile />
    </div>
  );
};

export default Sidebar;
