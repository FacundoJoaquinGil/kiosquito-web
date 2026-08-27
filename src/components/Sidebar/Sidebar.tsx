import "./Sidebar.css";

import { NavLink } from "react-router-dom";

import panelControl from "../../assets/images/panel-control.svg";
import stock from "../../assets/images/stock.svg";
import carrito from "../../assets/images/carrito.svg";
import registro from "../../assets/images/registro.svg";
import administracion from "../../assets/images/admin.svg";

import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-body">
        <p className="menu-sidebar">MENU</p>

        <ul>
          <li>
            <NavLink to="/panel-control" className="sidebar-link">
              <img src={panelControl} alt="icono-panel-control" />

              <div className="link-cont">
                <span>Inicio</span>
                <p className="li-p">Panel de control</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/stock" className="sidebar-link">
              <img src={stock} alt="icono-stock" />

              <div className="link-cont">
                <span>Stock</span>
                <p className="li-p">Gestiona tus productos</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/ventas" className="sidebar-link">
              <img src={carrito} alt="icono-carrito" />

              <div className="link-cont">
                <span>Ventas</span>
                <p className="li-p">Registra una nueva venta</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/registro" className="sidebar-link">
              <img src={registro} alt="icono-registro" />

              <div className="link-cont">
                <span>Registro</span>
                <p className="li-p">Mira los movimientos del día</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin" className="sidebar-link">
              <img src={administracion} alt="icono-administracion" />

              <div className="link-cont">
                <span>Administración</span>
                <p className="li-p">Gestiona tu negocio</p>
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