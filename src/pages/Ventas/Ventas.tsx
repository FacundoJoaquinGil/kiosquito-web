 import { useMemo, useState } from "react";
import "./Ventas.css";
import { PRODUCTOS_MOCK } from "../../mocks/productos";
import { Producto, ProductoCarrito } from "./types";

const categorias = [
  "Todos",
  "Bebidas",
  "Snacks",
  "Golosinas",
  "Cigarrillos",
];

const Ventas = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);

  const [metodoPago, setMetodoPago] = useState<
    "Efectivo" | "Tarjeta" | "QR"
  >("Efectivo");

  const productosFiltrados = useMemo(() => {
    return PRODUCTOS_MOCK.filter((producto) => {
      const coincideBusqueda = producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      const coincideCategoria =
        categoria === "Todos" || producto.categoria === categoria;

      return coincideBusqueda && coincideCategoria;
    });
  }, [busqueda, categoria]);

  const agregarProducto = (producto: Producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);

      if (existe) {
        return prev.map((p) =>
          p.id === producto.id
            ? {
                ...p,
                cantidad: p.cantidad + 1,
              }
            : p
        );
      }

      return [
        ...prev,
        {
          ...producto,
          cantidad: 1,
        },
      ];
    });
  };

  const aumentarCantidad = (id: number) => {
    setCarrito((prev) =>
      prev.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              cantidad: producto.cantidad + 1,
            }
          : producto
      )
    );
  };

  const disminuirCantidad = (id: number) => {
    setCarrito((prev) =>
      prev
        .map((producto) =>
          producto.id === id
            ? {
                ...producto,
                cantidad: producto.cantidad - 1,
              }
            : producto
        )
        .filter((producto) => producto.cantidad > 0)
    );
  };

  const eliminarProducto = (id: number) => {
    setCarrito((prev) => prev.filter((producto) => producto.id !== id));
  };

  const total = useMemo(() => {
    return carrito.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
  }, [carrito]);

  const formatearDinero = (valor: number) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(valor);

  return (
    <div className="ventas">

      <section className="ventas-productos">

        <div className="ventas-header">

          <h2>Nueva venta</h2>

          <p>Seleccioná productos para agregarlos al carrito.</p>

        </div>

        <div className="ventas-buscador">

          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

        </div>

        <div className="ventas-categorias">

          {categorias.map((cat) => (

            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={
                categoria === cat
                  ? "categoria-btn activa"
                  : "categoria-btn"
              }
            >
              {cat}
            </button>

          ))}

        </div>

        <div className="productos-grid">

          {productosFiltrados.map((producto) => (

            <article
              key={producto.id}
              className="producto-card"
            >

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
                className="agregar-btn"
                onClick={() => agregarProducto(producto)}
              >
                +
              </button>

            </article>

          ))}

        </div>

      </section>
            <aside className="carrito">

        <div className="carrito-header">

          <h2>Carrito</h2>

          <span>
            {carrito.reduce((acc, item) => acc + item.cantidad, 0)} productos
          </span>

        </div>

        <div className="carrito-lista">

          {carrito.length === 0 ? (

            <div className="carrito-vacio">

              <p>No hay productos agregados.</p>

            </div>

          ) : (

            carrito.map((producto) => (

              <div
                key={producto.id}
                className="carrito-item"
              >

                <div className="carrito-info">

                  <h4>{producto.nombre}</h4>

                  <span>
                    {formatearDinero(producto.precio)}
                  </span>

                </div>

                <div className="carrito-cantidad">

                  <button
                    onClick={() =>
                      disminuirCantidad(producto.id)
                    }
                  >
                    −
                  </button>

                  <span>{producto.cantidad}</span>

                  <button
                    onClick={() =>
                      aumentarCantidad(producto.id)
                    }
                  >
                    +
                  </button>

                </div>

                <div className="carrito-subtotal">

                  {formatearDinero(
                    producto.precio * producto.cantidad
                  )}

                </div>

                <button
                  className="eliminar-btn"
                  onClick={() =>
                    eliminarProducto(producto.id)
                  }
                >
                  ✕
                </button>

              </div>

            ))

          )}

        </div>

        <div className="metodos-pago">

          <h3>Método de pago</h3>

          <div className="metodos-grid">

            <button
              onClick={() => setMetodoPago("Efectivo")}
              className={
                metodoPago === "Efectivo"
                  ? "metodo activo"
                  : "metodo"
              }
            >
              💵
              <span>Efectivo</span>
            </button>

            <button
              onClick={() => setMetodoPago("Tarjeta")}
              className={
                metodoPago === "Tarjeta"
                  ? "metodo activo"
                  : "metodo"
              }
            >
              💳
              <span>Tarjeta</span>
            </button>

            <button
              onClick={() => setMetodoPago("QR")}
              className={
                metodoPago === "QR"
                  ? "metodo activo"
                  : "metodo"
              }
            >
              📱
              <span>QR</span>
            </button>

          </div>

        </div>

        <div className="resumen">

          <div className="resumen-linea">

            <span>Total</span>

            <strong>

              {formatearDinero(total)}

            </strong>

          </div>

          <button
            className="btn-cobrar"
            disabled={carrito.length === 0}
          >
            Cobrar
          </button>

        </div>

      </aside>

    </div>
  );
};

export default Ventas;