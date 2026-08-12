import { useEffect } from "react";
import "./RegistroVentas.css";

import { BuscadorRegistro, FiltrosRegistro, ListaMovimientos, Paginacion, RegistroCards } from "../../components/Registro";

import { formatearDinero } from "../../utils/formatearDinero";
import { useRegistro } from "../../hooks/useRegistro";

const Registro = () => {
  const {
    loading,

    ventasHoy,
    ingresosHoy,
    cajaActual,

    movimientosPaginados,

    busqueda,
    setBusqueda,

    filtroActivo,
    setFiltroActivo,

    paginaActual,
    setPaginaActual,

    totalPaginas,
  } = useRegistro();

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