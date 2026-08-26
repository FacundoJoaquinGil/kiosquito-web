import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { registrosQL } from "../../../mocks/registrosQL";

import "./RegistroQuickList.css";
import "../../../styles/dashboardCard.css";

import vertodo from "../../../assets/images/vertodo.svg";

const RegistroQuickList = () => {
  const [registros, setRegistros] = useState<typeof registrosQL>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRegistros(registrosQL);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard-card">
      <header className="dashboard-card-header">
        <div>
          <h2>Registro</h2>
          <p>Últimas ventas registradas</p>
        </div>

        <NavLink to="/registro" className="dashboard-card-action">
          <span>Ver todo</span>
          <img src={vertodo} alt="" />
        </NavLink>
      </header>

      <ul className="dashboard-list">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <li
                key={index}
                className="dashboard-list-item registro-item"
              >
                <div className="skeleton skeleton-id"></div>

                <div className="registro-info">
                  <div className="skeleton skeleton-title"></div>
                  <div className="skeleton skeleton-subtitle"></div>
                </div>

                <div className="skeleton skeleton-total"></div>
              </li>
            ))
          : registros.slice(0, 5).map((registro) => (
              <li
                key={registro.id}
                className="dashboard-list-item registro-item"
              >
                <div className="registro-id">{registro.id}</div>

                <div className="registro-info">
                  <span>{registro.products.join(", ")}</span>
                  <p>
                    Venta #{registro.id} · {registro.time}
                  </p>
                </div>

                <div className="registro-total">
                  ${registro.total.toLocaleString("es-AR")}
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default RegistroQuickList;