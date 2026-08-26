import { useState } from "react";
import { formatearDinero } from "../../utils/formatearDinero";
import ConfirmacionAccion from "./ConfirmacionAccion";
import "./estilos/ResumenVenta.css";

interface ResumenVentaProps {
  total: number;
  tieneProductos: boolean;

  onFinalizarVenta: () => void;
  onCancelarVenta: () => void;
}

const ResumenVenta = ({
  total,
  tieneProductos,
  onFinalizarVenta,
  onCancelarVenta,
}: ResumenVentaProps) => {

  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const handleConfirmarCancelacion = () => {
    onCancelarVenta();
    setMostrarConfirmacion(false);
  };

  if (mostrarConfirmacion) {
    return (
      <div className="resumen resumen-confirmacion">

        <ConfirmacionAccion
          titulo="¿Cancelar esta venta?"
          mensaje="Se eliminarán todos los productos del carrito."
          textoCancelar="Volver"
          textoConfirmar="Cancelar venta"
          onCancelar={() => setMostrarConfirmacion(false)}
          onConfirmar={handleConfirmarCancelacion}
        />

      </div>
    );
  }

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
        onClick={onFinalizarVenta}
      >
        Finalizar venta
      </button>

      {tieneProductos && (
        <button
          type="button"
          className="btn-cancelar-venta"
          onClick={() => setMostrarConfirmacion(true)}
        >
          Cancelar venta
        </button>
      )}

    </div>
  );
};

export default ResumenVenta;