import type { Producto } from "../../types/ventasTypes";
import ProductoCard from "./ProductoCard";


interface ListaProductosProps {
  productos: Producto[];
  onAgregar: (producto: Producto) => void;
}

const ListaProductos = ({
  productos,
  onAgregar,
}: ListaProductosProps) => {

  if (productos.length === 0) {
    return (
      <div className="productos-vacios">
        <p>No se encontraron productos.</p>
      </div>
    );
  }

  return (
    <div className="productos-grid">

      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
          onAgregar={onAgregar}
        />
      ))}

    </div>
  );
};

export default ListaProductos;