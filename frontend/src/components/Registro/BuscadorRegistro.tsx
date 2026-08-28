import lupa from "../../assets/images/lupa.svg";
import "./BuscadorRegistro.css";

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
      <span className="buscador-icono-registro">
              <img src={lupa} alt="" aria-hidden="true" />
            </span>

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