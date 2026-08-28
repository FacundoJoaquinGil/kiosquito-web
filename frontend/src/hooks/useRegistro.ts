import { useEffect, useState } from "react";
import {
  MOVIMIENTOS_MOCK,
  type Movimiento,
} from "../data/movimientosMock";

const MOVIMIENTOS_POR_PAGINA = 10;

export type Filtro =
  | "Todos"
  | "Ventas"
  | "Ingresos"
  | "Egresos";

export const useRegistro = () => {
  const [movimientos, setMovimientos] = useState<Movimiento[]>([]);
  const [loading, setLoading] = useState(true);

  const [busqueda, setBusqueda] = useState("");

  const [filtroActivo, setFiltroActivo] =
    useState<Filtro>("Todos");

  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    const obtenerMovimientos = () => {
      setTimeout(() => {
        setMovimientos(MOVIMIENTOS_MOCK);
        setLoading(false);
      }, 1000);
    };

    obtenerMovimientos();
  }, []);

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, filtroActivo]);

  const ventasHoy = movimientos.filter(
    (m) => m.tipo === "venta"
  ).length;

  const ingresosHoy = movimientos
    .filter(
      (m) =>
        m.tipo === "venta" ||
        m.tipo === "ingreso"
    )
    .reduce((sum, m) => sum + m.monto, 0);

  const cajaActual = movimientos.reduce((total, m) => {
    return m.tipo === "egreso"
      ? total - m.monto
      : total + m.monto;
  }, 0);

  const movimientosFiltrados = movimientos.filter((mov) => {
    const coincideFiltro =
      filtroActivo === "Todos" ||
      (filtroActivo === "Ventas" &&
        mov.tipo === "venta") ||
      (filtroActivo === "Ingresos" &&
        (mov.tipo === "venta" ||
          mov.tipo === "ingreso")) ||
      (filtroActivo === "Egresos" &&
        mov.tipo === "egreso");

    const coincideBusqueda = mov.descripcion
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    return coincideFiltro && coincideBusqueda;
  });

  const totalPaginas = Math.ceil(
    movimientosFiltrados.length /
      MOVIMIENTOS_POR_PAGINA
  );

  const movimientosPaginados =
    movimientosFiltrados.slice(
      (paginaActual - 1) *
        MOVIMIENTOS_POR_PAGINA,
      paginaActual *
        MOVIMIENTOS_POR_PAGINA
    );

  return {
    loading,

    ventasHoy,
    ingresosHoy,
    cajaActual,

    movimientosPaginados,

    paginaActual,
    totalPaginas,

    busqueda,
    filtroActivo,

    setBusqueda,
    setFiltroActivo,
    setPaginaActual,
  };
};