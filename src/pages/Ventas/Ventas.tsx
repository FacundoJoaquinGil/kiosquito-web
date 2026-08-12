
import { BuscadorVentas, Carrito, FiltrosCategorias, ListaProductos } from "../../components/Ventas";
import { useVentas } from "../../hooks/useVentas";
import "./Ventas.css";


const Ventas = () => {

  const {
    busqueda,
    setBusqueda,

    categoria,
    setCategoria,

    carrito,

    metodoPago,
    setMetodoPago,

    productosFiltrados,

    agregarProducto,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,

    total,
    cantidadProductos,
  } = useVentas();

  return (
    <div className="ventas">

      <section className="ventas-productos">

        <div className="ventas-header">

          <h2>Nueva venta</h2>

          <p>
            Seleccioná productos para
            agregarlos al carrito.
          </p>

        </div>

        <BuscadorVentas
          value={busqueda}
          onChange={setBusqueda}
        />

        <FiltrosCategorias
          categoriaActual={categoria}
          onCambiarCategoria={setCategoria}
        />

        <ListaProductos
          productos={productosFiltrados}
          onAgregar={agregarProducto}
        />

      </section>


      <Carrito
        carrito={carrito}
        cantidadProductos={cantidadProductos}
        metodoPago={metodoPago}
        total={total}
        onAumentar={aumentarCantidad}
        onDisminuir={disminuirCantidad}
        onEliminar={eliminarProducto}
        onCambiarMetodo={setMetodoPago}
      />

    </div>
  );
};

export default Ventas;