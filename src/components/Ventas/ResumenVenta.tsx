interface ResumenVentaProps {
  total: number;
  tieneProductos: boolean;
}

import { formatearDinero } from "../../utils/formatearDinero";

const ResumenVenta = ({
  total,
  tieneProductos,
}: ResumenVentaProps) => {


  const handleCobrar = () => {
    if (!tieneProductos) return;

    console.log("Procesando venta...");
  };

  return (
    <div className="resumen">

      <div className="resumen-linea">

        <span>Total</span>

        <strong>
          {formatearDinero(total)}
        </strong>

      </div>

      <button
        type="button"
        className="btn-cobrar"
        disabled={!tieneProductos}
        onClick={handleCobrar}
      >
        Cobrar
      </button>

    </div>
  );
};

export default ResumenVenta;