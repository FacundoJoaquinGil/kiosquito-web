import { NavLink } from "react-router-dom";
import "./Home.css";

import agregarProducto from "../../assets/images/agregar-producto.svg";
import registrarVenta from "../../assets/images/registrar-venta.svg";
import flecha from "../../assets/images/flecha.svg";

const Home = () => {
  const nameUser = "Maria";
  const kioscoName = "La Pato";

  const fecha = new Date();

  const fechaCapitalizada = fecha
    .toLocaleDateString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })
    .replace(/^./, (c) => c.toUpperCase());

  return (
    <main className="home">
      <section className="welcome-section">
        <h1 className="welcome-title">¡Hola, {nameUser}! 👋🏼</h1>

        <h2 className="welcome-subtitle">
          Panel de tu kiosco <span className="kiosco-name">"{kioscoName}"</span>
        </h2>

        <p className="welcome-date">{fechaCapitalizada}</p>
      </section>

      <section className="quick-actions">
        <h2 className="section-title">Acciones rápidas</h2>

        <ul className="quick-actions-list">
          <li>
            <NavLink to="/Ventas" className="quick-action-card">
              <img src={registrarVenta} alt="" className="quick-action-icon" />

              <div className="quick-action-content">
                <header className="quick-action-header">
                  <span className="quick-action-title">Registrar venta</span>

                  <img src={flecha} alt="" className="quick-action-arrow" />
                </header>

                <p className="quick-action-description">
                  Cargá ventas del local
                </p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/Stock" className="quick-action-card">
              <img src={agregarProducto} alt="" className="quick-action-icon" />

              <div className="quick-action-content">
                <header className="quick-action-header">
                  <span className="quick-action-title">Agregar producto</span>

                  <img src={flecha} alt="" className="quick-action-arrow" />
                </header>

                <p className="quick-action-description">
                  Sumá productos nuevos al local
                </p>
              </div>
            </NavLink>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
