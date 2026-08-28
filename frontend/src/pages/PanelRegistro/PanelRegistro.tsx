import "./PanelRegistro.css";

import { BuscadorRegistro, FiltrosRegistro, ListaMovimientos, Paginacion, RegistroCards } from "../../components/Registro";

import { formatearDinero } from "../../utils/formatearDinero";
import { useRegistro } from "../../hooks/useRegistro";

const PanelRegistro = () => {
  
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
          busqueda={busqueda}
          limpiarBusqueda={() => setBusqueda("")}
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

export default PanelRegistro;