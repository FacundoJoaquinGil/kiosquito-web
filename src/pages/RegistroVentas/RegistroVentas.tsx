import { useState, useEffect } from "react";
import "./RegistroVentas.css";
import ListaMovimientos from "../../components/Registro/ListaMovimientos";
import RegistroCards from "../../components/Registro/RegistroCards";
import BuscadorRegistro from "../../components/Registro/BuscadorRegistro";
import FiltrosRegistro from "../../components/Registro/FiltrosRegistro";
import Paginacion from "../../components/Registro/Paginacion";
import { formatearDinero } from "../../utils/formatearDinero";

import { MOVIMIENTOS_MOCK, type Movimiento } from "../../data/movimientosMock";

  const MOVIMIENTOS_POR_PAGINA = 10;

const Registro = () => {
  const [movimientos, setMovimientos] = useState<Movimiento[]>([]);
  const [filtroActivo, setFiltroActivo] = useState<string>("Todos");
  const [busqueda, setBusqueda] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [paginaActual, setPaginaActual] = useState(1);


  useEffect(() => {
    const obtenerMovimientos = () => {
      setTimeout(() => {
        setMovimientos(MOVIMIENTOS_MOCK);
        setLoading(false);
      }, 1000);
    };

    obtenerMovimientos();
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

const totalPaginas = Math.ceil(
  movimientosFiltrados.length / MOVIMIENTOS_POR_PAGINA
);

const movimientosPaginados = movimientosFiltrados.slice(
  (paginaActual - 1) * MOVIMIENTOS_POR_PAGINA,
  paginaActual * MOVIMIENTOS_POR_PAGINA
);

  useEffect(() => {
    const contenedorFlex = document.querySelector(".flex");
    const contenedorContent = document.querySelector(".content");

    document.body.classList.add("no-scroll-global");

    if (contenedorFlex && contenedorContent) {
      contenedorFlex.classList.add("layout-registro-activo");
      contenedorContent.classList.add("scroll-registro-activo");
    }
    return () => {
      document.body.classList.remove("no-scroll-global");

      if (contenedorFlex && contenedorContent) {
        contenedorFlex.classList.remove("layout-registro-activo");
        contenedorContent.classList.remove("scroll-registro-activo");
        }
      };
    }, []);

  useEffect(() => {
      setPaginaActual(1);
  }, [busqueda, filtroActivo]);

  return (
    <div className="registro-container">
      <div className="registro-header">
        <h2>Registro del día</h2>
        <p>Revisá ventas, ingresos y movimientos de hoy.</p>
      </div>

      <RegistroCards
        ventasHoy={ventasHoy}
        ingresosHoy={formatearDinero(ingresosHoy)}
        cajaActual={formatearDinero(cajaActual)}
      />

      <div className="movimientos-section">
        <div className="movimientos-header">
          <div className="movimientos-title">
            <h3>Movimientos</h3>
            <p>Últimas ventas y movimientos registrados</p>
          </div>
          <BuscadorRegistro
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
        </div>

        <FiltrosRegistro
          filtroActivo={filtroActivo}
          setFiltroActivo={setFiltroActivo}
        />

        <ListaMovimientos
          loading={loading}
          movimientos={movimientosPaginados}
          formatearDinero={formatearDinero}
        />

        <Paginacion
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          onCambiarPagina={setPaginaActual}
        />

      </div>
    </div>
  );
};

export default Registro;