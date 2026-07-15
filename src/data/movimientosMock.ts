// src/data/movimientosMock.ts

export interface Movimiento {
  id: number;
  tipo: "venta" | "ingreso" | "egreso";
  descripcion: string;
  detalle_adicional?: string;
  hora: string;
  monto: number;
}

export const MOVIMIENTOS_MOCK: Movimiento[] = [
  {
    id: 1042,
    tipo: "venta",
    descripcion: "Coca-Cola 500ml x2, Alfajor",
    hora: "14:32",
    monto: 2150,
  },
  {
    id: 1041,
    tipo: "venta",
    descripcion: "Cigarrillos, Encendedor",
    hora: "14:18",
    monto: 3400,
  },
  {
    id: 1040,
    tipo: "ingreso",
    descripcion: "Reposición de caja",
    detalle_adicional: "Ingreso manual",
    hora: "14:05",
    monto: 10000,
  },
  {
    id: 1039,
    tipo: "egreso",
    descripcion: "Pago proveedor de bebidas",
    detalle_adicional: "Egreso manual",
    hora: "13:22",
    monto: 8500,
  },
  {
    id: 1038,
    tipo: "venta",
    descripcion: "Chicles Beldent x3, Agua Mineral",
    hora: "12:15",
    monto: 1800,
  },
  {
    id: 1037,
    tipo: "venta",
    descripcion: "Cerveza Quilmes 1L, Papas Lays Grandes",
    hora: "11:50",
    monto: 5400,
  },
  {
    id: 1036,
    tipo: "egreso",
    descripcion: "Retiro para cambio (Monedas y billetes chicos)",
    detalle_adicional: "Egreso manual",
    hora: "11:05",
    monto: 3000,
  },
  {
    id: 1035,
    tipo: "venta",
    descripcion: "Carga Virtual Personal",
    detalle_adicional: "Servicios",
    hora: "10:45",
    monto: 2000,
  },
  {
    id: 1034,
    tipo: "venta",
    descripcion: "Fernet Branca 750ml, Coca-Cola 2.25L",
    hora: "10:12",
    monto: 13500,
  },
  {
    id: 1033,
    tipo: "venta",
    descripcion: "Turrón de maní x4, Flynn Paff x10",
    hora: "09:55",
    monto: 1200,
  },
  {
    id: 1032,
    tipo: "ingreso",
    descripcion: "Cobro de servicio (Carga SUBE)",
    detalle_adicional: "Ingreso manual",
    hora: "09:20",
    monto: 1500,
  },
  {
    id: 1031,
    tipo: "venta",
    descripcion: "Galletas Sonrisas, Chocolatada Cindor 1L",
    hora: "08:40",
    monto: 3800,
  },
  {
    id: 1030,
    tipo: "venta",
    descripcion: "Café al paso, Medialunas x3",
    hora: "08:10",
    monto: 2900,
  },
  {
    id: 1029,
    tipo: "ingreso",
    descripcion: "Apertura de caja",
    detalle_adicional: "Caja inicial",
    hora: "08:00",
    monto: 20000,
  }
];