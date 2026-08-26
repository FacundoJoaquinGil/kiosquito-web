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

      <div className="producto-icono">
        {producto.nombre.charAt(0)}
      </div>

      <h3>{producto.nombre}</h3>

      <span className="producto-categoria">
        {producto.categoria}
      </span>

      <strong>
        {formatearDinero(producto.precio)}
      </strong>

      <button
        type="button"
        className="agregar-btn"
        onClick={() => onAgregar(producto)}
      >
        +
      </button>

    </article>
  );
};

export default ProductoCard;