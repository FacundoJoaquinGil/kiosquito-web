import type { Movimiento } from "../../data/movimientosMock";
import "./RegistroComponents.css";

interface MovimientoItemProps {
  movimiento: Movimiento;
  formatearDinero: (valor: number) => string;
}

const MovimientoItem = ({
  movimiento,
  formatearDinero,
}: MovimientoItemProps) => {
  let avatarClass = "registro-id";
  let avatarContent: string | number = movimiento.id;

  if (movimiento.tipo === "ingreso") {
    avatarContent = "⬇";
  } else if (movimiento.tipo === "egreso") {
    avatarContent = "⬆";
  }

  const esEgreso = movimiento.tipo === "egreso";

  const montoClase = esEgreso
    ? "registro-total negativo"
    : "registro-total positivo";

  const prefijoMonto = esEgreso ? "-" : "+";

  const detalle =
    movimiento.detalle_adicional ||
    (movimiento.tipo === "venta"
      ? `Venta #${movimiento.id}`
      : `${movimiento.tipo.charAt(0).toUpperCase() + movimiento.tipo.slice(1)} manual`);

  return (
    <div className="registro-item">
      <div className={avatarClass}>{avatarContent}</div>

      <div className="registro-info">
        <span>{movimiento.descripcion}</span>

        <p>
          {detalle} · {movimiento.hora} hs
        </p>
      </div>

      <span className={montoClase}>
        {prefijoMonto} {formatearDinero(movimiento.monto)}
      </span>
    </div>
  );
};

export default MovimientoItem;