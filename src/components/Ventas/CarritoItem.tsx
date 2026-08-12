import type { ProductoCarrito } from "../../types/ventasTypes";
import { formatearDinero } from "../../utils/formatearDinero";

interface CarritoItemProps {
  producto: ProductoCarrito;
  onAumentar: (id: number) => void;
  onDisminuir: (id: number) => void;
  onEliminar: (id: number) => void;
}

const CarritoItem = ({
  producto,
  onAumentar,
  onDisminuir,
  onEliminar,
}: CarritoItemProps) => {
  const subtotal = producto.precio * producto.cantidad;


  return (
    <div className="carrito-item">

      <div className="carrito-info">
        <h4>{producto.nombre}</h4>

        <span>
          {formatearDinero(producto.precio)}
        </span>
      </div>

      <div className="carrito-cantidad">

        <button
          type="button"
          onClick={() => onDisminuir(producto.id)}
          aria-label={`Disminuir ${producto.nombre}`}
        >
          −
        </button>

        <span>{producto.cantidad}</span>

        <button
          type="button"
          onClick={() => onAumentar(producto.id)}
          aria-label={`Aumentar ${producto.nombre}`}
        >
          +
        </button>

      </div>

      <div className="carrito-subtotal">
        {formatearDinero(subtotal)}
      </div>

      <button
        type="button"
        className="eliminar-btn"
        onClick={() => onEliminar(producto.id)}
        aria-label={`Eliminar ${producto.nombre}`}
      >
        ×
      </button>

    </div>
  );
};

export default CarritoItem;