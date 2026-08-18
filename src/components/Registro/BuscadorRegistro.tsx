

interface BuscadorRegistroProps {
  busqueda: string;
  setBusqueda: React.Dispatch<React.SetStateAction<string>>;
}

const BuscadorRegistro = ({
  busqueda,
  setBusqueda,
}: BuscadorRegistroProps) => {
  return (
    <div className="search-container">
      <img src="" alt="" />
      <span className="search-icon">🔍</span>

      <input
        type="text"
        placeholder="Buscar movimiento..."
        className="search-input"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
};

export default BuscadorRegistro;