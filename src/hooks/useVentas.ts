import { useMemo, useState } from "react";
import { PRODUCTOS_MOCK } from "../mocks/productos";
import type {
  Producto,
  ProductoCarrito,
  MetodoPago,
} from "../types/ventasTypes";

export const useVentas = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);

  const [metodoPago, setMetodoPago] =
    useState<MetodoPago>("Efectivo");

  const productosFiltrados = useMemo(() => {
    return PRODUCTOS_MOCK.filter((producto) => {
      const coincideBusqueda = producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      const coincideCategoria =
        categoria === "Todos" ||
        producto.categoria === categoria;

      return coincideBusqueda && coincideCategoria;
    });
  }, [busqueda, categoria]);

  const agregarProducto = (producto: Producto) => {
    setCarrito((prev) => {
      const existe = prev.find(
        (p) => p.id === producto.id
      );

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
        .filter(
          (producto) => producto.cantidad > 0
        )
    );
  };

  const eliminarProducto = (id: number) => {
    setCarrito((prev) =>
      prev.filter(
        (producto) => producto.id !== id
      )
    );
  };

  const total = useMemo(() => {
    return carrito.reduce(
      (acc, producto) =>
        acc + producto.precio * producto.cantidad,
      0
    );
  }, [carrito]);

  const cantidadProductos = useMemo(() => {
    return carrito.reduce(
      (acc, producto) => acc + producto.cantidad,
      0
    );
  }, [carrito]);

  const cancelarVenta = () => {
    setCarrito([]);
  };

  return {
    busqueda,
    setBusqueda,

    categoria,
    setCategoria,

    carrito,
    cancelarVenta,

    metodoPago,
    setMetodoPago,

    productosFiltrados,

    agregarProducto,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,

    total,
    cantidadProductos,
  };
};