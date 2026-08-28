import { useState } from "react";

import type { MetodoPago } from "../../types/ventasTypes";

import { formatearDinero } from "../../utils/formatearDinero";

import "./estilos/FinalizarVenta.css";

interface FinalizarVentaProps {
  metodoPago: MetodoPago;
  total: number;

  onCambiarMetodo: (metodo: MetodoPago) => void;
  onConfirmar: (emitirTicket: boolean) => void;
  onVolver: () => void;
}

const FinalizarVenta = ({
  metodoPago,
  total,
  onCambiarMetodo,
  onConfirmar,
  onVolver,
}: FinalizarVentaProps) => {

  const [emitirTicket, setEmitirTicket] = useState(false);

  const handleConfirmar = () => {
    onConfirmar(emitirTicket);
  };

  return (
    <div className="finalizar-venta">

      {/* HEADER */}

      <div className="finalizar-venta-header">

        <h3>Finalizar venta</h3>

        <p>
          Revisá los datos antes de confirmar.
        </p>

      </div>


      {/* MÉTODO DE PAGO */}

      <div className="finalizar-venta-seccion">

        <h4>Método de pago</h4>

        <div className="finalizar-metodos">

          <button
            type="button"
            className={
              metodoPago === "Efectivo"
                ? "finalizar-metodo activo"
                : "finalizar-metodo"
            }
            onClick={() => onCambiarMetodo("Efectivo")}
          >
            <span>Efectivo</span>
          </button>


          <button
            type="button"
            className={
              metodoPago === "Tarjeta"
                ? "finalizar-metodo activo"
                : "finalizar-metodo"
            }
            onClick={() => onCambiarMetodo("Tarjeta")}
          >
            <span>Tarjeta</span>
          </button>


          <button
            type="button"
            className={
              metodoPago === "QR"
                ? "finalizar-metodo activo"
                : "finalizar-metodo"
            }
            onClick={() => onCambiarMetodo("QR")}
          >
            <span>QR</span>
          </button>

        </div>

      </div>


      {/* TICKET */}

      <label className="finalizar-ticket">

        <input
          type="checkbox"
          checked={emitirTicket}
          onChange={(e) => setEmitirTicket(e.target.checked)}
        />

        <span>
          Emitir ticket
        </span>

      </label>


      {/* TOTAL */}

      <div className="finalizar-total">

        <span>Total</span>

        <strong>
          {formatearDinero(total)}
        </strong>

      </div>


      {/* ACCIONES */}

      <div className="finalizar-acciones">

        <button
          type="button"
          className="btn-volver-carrito"
          onClick={onVolver}
        >
          Volver al carrito
        </button>

        <button
          type="button"
          className="btn-confirmar-venta"
          onClick={handleConfirmar}
        >
          Confirmar venta
        </button>

      </div>

    </div>
  );
};

export default FinalizarVenta;