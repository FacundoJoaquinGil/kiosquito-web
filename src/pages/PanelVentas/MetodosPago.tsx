import type { MetodoPago } from "../../types/ventasTypes";

interface MetodosPagoProps {
  metodoActual: MetodoPago;
  onCambiarMetodo: (metodo: MetodoPago) => void;
}

const metodos: {
  nombre: MetodoPago;
  icono: string;
}[] = [
  {
    nombre: "Efectivo",
    icono: "💵",
  },
  {
    nombre: "Tarjeta",
    icono: "💳",
  },
  {
    nombre: "QR",
    icono: "📱",
  },
];

const MetodosPago = ({
  metodoActual,
  onCambiarMetodo,
}: MetodosPagoProps) => {
  return (
    <div className="metodos-pago">

      <h3>Método de pago</h3>

      <div className="metodos-grid">

        {metodos.map((metodo) => (

          <button
            key={metodo.nombre}
            type="button"
            onClick={() =>
              onCambiarMetodo(metodo.nombre)
            }
            className={
              metodoActual === metodo.nombre
                ? "metodo activo"
                : "metodo"
            }
          >

            <span>
              {metodo.icono}
            </span>

            <span>
              {metodo.nombre}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
};

export default MetodosPago;