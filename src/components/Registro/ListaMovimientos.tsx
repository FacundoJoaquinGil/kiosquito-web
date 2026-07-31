import type { Movimiento } from "../../data/movimientosMock";
import MovimientoItem from "./MovimientoItem";

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
        <p style={{ textAlign: "center", padding: "20px", color: "#64748b" }}>
          Cargando movimientos...
        </p>
      </div>
    );
  }

  if (movimientos.length === 0) {
    return (
      <div className="lista-movimientos">
        <p style={{ textAlign: "center", padding: "20px", color: "#64748b" }}>
          No se encontraron movimientos.
        </p>
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