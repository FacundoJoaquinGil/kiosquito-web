import "./estilos/ConfirmacionAccion.css";

interface ConfirmacionAccionProps {
  titulo: string;
  mensaje: string;
  textoCancelar: string;
  textoConfirmar: string;

  onCancelar: () => void;
  onConfirmar: () => void;
}

const ConfirmacionAccion = ({
  titulo,
  mensaje,
  textoCancelar,
  textoConfirmar,
  onCancelar,
  onConfirmar,
}: ConfirmacionAccionProps) => {
  return (
    <div className="confirmacion-accion">

      <div className="confirmacion-icono">
        !
      </div>

      <div className="confirmacion-contenido">

        <h3>{titulo}</h3>

        <p>{mensaje}</p>

      </div>

      <div className="confirmacion-acciones">

        <button
          type="button"
          className="confirmacion-btn-volver"
          onClick={onCancelar}
        >
          {textoCancelar}
        </button>

        <button
          type="button"
          className="confirmacion-btn-confirmar"
          onClick={onConfirmar}
        >
          {textoConfirmar}
        </button>

      </div>

    </div>
  );
};

export default ConfirmacionAccion;