import { useEffect, useState } from "react";
import { registrosQL } from "../../../mocks/registrosQL";
import "./RegistroQuickList.css";
import { NavLink } from "react-router-dom";
import vertodo from "../../../assets/images/vertodo.svg";

const RegistroQuickList = () => {
  const [registros, setRegistros] = useState<typeof registrosQL>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRegistros(registrosQL);
      setLoading(false);
    }, 2000); // Simula 2 segundos de espera

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="registros-quickList">
      <header className="registros-header">
        <div>
          <h2>Registro</h2>
          <p>Últimas ventas registradas</p>
        </div>

        <NavLink to="/registro" className="ver-todo">
          <span>Ver todo</span>
          <img src={vertodo} alt="" />
        </NavLink>
      </header>

      <ul className="registros-list">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="registro-item skeleton-item">
                <div className="skeleton skeleton-id"></div>

                <div className="registro-info">
                  <div className="skeleton skeleton-title"></div>
                  <div className="skeleton skeleton-subtitle"></div>
                </div>

                <div className="skeleton skeleton-total"></div>
              </li>
            ))
          : registros.map((registro) => (
              <li key={registro.id} className="registro-item">
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