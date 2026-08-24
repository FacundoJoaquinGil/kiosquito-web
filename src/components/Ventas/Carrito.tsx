import type {
  MetodoPago,
  ProductoCarrito,
} from "../../types/ventasTypes";
import "./estilos/Carrito.css";


import carritoImg from "../../assets/images/carrito.svg";
import { MetodosPago, CarritoItem, ResumenVenta } from "../../components/Ventas";

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
  
  onCancelarVenta,
  onAumentar,
  onDisminuir,
  onEliminar,

  onCambiarMetodo,
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

            {carrito.length === 0 ? (

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

      <ResumenVenta
        total={total}
        tieneProductos={carrito.length > 0}
      />

    </aside>
  );
};

export default Carrito;