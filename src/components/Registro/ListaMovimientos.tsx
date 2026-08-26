import type { Movimiento } from "../../data/movimientosMock";
import MovimientoItem from "./MovimientoItem";
import MovimientoSkeleton from "./MovimientoSkeleton";

interface ListaMovimientosProps {
  loading: boolean;
  movimientos: Movimiento[];
  formatearDinero: (valor: number) => string;
}

const ListaMovimientos = ({
  loading,
  movimientos,
  formatearDinero,
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
        <p>No se encontraron movimientos.</p>
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