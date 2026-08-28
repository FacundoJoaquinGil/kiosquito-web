import type { Producto } from "../../types/ventasTypes";
import ProductoCard from "./ProductoCard";
import ProductosVacios from "./ProductosVacios";

interface ListaProductosProps {
  productos: Producto[];
  onAgregar: (producto: Producto) => void;

  busqueda: string;
  categoria: string;

  onLimpiar: () => void;
}

const ListaProductos = ({
  productos,
  onAgregar,
  busqueda,
  categoria,
  onLimpiar,
}: ListaProductosProps) => {

  if (productos.length === 0) {
    return (
      <ProductosVacios
        busqueda={busqueda}
        categoria={categoria}
        onLimpiar={onLimpiar}
      />
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