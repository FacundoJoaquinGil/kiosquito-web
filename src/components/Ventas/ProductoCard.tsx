import "./estilos/ProductoCard.css";

import type { Producto } from "../../types/ventasTypes";
import { formatearDinero } from "../../utils/formatearDinero";

interface ProductoCardProps {
  producto: Producto;
  onAgregar: (producto: Producto) => void;
}

const ProductoCard = ({
  producto,
  onAgregar,
}: ProductoCardProps) => {
  return (
    <article className="producto-card">

      <span className="producto-categoria">
        {producto.categoria}
      </span>

      <h3>{producto.nombre}</h3>

      <div className="producto-footer">

        <strong className="producto-precio">
          {formatearDinero(producto.precio)}
        </strong>

        <button
          type="button"
          className="agregar-btn"
          onClick={() => onAgregar(producto)}
          aria-label={`Agregar ${producto.nombre}`}
        >
          +
        </button>

      </div>

    </article>
  );
};

export default ProductoCard;