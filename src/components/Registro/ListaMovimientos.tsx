import type { Movimiento } from "../../data/movimientosMock";
import MovimientoItem from "./MovimientoItem";
import MovimientoSkeleton from "./MovimientoSkeleton";
import "./RegistroComponents.css";

interface ListaMovimientosProps {
  loading: boolean;
  movimientos: Movimiento[];
  formatearDinero: (valor: number) => string;
  busqueda: string;
  limpiarBusqueda: () => void;
}

const ListaMovimientos = ({
  loading,
  movimientos,
  formatearDinero,
  busqueda,
  limpiarBusqueda,
}: ListaMovimientosProps) => {
  if (loading) {
    return (
      <div className="lista-movimientos">
        {Array.from({ length: 6 }).map((_, index) => (
          <MovimientoSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (movimientos.length === 0) {
    return (
      <div className="lista-movimientos lista-vacia">
        <div className="lista-vacia-icono">⌕</div>

        <h3>No encontramos ese movimiento</h3>

        {busqueda ? (
          <p>
            No hay movimientos que coincidan con{" "}
            <strong>"{busqueda}"</strong>.
          </p>
        ) : (
          <p>No hay movimientos registrados para mostrar.</p>
        )}

        {busqueda && (
          <button
            type="button"
            className="btn-limpiar-busqueda"
            onClick={limpiarBusqueda}
          >
            Limpiar búsqueda
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="lista-movimientos">
      {movimientos.map((mov) => (
        <MovimientoItem
          key={mov.id}
          movimiento={mov}
          formatearDinero={formatearDinero}
        />
      ))}
    </div>
  );
};

export default ListaMovimientos;