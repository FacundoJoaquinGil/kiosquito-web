import type { Movimiento } from "../../data/movimientosMock";

interface MovimientoItemProps {
  movimiento: Movimiento;
  formatearDinero: (valor: number) => string;
}

const MovimientoItem = ({
  movimiento,
  formatearDinero,
}: MovimientoItemProps) => {
  let avatarClass = "movimiento-avatar bg-gray";
  let avatarContent: string | number = movimiento.id;

  if (movimiento.tipo === "ingreso") {
    avatarClass = "movimiento-avatar bg-green-light";
    avatarContent = "⬇";
  } else if (movimiento.tipo === "egreso") {
    avatarClass = "movimiento-avatar bg-red-light";
    avatarContent = "⬆";
  }


const esEgreso = movimiento.tipo === "egreso";

  const montoClase = esEgreso ? "monto negativo" : "monto positivo";

  const prefijoMonto = esEgreso ? "-" : "+";

  return (
    <div className="movimiento-row">
      <div className="movimiento-left">
        <div className={avatarClass}>{avatarContent}</div>

        <div className="movimiento-info">
          <strong>{movimiento.descripcion}</strong>

          <span>
            {movimiento.detalle_adicional ||
              (movimiento.tipo === "venta"
                ? `Venta #${movimiento.id}`
                : `${
                    movimiento.tipo.charAt(0).toUpperCase() +
                    movimiento.tipo.slice(1)
                  } manual`)}
            {" · "}
            {movimiento.hora} hs
          </span>
        </div>
      </div>

      <span className={montoClase}>
        {prefijoMonto} {formatearDinero(movimiento.monto)}
      </span>
    </div>
  );
};


export default MovimientoItem;