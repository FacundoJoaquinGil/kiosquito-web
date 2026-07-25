import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { stockBajoQL } from "../../../mocks/stockBajoQL";

import "./StockBajoQL.css";
import "../../../styles/dashboardCard.css";

import mas from "../../../assets/images/mas.svg";
import advertencia from "../../../assets/images/adventencia.svg";

const StockBajoQL = () => {
  const [productos, setProductos] = useState<typeof stockBajoQL>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProductos(stockBajoQL);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const productosStockBajo = productos.filter(
    (producto) => producto.stock <= 10,
  );

  const cantidadStock = productosStockBajo.length;

  const obtenerEstadoStock = (stock: number) => {
    const porcentaje = Math.min(stock * 8, 100);

    if (porcentaje <= 40) {
      return {
        color: "var(--danger)",
        width: `${porcentaje}%`,
        estado: "Crítico",
      };
    }

    return {
      color: "var(--warning)",
      width: `${porcentaje}%`,
      estado: "Bajo",
    };
  };

  return (
    <div className="dashboard-card">
      <header className="dashboard-card-header">
        <div className="dashboard-card-title">
          <div className="stock-header">
            <img
              src={advertencia}
              alt="Advertencia"
              className="stock-header-icon"
            />

            <div className="stock-header-text">
              <h2>Stock bajo</h2>
              <p>Productos por reponer</p>
            </div>
          </div>
        </div>

        <div className="stockBajo-btn-body">
          <NavLink to="/stock" className="dashboard-card-action">
            <span>Ver todo</span>
            <img src={mas} alt="" />
          </NavLink>
          <div className="cantidadStock">
            {cantidadStock} {cantidadStock === 1 ? "Producto" : "Productos"}
          </div>
        </div>
      </header>

      <ul className="dashboard-list">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <li key={index} className="dashboard-list-item stock-item">
              <div className="stock-content">
                <div className="skeleton skeleton-title"></div>

                <div className="stock-info">
                  <div className="skeleton skeleton-bar"></div>
                  <div className="skeleton skeleton-stock"></div>
                </div>
              </div>
            </li>
          ))
        ) : productosStockBajo.length === 0 ? (
          <li className="stock-vacio">
            <p>No hay productos con stock bajo...</p>
          </li>
        ) : (
          productosStockBajo.slice(0, 6).map((producto) => {
            const estado = obtenerEstadoStock(producto.stock);

            return (
              <li key={producto.id} className="dashboard-list-item stock-item">
                <div className="stock-content">
                  <span className="producto-nombre">{producto.producto}</span>

                  <div className="stock-info">
                    <div className="barra">
                      <div
                        className="barra-progreso"
                        style={{
                          width: estado.width,
                          backgroundColor: estado.color,
                        }}
                      />
                    </div>

                    <span className="stock-texto">{producto.stock}</span>
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default StockBajoQL;
