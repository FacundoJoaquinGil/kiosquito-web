import type {
  MetodoPago,
  ProductoCarrito,
} from "../../types/ventasTypes";

import CarritoItem from "./CarritoItem";
import MetodosPago from "./MetodosPago";
import ResumenVenta from "./ResumenVenta";

interface CarritoProps {
  carrito: ProductoCarrito[];
  cantidadProductos: number;

  metodoPago: MetodoPago;

  total: number;

  onAumentar: (id: number) => void;
  onDisminuir: (id: number) => void;
  onEliminar: (id: number) => void;

  onCambiarMetodo: (
    metodo: MetodoPago
  ) => void;
}

const Carrito = ({
  carrito,
  cantidadProductos,

  metodoPago,

  total,

  onAumentar,
  onDisminuir,
  onEliminar,

  onCambiarMetodo,
}: CarritoProps) => {

  return (
    <aside className="carrito">

      {/* HEADER */}

      <div className="carrito-header">

        <h2>Carrito</h2>

        <span>
          {cantidadProductos}{" "}
          {cantidadProductos === 1
            ? "producto"
            : "productos"}
        </span>

      </div>


      {/* PRODUCTOS */}

      <div className="carrito-lista">

        {carrito.length === 0 ? (

          <div className="carrito-vacio">

            <p>
              No hay productos agregados.
            </p>

          </div>

        ) : (

          carrito.map((producto) => (

            <CarritoItem
              key={producto.id}
              producto={producto}
              onAumentar={onAumentar}
              onDisminuir={onDisminuir}
              onEliminar={onEliminar}
            />

          ))

        )}

      </div>


      {/* MÉTODO DE PAGO */}

      <MetodosPago
        metodoActual={metodoPago}
        onCambiarMetodo={onCambiarMetodo}
      />


      {/* RESUMEN */}

      <ResumenVenta
        total={total}
        tieneProductos={carrito.length > 0}
      />

    </aside>
  );
};

export default Carrito;