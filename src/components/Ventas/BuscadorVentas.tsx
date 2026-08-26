interface BuscadorVentasProps {
  value: string;
  onChange: (value: string) => void;
}

const BuscadorVentas = ({
  value,
  onChange,
}: BuscadorVentasProps) => {
  return (
    <div className="ventas-buscador">

      <span className="buscador-icono">
        🔍
      </span>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {value && (
        <button
          type="button"
          className="limpiar-busqueda"
          onClick={() => onChange("")}
          aria-label="Limpiar búsqueda"
        >
          ×
        </button>
      )}

    </div>
  );
};

export default BuscadorVentas;