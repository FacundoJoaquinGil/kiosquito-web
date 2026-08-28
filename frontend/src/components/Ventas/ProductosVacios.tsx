import "./estilos/ProductosVacios.css";

interface ProductosVaciosProps {
  busqueda: string;
  categoria: string;
  onLimpiar: () => void;
  onAgregarProducto?: () => void;
}

const ProductosVacios = ({
  busqueda,
  categoria,
  onLimpiar,
  onAgregarProducto,
}: ProductosVaciosProps) => {

  const hayBusqueda = busqueda.trim().length > 0;
  const hayCategoria = categoria !== "Todos";

  let titulo = "No se encontraron productos";
  let mensaje = "Probá modificando los filtros de búsqueda.";

  if (hayBusqueda) {
    titulo = "No encontramos ese producto";
    mensaje = `No hay productos que coincidan con "${busqueda}".`;
  } else if (hayCategoria) {
    titulo = "No hay productos en esta categoría";
    mensaje = "Probá seleccionando otra categoría.";
  }

  return (
    <div className="productos-vacios">

      <div className="productos-vacios-icono">
        <span>⌕</span>
      </div>

      <div className="productos-vacios-contenido">

        <h3>{titulo}</h3>

        <p>{mensaje}</p>

      </div>

      <div className="productos-vacios-acciones">

        {(hayBusqueda || hayCategoria) && (
          <button
            type="button"
            className="productos-vacios-btn productos-vacios-btn-principal"
            onClick={onLimpiar}
          >
            {hayBusqueda
              ? "Limpiar búsqueda"
              : "Ver todos los productos"}
          </button>
        )}

        {onAgregarProducto && (
          <button
            type="button"
            className="productos-vacios-btn productos-vacios-btn-secundario"
            onClick={onAgregarProducto}
          >
            Agregar producto
          </button>
        )}

      </div>

    </div>
  );
};

export default ProductosVacios;