import "./Beneficios.css";

import svg1 from "../../assets/images/bnf-svg1.svg";
import svg2 from "../../assets/images/bnf-svg2.svg";
import svg3 from "../../assets/images/bnf-svg3.svg";
import svg4 from "../../assets/images/bnf-svg4.svg";

const beneficios = [
  {
    icono: svg1,
    titulo: "Control de stock",
    descripcion:
      "Agregá y editá productos, y enterate al instante cuáles están por agotarse.",
  },
  {
    icono: svg2,
    titulo: "Registro de ventas",
    descripcion:
      "Cargá una venta y descontá el stock automáticamente en un solo toque.",
  },
  {
    icono: svg3,
    titulo: "Movimientos del día",
    descripcion:
      "Mirá todo lo que pasó en tu kiosco hoy: ventas, ingresos y reposiciones.",
  },
  {
    icono: svg4,
    titulo: "Resumen claro",
    descripcion:
      "Un panel simple con lo importante para tomar decisiones sin perder tiempo.",
  },
];

const Beneficios = () => {
  return (
    <section className="beneficioss" id="beneficios">
      <div className="beneficioss-header">
        <h2>Todo lo que tu kiosco necesita</h2>

        <p>
          Herramientas pensadas para el día a día real de un kiosco, sin
          vueltas.
        </p>
      </div>

      <div className="beneficioss-grid">
        {beneficios.map((item) => (
          <article className="beneficios-card" key={item.titulo}>
            <div className="beneficios-icono">
              <img src={item.icono} alt={item.titulo} />
            </div>

            <h3>{item.titulo}</h3>

            <p>{item.descripcion}</p>
          </article>
        ))}
      </div>

      <svg
        className="wave-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,96L80,122.7C160,149,320,203,480,224C640,245,800,235,960,202.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L0,320Z"
        />
      </svg>
      
    </section>
  );
};

export default Beneficios;
