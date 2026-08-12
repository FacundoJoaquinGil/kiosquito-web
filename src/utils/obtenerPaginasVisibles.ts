export const obtenerPaginasVisibles = (
  paginaActual: number,
  totalPaginas: number
): (number | "...")[] => {
  const paginas: (number | "...")[] = [];

  if (totalPaginas <= 7) {
    return Array.from({ length: totalPaginas }, (_, i) => i + 1);
  }

  paginas.push(1);

  if (paginaActual > 4) {
    paginas.push("...");
  }

  const inicio = Math.max(2, paginaActual - 1);
  const fin = Math.min(totalPaginas - 1, paginaActual + 1);

  for (let i = inicio; i <= fin; i++) {
    paginas.push(i);
  }

  if (paginaActual < totalPaginas - 3) {
    paginas.push("...");
  }

  paginas.push(totalPaginas);

  return paginas;
};