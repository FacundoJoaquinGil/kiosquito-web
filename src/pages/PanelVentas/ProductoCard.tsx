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

  const handleAgregar = () => {
    onAgregar(producto);
  };

  const handleClickBoton = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    handleAgregar();
  };

  return (
    <article
      className="producto-card"
      onClick={handleAgregar}
      role="button"
      tabIndex={0}
      aria-label={`Agregar ${producto.nombre} al carrito`}
    >

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
          onClick={handleClickBoton}
          aria-label={`Agregar ${producto.nombre}`}
        >
          +
        </button>

      </div>

    </article>
  );
};

export default ProductoCard;