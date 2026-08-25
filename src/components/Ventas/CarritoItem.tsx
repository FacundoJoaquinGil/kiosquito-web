import { useState } from "react";
import type { ProductoCarrito } from "../../types/ventasTypes";
import { formatearDinero } from "../../utils/formatearDinero";
import "./estilos/CarritoItem.css";
import basura from "../../assets/images/basura.svg";

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
  const [isLeaving, setIsLeaving] = useState(false);
  const subtotal = producto.precio * producto.cantidad;

  const handleEliminar = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onEliminar(producto.id);
    }, 200);
  };

  return (
    <article className={`carrito-item ${isLeaving ? "carrito-item-saliendo" : ""}`}>

      {/* INFORMACIÓN */}

      <div className="carrito-item-header">

        <div className="carrito-info">
          <h4>{producto.nombre}</h4>

          <span>
            {formatearDinero(producto.precio)} c/u
          </span>
        </div>

        {/* ELIMINAR */}

        <button
          type="button"
          className="eliminar-btn"
          onClick={handleEliminar}
          aria-label={`Eliminar ${producto.nombre}`}
        >
          <img
            src={basura}
            alt="Eliminar"
            className="eliminar-icono"
          />
        </button>

      </div>


      {/* CANTIDAD + SUBTOTAL */}

      <div className="carrito-item-footer">

        <div className="carrito-cantidad">

          <span className="cantidad-label">
            Cantidad
          </span>

          <div className="cantidad-controles">

            <button
              type="button"
              onClick={() => onDisminuir(producto.id)}
              aria-label={`Disminuir ${producto.nombre}`}
            >
              −
            </button>

            <span>
              {producto.cantidad}
            </span>

            <button
              type="button"
              onClick={() => onAumentar(producto.id)}
              aria-label={`Aumentar ${producto.nombre}`}
            >
              +
            </button>

          </div>

        </div>


        <strong className="carrito-subtotal">
          {formatearDinero(subtotal)}
        </strong>

      </div>

    </article>
  );
};

export default CarritoItem;