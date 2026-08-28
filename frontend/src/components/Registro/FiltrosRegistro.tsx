import type { Filtro } from "../../hooks/useRegistro";

interface FiltrosRegistroProps {
  filtroActivo: Filtro;
  setFiltroActivo: React.Dispatch<React.SetStateAction<Filtro>>;
}

const filtros: Filtro[] = [
  "Todos",
  "Ventas",
  "Ingresos",
  "Egresos",
];

const FiltrosRegistro = ({
  filtroActivo,
  setFiltroActivo,
}: FiltrosRegistroProps) => {
  return (
    <div className="filtros">
      {filtros.map((filtro) => (
        <button
          key={filtro}
          className={`filtro-btn ${filtroActivo === filtro ? "active" : ""}`}
          onClick={() => setFiltroActivo(filtro)}
        >
          {filtro}
        </button>
      ))}
    </div>
  );
};

export default FiltrosRegistro;