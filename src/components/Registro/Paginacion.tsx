import "./RegistroComponents.css";
import { obtenerPaginasVisibles } from "../../utils/obtenerPaginasVisibles";

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

  const paginas = obtenerPaginasVisibles(
    paginaActual,
    totalPaginas
  );

  return (
    <div className="paginacion">
      <button
        disabled={paginaActual === 1}
        onClick={() => onCambiarPagina(paginaActual - 1)}
      >
        ← Anterior
      </button>

      {paginas.map((pagina, index) =>
        pagina === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="paginacion-puntos"
          >
            ...
          </span>
        ) : (
          <button
            key={pagina}
            className={
              paginaActual === pagina ? "activo" : ""
            }
            onClick={() => onCambiarPagina(pagina)}
          >
            {pagina}
          </button>
        )
      )}

      <button
        disabled={paginaActual === totalPaginas}
        onClick={() => onCambiarPagina(paginaActual + 1)}
      >
        Siguiente →
      </button>
    </div>
  );
};

export default Paginacion;