import type {
  MetodoPago,
  ProductoCarrito,
} from "../../types/ventasTypes";
import "./estilos/Carrito.css";


import carritoImg from "../../assets/images/carrito.svg";
import { CarritoItem, ResumenVenta, FinalizarVenta } from "../../components/Ventas";

interface CarritoProps {
  carrito: ProductoCarrito[];
  cantidadProductos: number;

  metodoPago: MetodoPago;

  total: number;

  onAumentar: (id: number) => void;
  onDisminuir: (id: number) => void;
  onEliminar: (id: number) => void;

  onCancelarVenta: () => void;

  finalizandoVenta: boolean;

  onCambiarMetodo: (
    metodo: MetodoPago
  ) => void;

  onFinalizarVenta: () => void;
  onVolverCarrito: () => void;
}

const Carrito = ({
  carrito,
  cantidadProductos,

  metodoPago,

  total,

  finalizandoVenta,

  onAumentar,
  onDisminuir,
  onEliminar,
  onCancelarVenta,

  onCambiarMetodo,

  onFinalizarVenta,
  onVolverCarrito,

}: CarritoProps) => {

  return (
    <aside className="carrito">

      {/* HEADER */}

     <div className="carrito-header">
      <div className="carrito-header-contenido">

          <div className="carrito-header-info">
            <h2>Carrito</h2>

            <span>
              {cantidadProductos}{" "}
              {cantidadProductos === 1
                ? "producto"
                : "productos"}
            </span>
          </div>


        </div>
      </div>
    


      {/* PRODUCTOS */}

    <div className="carrito-lista">

      {finalizandoVenta ? (

        <FinalizarVenta
          metodoPago={metodoPago}
          total={total}
          onCambiarMetodo={onCambiarMetodo}
          onVolver={onVolverCarrito}
          onConfirmar={(emitirTicket) => {
            console.log("Venta confirmada");
            console.log("Emitir ticket:", emitirTicket);
          }}
        />

      ) : carrito.length === 0 ? (

        <div className="carrito-vacio">

          <img
            src={carritoImg}
            alt=""
            className="carrito-vacio-icono"
          />

          <h3>Tu carrito está vacío</h3>

          <p>
            Agregá productos para comenzar.
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

      {/* RESUMEN */}

      {!finalizandoVenta && (
        <ResumenVenta
          total={total}
          tieneProductos={carrito.length > 0}
          onFinalizarVenta={onFinalizarVenta}
          onCancelarVenta={onCancelarVenta}
        />
      )}

    </aside>
  );
};

export default Carrito;