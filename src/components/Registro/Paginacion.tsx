interface PaginacionProps {
  paginaActual: number;
  totalPaginas: number;
  onCambiarPagina: (pagina: number) => void;
}

const Paginacion = ({
  paginaActual,
  totalPaginas,
  onCambiarPagina,
}: PaginacionProps) => {
  if (totalPaginas <= 1) return null;

  return (
    <div className="paginacion">
      <button
        disabled={paginaActual === 1}
        onClick={() => onCambiarPagina(paginaActual - 1)}
      >
        Anterior
      </button>

      {Array.from({ length: totalPaginas }, (_, i) => (
        <button
          key={i}
          className={paginaActual === i + 1 ? "activo" : ""}
          onClick={() => onCambiarPagina(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={paginaActual === totalPaginas}
        onClick={() => onCambiarPagina(paginaActual + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;