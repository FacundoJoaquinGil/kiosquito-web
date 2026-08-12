export type CategoriaProducto =
  | "Bebidas"
  | "Snacks"
  | "Golosinas"
  | "Cigarrillos";

export interface Producto {
  id: number;
  nombre: string;
  categoria: CategoriaProducto;
  precio: number;
  stock: number;
}

export interface ProductoCarrito extends Producto {
  cantidad: number;
}

export type MetodoPago =
  | "Efectivo"
  | "Tarjeta"
  | "QR";