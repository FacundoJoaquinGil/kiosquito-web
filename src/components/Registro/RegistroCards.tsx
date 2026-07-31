import billetera from "../../assets/images/billetera.svg";
import grafico from "../../assets/images/grafico.svg";
import registrodia from "../../assets/images/registrodia.svg";

interface RegistroCardsProps {
  ventasHoy: number;
  ingresosHoy: string;
  cajaActual: string;
}

const RegistroCards = ({
  ventasHoy,
  ingresosHoy,
  cajaActual,
}: RegistroCardsProps) => {
  return (
    <div className="registro-cards">
      <div className="card">
        <div className="card-header">
          <span className="card-title">Ventas de hoy</span>
          <img src={registrodia} alt="icono-registrodia" />
        </div>

        <h3 className="card-value">{ventasHoy}</h3>

        <p className="card-sub-green">+3 vs. ayer</p>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Ingresos del día</span>
          <img src={grafico} alt="icono-grafico" />
        </div>

        <h3 className="card-value">{ingresosHoy}</h3>

        <p className="card-sub-green">+12% vs. ayer</p>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Caja actual</span>
          <img src={billetera} alt="icono-billetera" />
        </div>

        <h3 className="card-value">{cajaActual}</h3>

        <p className="card-sub-gray">
          Actualizado hace un momento
        </p>
      </div>
    </div>
  );
};

export default RegistroCards;