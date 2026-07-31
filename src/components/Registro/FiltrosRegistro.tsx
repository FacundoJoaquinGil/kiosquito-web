interface FiltrosRegistroProps {
  filtroActivo: string;
  setFiltroActivo: React.Dispatch<React.SetStateAction<string>>;
}

const filtros = ["Todos", "Ventas", "Ingresos", "Egresos"];

const FiltrosRegistro = ({
  filtroActivo,
  setFiltroActivo,
}: FiltrosRegistroProps) => {
  return (
    <div className="filtros">
      {filtros.map((filtro) => (
        <button
          key={filtro}
          className={`filtro-btn ${
            filtroActivo === filtro ? "active" : ""
          }`}
          onClick={() => setFiltroActivo(filtro)}
        >
          {filtro}
        </button>
      ))}
    </div>
  );
};

export default FiltrosRegistro;