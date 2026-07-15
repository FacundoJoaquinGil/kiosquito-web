import { useState, useEffect } from "react";
import "./Registro.css";
import billetera from "../../assets/images/billetera.svg";
import grafico from "../../assets/images/grafico.svg";
import registrodia from "../../assets/images/registrodia.svg";

import { MOVIMIENTOS_MOCK, type Movimiento } from "../../data/movimientosMock";

const Registro = () => {
  const [movimientos, setMovimientos] = useState<Movimiento[]>([]);
  const [filtroActivo, setFiltroActivo] = useState<string>("Todos");
  const [busqueda, setBusqueda] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const obtenerMovimientos = () => {
      setTimeout(() => {
        setMovimientos(MOVIMIENTOS_MOCK);
        setLoading(false);
      }, 1000);
    };

    obtenerMovimientos();
  }, []);

  useEffect(() => {
    const contenedorFlex = document.querySelector(".flex");
    const contenedorContent = document.querySelector(".content");

    if (contenedorFlex && contenedorContent) {
      contenedorFlex.classList.add("layout-registro-activo");
      contenedorContent.classList.add("scroll-registro-activo");
    }

    return () => {
      if (contenedorFlex && contenedorContent) {
        contenedorFlex.classList.remove("layout-registro-activo");
        contenedorContent.classList.remove("scroll-registro-activo");
      }
    };
  }, []);

  const ventasHoy = movimientos.filter((m) => m.tipo === "venta").length;

  const ingresosHoy = movimientos
    .filter((m) => m.tipo === "venta" || m.tipo === "ingreso")
    .reduce((sum, m) => sum + m.monto, 0);

  const cajaActual = movimientos.reduce((total, m) => {
    return m.tipo === "egreso" ? total - m.monto : total + m.monto;
  }, 0);

const movimientosFiltrados = movimientos.filter((mov) => {
  const coincideFiltro =
    filtroActivo === "Todos" ||
    (filtroActivo === "Ventas" && mov.tipo === "venta") ||
    (filtroActivo === "Ingresos" && (mov.tipo === "ingreso" || mov.tipo === "venta")) || 
    (filtroActivo === "Egresos" && mov.tipo === "egreso");

  const coincideBusqueda = mov.descripcion
    .toLowerCase()
    .includes(busqueda.toLowerCase());

  return coincideFiltro && coincideBusqueda;
});
  const formatearDinero = (valor: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(valor);
  };

  return (
    <div className="registro-container">
      <div className="registro-header">
        <h2>Registro del día</h2>
        <p>Revisá ventas, ingresos y movimientos de hoy.</p>
      </div>

      <div className="registro-cards">
        <div className="card">
          <div className="card-header">
            <span className="card-title">Ventas de hoy</span>
            <img src={registrodia} alt="icono-registrodia" />
          </div>
          <h3 className="card-value">{ventasHoy}</h3>
          <p className="card-sub-green">+3 vs. ayer</p>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Ingresos del día</span>
            <img src={grafico} alt="icono-grafico" />
          </div>
          <h3 className="card-value">{formatearDinero(ingresosHoy)}</h3>
          <p className="card-sub-green">+12% vs. ayer</p>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Caja actual</span>
            <img src={billetera} alt="icono-billetera" />
          </div>
          <h3 className="card-value">{formatearDinero(cajaActual)}</h3>
          <p className="card-sub-gray">Actualizado hace un momento</p>
        </div>
      </div>

      <div className="movimientos-section">
        <div className="movimientos-header">
          <div className="movimientos-title">
            <h3>Movimientos</h3>
            <p>Últimas ventas y movimientos registrados</p>
          </div>
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar movimiento..."
              className="search-input"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>

        <div className="filtros">
          {["Todos", "Ventas", "Ingresos", "Egresos"].map((filtro) => (
            <button
              key={filtro}
              className={`filtro-btn ${filtroActivo === filtro ? "active" : ""}`}
              onClick={() => setFiltroActivo(filtro)}
            >
              {filtro}
            </button>
          ))}
        </div>

        <div className="lista-movimientos">
          {loading ? (
            <p style={{ textAlign: "center", padding: "20px", color: "#64748b" }}>
              Cargando movimientos...
            </p>
          ) : movimientosFiltrados.length === 0 ? (
            <p style={{ textAlign: "center", padding: "20px", color: "#64748b" }}>
              No se encontraron movimientos.
            </p>
          ) : (
            movimientosFiltrados.map((mov) => {
              let avatarClass = "movimiento-avatar bg-gray";
              let avatarContent: string | number = mov.id;

              if (mov.tipo === "ingreso") {
                avatarClass = "movimiento-avatar bg-green-light";
                avatarContent = "⬇";
              } else if (mov.tipo === "egreso") {
                avatarClass = "movimiento-avatar bg-red-light";
                avatarContent = "⬆";
              }

              const esEgreso = mov.tipo === "egreso";
              const montoClase = esEgreso ? "monto negativo" : "monto positivo";
              const prefijoMonto = esEgreso ? "-" : "+";

              return (
                <div className="movimiento-row" key={mov.id}>
                  <div className="movimiento-left">
                    <div className={avatarClass}>{avatarContent}</div>
                    <div className="movimiento-info">
                      <strong>{mov.descripcion}</strong>
                      <span>
                        {mov.detalle_adicional ||
                          (mov.tipo === "venta"
                            ? `Venta #${mov.id}`
                            : `${mov.tipo.charAt(0).toUpperCase() + mov.tipo.slice(1)} manual`)}{" "}
                        · {mov.hora} hs
                      </span>
                    </div>
                  </div>
                  <span className={montoClase}>
                    {prefijoMonto} {formatearDinero(mov.monto)}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Registro;